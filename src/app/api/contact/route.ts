import { NextResponse } from "next/server";

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;
const MAX_TRACKED_IPS = 2000;
const ipRequestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW_MS;

  // Prune expired entries occasionally to bound memory usage
  if (ipRequestLog.size > MAX_TRACKED_IPS) {
    ipRequestLog.forEach((timestamps, key) => {
      const active = timestamps.filter((t) => t > windowStart);
      if (active.length === 0) {
        ipRequestLog.delete(key);
      } else {
        ipRequestLog.set(key, active);
      }
    });
  }

  const existing = (ipRequestLog.get(ip) || []).filter((t) => t > windowStart);
  if (existing.length >= RATE_LIMIT_MAX_REQUESTS) {
    ipRequestLog.set(ip, existing);
    return true;
  }

  existing.push(now);
  ipRequestLog.set(ip, existing);
  return false;
}

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}

function sanitizeSingleLine(value: string, maxLength: number): string {
  return value.replace(/[\r\n]+/g, " ").trim().slice(0, maxLength);
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    let body: Record<string, unknown>;
    try {
      body = (await request.json()) as Record<string, unknown>;
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const { fullName, email, business, service, projectDetails, companyWebsite } = body;

    // Silent honeypot drop for automated spam bots (never burns Brevo quota)
    if (typeof companyWebsite === "string" && companyWebsite.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Your enquiry has been received.",
      });
    }

    // Per-IP sliding window rate limit
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Too many enquiries sent from this connection. Please wait a few minutes or use our direct email below.",
          needsMailtoFallback: true,
        },
        { status: 429 }
      );
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !email ||
      typeof email !== "string" ||
      email.trim().length > 200 ||
      !emailRegex.test(email.trim())
    ) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!service || typeof service !== "string" || !service.trim()) {
      return NextResponse.json(
        { success: false, error: "Service selection is required." },
        { status: 400 }
      );
    }

    if (
      !projectDetails ||
      typeof projectDetails !== "string" ||
      projectDetails.trim().length < 10
    ) {
      return NextResponse.json(
        { success: false, error: "Project description must be at least 10 characters." },
        { status: 400 }
      );
    }

    const brevoApiKey = process.env.BREVO_API_KEY;
    const senderEmail = process.env.BREVO_SENDER_EMAIL || "contact@bolxolve.com";
    const senderName = process.env.BREVO_SENDER_NAME || "BOLXOLVE Inquiries";
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "contact@bolxolve.com";

    // If Brevo API key is not configured, inform client gracefully
    if (!brevoApiKey || brevoApiKey.trim() === "") {
      return NextResponse.json(
        {
          success: false,
          error:
            "Brevo API key is not yet configured. Please set BREVO_API_KEY in your environment variables.",
          needsMailtoFallback: true,
        },
        { status: 503 }
      );
    }

    const cleanName = sanitizeSingleLine(fullName, 120);
    const cleanEmail = sanitizeSingleLine(email, 200);
    const cleanBusiness =
      typeof business === "string" && business.trim()
        ? sanitizeSingleLine(business, 160)
        : "Not specified";
    const cleanService = sanitizeSingleLine(service, 120);
    const cleanDetails = projectDetails.trim().slice(0, 5000);

    const subject = `New Project Enquiry: ${cleanService} — ${cleanName}${cleanBusiness !== "Not specified" ? ` (${cleanBusiness})` : ""
      }`;

    // Clean, standard professional email layout
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>
<body style="margin: 0; padding: 16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937; line-height: 1.6;">
  <div style="max-width: 600px;">
    <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 600; color: #111827;">
      New Project Enquiry
    </h2>

    <table cellpadding="0" cellspacing="0" border="0" style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
      <tr>
        <td style="width: 175px; color: #6b7280; vertical-align: top; padding: 6px 12px 6px 0;">Full Name:</td>
        <td style="color: #111827; font-weight: 500; padding: 6px 0;">${escapeHtml(cleanName)}</td>
      </tr>
      <tr>
        <td style="color: #6b7280; vertical-align: top; padding: 6px 12px 6px 0;">Email Address:</td>
        <td style="padding: 6px 0;"><a href="mailto:${escapeHtml(cleanEmail)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(cleanEmail)}</a></td>
      </tr>
      <tr>
        <td style="color: #6b7280; vertical-align: top; padding: 6px 12px 6px 0;">Business / Organisation:</td>
        <td style="color: #111827; padding: 6px 0;">${escapeHtml(cleanBusiness)}</td>
      </tr>
      <tr>
        <td style="color: #6b7280; vertical-align: top; padding: 6px 12px 6px 0;">Service Needed:</td>
        <td style="color: #111827; font-weight: 500; padding: 6px 0;">${escapeHtml(cleanService)}</td>
      </tr>
    </table>

    <div style="border-top: 1px solid #e5e7eb; padding-top: 16px; margin-bottom: 20px;">
      <p style="margin: 0 0 8px 0; font-size: 13px; font-weight: 600; color: #4b5563; text-transform: uppercase; letter-spacing: 0.04em;">
        Project Description
      </p>
      <p style="margin: 0; font-size: 14px; color: #111827; white-space: pre-wrap;">${escapeHtml(cleanDetails)}</p>
    </div>

    <p style="margin: 24px 0 0 0; padding-top: 12px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
      Sent via <a href="https://bolxolve.com" style="color: #6b7280; text-decoration: underline;">bolxolve.com</a> contact form &bull; ${new Date().toUTCString()}
    </p>
  </div>
</body>
</html>
    `;

    const textContent = `
BOLXOLVE PROJECT ENQUIRY
----------------------------------------
Full Name: ${cleanName}
Email: ${cleanEmail}
Business / Organisation: ${cleanBusiness}
Service: ${cleanService}

PROJECT DESCRIPTION:
${cleanDetails}
----------------------------------------
Sent via bolxolve.com
    `.trim();

    // Send via Brevo REST API v3
    const brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": brevoApiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: senderName,
          email: senderEmail,
        },
        to: [
          {
            email: receiverEmail,
            name: "BOLXOLVE Team",
          },
        ],
        replyTo: {
          email: cleanEmail,
          name: cleanName,
        },
        subject,
        htmlContent,
        textContent,
      }),
    });

    const brevoData = await brevoResponse.json();

    if (!brevoResponse.ok) {
      console.error("Brevo API Error:", brevoData);
      return NextResponse.json(
        {
          success: false,
          error:
            brevoData.message ||
            "Failed to send email via Brevo. Please check your API key and verified sender.",
          needsMailtoFallback: true,
        },
        { status: brevoResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been successfully delivered to the BOLXOLVE team.",
      messageId: brevoData.messageId,
    });
  } catch (error) {
    console.error("Contact API Exception:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected server error occurred while processing your request.",
        needsMailtoFallback: true,
      },
      { status: 500 }
    );
  }
}

