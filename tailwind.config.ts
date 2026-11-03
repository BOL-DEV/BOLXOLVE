import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        brand: {
          bg: "#050915",
          accent: "#BAF247",
          "accent-hover": "#A8E035",
          "accent-muted": "rgba(186, 242, 71, 0.12)",
          surface: "#101522",
          "surface-elevated": "#151B2B",
          "surface-border": "#1E2638",
          text: "#FFFFFF",
          "text-secondary": "#A1A1AA",
          "text-tertiary": "#71717A",
          "light-bg": "#F8FAFC",
          "light-surface": "#FFFFFF",
          "light-border": "#E2E8F0",
          "light-text": "#050915",
          "light-secondary": "#64748B",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.035em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
        wider: "0.06em",
        widest: "0.12em",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        "brand-glow": "0 0 24px -4px rgba(186, 242, 71, 0.15)",
        "surface-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.35)",
        "surface-md": "0 4px 12px 0 rgba(0, 0, 0, 0.45)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

