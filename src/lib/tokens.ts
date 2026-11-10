/**
 * BOLXOLVE Design System Tokens
 * Source of truth for all brand parameters, scales, and component defaults.
 */

export const BRAND_COLORS = {
  // Dark Context (Primary Brand Identity)
  dark: {
    bg: "#050915",
    surface: "#101522",
    surfaceElevated: "#151B2B",
    surfaceBorder: "#1E2638",
    surfaceBorderHover: "rgba(186, 242, 71, 0.25)",
    textPrimary: "#FFFFFF",
    textSecondary: "#A1A1AA",
    textTertiary: "#71717A",
    accent: "#BAF247",
    accentHover: "#A8E035",
    accentActive: "#94CC24",
    accentMuted: "rgba(186, 242, 71, 0.12)",
    accentGlow: "rgba(186, 242, 71, 0.15)",
  },
  // Light Context (Contrasting Technical Sections / Light Mode)
  light: {
    bg: "#F8FAFC",
    surface: "#FFFFFF",
    surfaceElevated: "#F1F5F9",
    surfaceBorder: "#E2E8F0",
    surfaceBorderHover: "#CBD5E1",
    textPrimary: "#050915",
    textSecondary: "#64748B",
    textTertiary: "#94A3B8",
    accent: "#4D7C0F", // Accessible contrast ratio on light backgrounds
    accentHover: "#3F6212",
    accentActive: "#365314",
    accentMuted: "rgba(77, 124, 15, 0.08)",
    accentGlow: "rgba(77, 124, 15, 0.1)",
  },
} as const;

export const TYPOGRAPHY = {
  fontFamilies: {
    sans: "var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    mono: "var(--font-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacing: {
    tighter: "-0.035em",
    tight: "-0.02em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.06em",
    widest: "0.12em",
  },
} as const;

export const SPACING = {
  gutter: {
    mobile: "1rem",     // 16px
    tablet: "1.5rem",   // 24px
    desktop: "2rem",    // 32px
  },
  section: {
    sm: "4rem",         // 64px
    md: "6rem",         // 96px
    lg: "8rem",         // 128px
  },
  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1400px",
  },
} as const;

export const ANIMATION = {
  transition: {
    fast: "150ms cubic-bezier(0.16, 1, 0.3, 1)",
    normal: "200ms cubic-bezier(0.16, 1, 0.3, 1)",
    slow: "300ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bolxolve/",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/bolxolve-ltd",
  },
  {
    id: "facebook",
    label: "Facebook",
    href: "https://web.facebook.com/bolxolve/",
  },
] as const;

export const COMPANY_INFO = {
  name: "BOLXOLVE LTD",
  shortName: "BOLXOLVE",
  descriptor: "Custom Software, Websites & Intelligent Automation",
  registered: "BOLXOLVE LTD. All rights reserved.",
  social: SOCIAL_LINKS,
  services: [
    { number: "01", categoryLabel: "WEB & PLATFORMS", title: "Web & Digital Experiences", slug: "web-digital" },
    { number: "02", categoryLabel: "CUSTOM SOFTWARE", title: "Custom Software", slug: "custom-software" },
    { number: "03", categoryLabel: "ONLINE STORES", title: "E-commerce Solutions", slug: "ecommerce" },
    { number: "04", categoryLabel: "WORKFLOW AUTOMATION", title: "Business Automation & Integrations", slug: "automation" },
    { number: "05", categoryLabel: "PRACTICAL AI", title: "AI & Intelligent Solutions", slug: "ai-solutions" },
    { number: "06", categoryLabel: "PLANNED SOLUTION", title: "Education Technology Solutions", slug: "education-solutions" },
  ],
} as const;

