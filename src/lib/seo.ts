export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://bolxolve.com";

export const SITE_CONFIG = {
  name: "BOLXOLVE LTD",
  shortName: "BOLXOLVE",
  tagline: "Custom Software, Websites & Intelligent Automation",
  defaultTitle: "BOLXOLVE LTD — Custom Software, Websites & Intelligent Automation",
  defaultDescription:
    "We build business websites, custom software, e-commerce platforms and intelligent automation that help businesses operate smarter and grow.",
  email: "contact@bolxolve.com",
  phone: "+2347087035189",
  locale: "en_GB",
  themeColor: "#050915",
  accentColor: "#BAF247",
} as const;

