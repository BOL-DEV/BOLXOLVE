export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://bolxolve.com";

export const SITE_CONFIG = {
  name: "BOLXOLVE LTD",
  shortName: "BOLXOLVE",
  tagline: "Hybrid Digital Solutions & Technology",
  defaultTitle: "BOLXOLVE LTD — Hybrid Digital Solutions & Technology",
  defaultDescription:
    "BOLXOLVE LTD is a technology-driven digital solutions company delivering business websites, e-commerce platforms, custom web applications, business management systems, workflow automation, and AI integrations.",
  email: "contact@bolxolve.com",
  phone: "+2347087035189",
  locale: "en_GB",
  themeColor: "#050915",
  accentColor: "#BAF247",
} as const;

