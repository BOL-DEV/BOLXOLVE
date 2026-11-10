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

/**
 * Generates a centered 1200x630 OpenGraph / Twitter banner whose core emblem
 * and wordmark sit strictly inside the central 580x580 square safe zone so
 * WhatsApp compact 1:1 crops and full 1.91:1 social cards both stay sharp.
 */
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#050915",
          backgroundImage:
            "radial-gradient(circle at 50% 45%, rgba(186, 242, 71, 0.18) 0%, rgba(16, 21, 34, 0.4) 42%, rgba(5, 9, 21, 1) 78%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
          border: "2px solid #1E2638",
          padding: "48px",
        }}
      >
        {/* Center Safe-Zone Focal Block (fits cleanly inside WhatsApp 1:1 square crop) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            maxWidth: "560px",
          }}
        >
          {logoSrc && (
            <img
              src={logoSrc}
              alt="BOLXOLVE"
              width={136}
              height={178}
              style={{ objectFit: "contain" }}
            />
          )}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <span
              style={{
                fontSize: "68px",
                fontWeight: 900,
                letterSpacing: "0.14em",
                color: "#FFFFFF",
                lineHeight: 1,
              }}
            >
              BOLXOLVE
            </span>

            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                color: "#BAF247",
              }}
            >
              DIGITAL SOLUTIONS
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 26px",
              borderRadius: "9999px",
              backgroundColor: "#101522",
              border: "1px solid #2A354D",
              color: "#D4D4D8",
              fontSize: "20px",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            bolxolve.com
          </div>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
    }
  );
}
