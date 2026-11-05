import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "BOLXOLVE LTD — Hybrid Digital Solutions & Technology",
    template: "%s | BOLXOLVE LTD",
  },
  description:
    "BOLXOLVE LTD is a technology-driven digital solutions company delivering business websites, e-commerce platforms, custom web applications, business management systems, workflow automation, and AI integrations.",
  keywords: [
    "BOLXOLVE",
    "BOLXOLVE LTD",
    "Digital Solutions",
    "Technology Company",
    "Custom Web Applications",
    "Workflow Automation",
    "AI Integrations",
    "Enterprise Software",
    "E-Commerce Systems",
    "ZENTRA",
    "BOLMEET AI",
    "Invoice Management",
  ],
  authors: [{ name: "BOLXOLVE LTD" }],
  creator: "BOLXOLVE LTD",
  icons: {
    icon: "/brand/logo_icon_hi_res.png",
    apple: "/brand/logo_icon_hi_res.png",
  },
  openGraph: {
    title: "BOLXOLVE LTD — Hybrid Digital Solutions & Technology",
    description:
      "Engineering next-generation web applications, intelligent automation, and scalable digital infrastructure.",
    siteName: "BOLXOLVE LTD",
    type: "website",
    locale: "en_GB",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050915",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#050915] text-white antialiased font-sans flex flex-col selection:bg-[#BAF247] selection:text-[#050915]">
        {/* Global Navigation across all routes */}
        <Navbar />

        {/* Dynamic Route Content */}
        <div className="grow flex flex-col">
          {children}
        </div>

        {/* Global Footer across all routes */}
        <Footer />
      </body>
    </html>
  );
}
