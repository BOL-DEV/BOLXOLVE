import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const OG_SIZE = {
  width: 1200,
  height: 630,
};

let cachedLogoDataUri: string | null = null;

function getLogoDataUri(): string | null {
  if (cachedLogoDataUri) return cachedLogoDataUri;
  try {
    const logoPath = path.join(process.cwd(), "public", "brand", "logo_icon_hi_res.png");
    const buffer = fs.readFileSync(logoPath);
    cachedLogoDataUri = `data:image/png;base64,${buffer.toString("base64")}`;
    return cachedLogoDataUri;
  } catch {
    return null;
  }
}

export function createBrandOgImage() {
  const logoSrc = getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#050915",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(186, 242, 71, 0.16) 0%, rgba(5, 9, 21, 0) 55%)",
          padding: "56px 64px",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          border: "1px solid #1E2638",
        }}
      >
        {/* Top Row: Brand Identity & Category Pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {logoSrc && (
              <img
                src={logoSrc}
                alt="BOLXOLVE"
                width={42}
                height={54}
                style={{ objectFit: "contain" }}
              />
            )}
            <span
              style={{
                fontSize: "28px",
                fontWeight: 800,
                letterSpacing: "0.08em",
                color: "#FFFFFF",
              }}
            >
              BOLXOLVE
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 18px",
              borderRadius: "9999px",
              backgroundColor: "#101522",
              border: "1px solid #1E2638",
              color: "#BAF247",
              fontSize: "14px",
              letterSpacing: "0.18em",
              fontWeight: 600,
            }}
          >
            DIGITAL SOLUTIONS & TECHNOLOGY
          </div>
        </div>

        {/* Main Center Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            maxWidth: "980px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>We turn complex challenges into</span>
            <span style={{ color: "#BAF247" }}>powerful digital solutions.</span>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "24px",
              color: "#A1A1AA",
              lineHeight: 1.4,
            }}
          >
            Custom Software &bull; Web Platforms &bull; Business Automation &bull; Practical AI
          </div>
        </div>

        {/* Bottom Metadata Strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid #1E2638",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              fontSize: "18px",
              color: "#D4D4D8",
            }}
          >
            <span>ZENTRA</span>
            <span style={{ color: "#3F3F46" }}>/</span>
            <span>Invoice Management</span>
            <span style={{ color: "#3F3F46" }}>/</span>
            <span>BOLMEET AI</span>
          </div>

          <span
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#BAF247",
              letterSpacing: "0.06em",
            }}
          >
            bolxolve.com
          </span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}

