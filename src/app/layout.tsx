import type { Metadata, Viewport } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_CONFIG, SITE_URL } from "@/lib/seo";
import { SOCIAL_LINKS } from "@/lib/tokens";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_CONFIG.defaultTitle,
    template: "%s | BOLXOLVE LTD",
  },
  description: SITE_CONFIG.defaultDescription,
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
  authors: [{ name: SITE_CONFIG.name, url: SITE_URL }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/brand/logo_icon_hi_res.png",
    apple: "/brand/logo_icon_hi_res.png",
  },
  openGraph: {
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: SITE_CONFIG.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.defaultTitle,
    description: SITE_CONFIG.defaultDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: SITE_CONFIG.themeColor,
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_CONFIG.name,
      legalName: SITE_CONFIG.name,
      alternateName: SITE_CONFIG.shortName,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand/logo_icon_hi_res.png`,
      },
      description: SITE_CONFIG.defaultDescription,
      email: SITE_CONFIG.email,
      telephone: SITE_CONFIG.phone,
      sameAs: SOCIAL_LINKS.map((social) => social.href),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE_CONFIG.email,
        telephone: SITE_CONFIG.phone,
        url: `${SITE_URL}/#contact`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_CONFIG.name,
      url: SITE_URL,
      description: SITE_CONFIG.defaultDescription,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#050915] text-white antialiased font-sans flex flex-col selection:bg-[#BAF247] selection:text-[#050915]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

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
