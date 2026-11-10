import React from "react";
import type { Metadata } from "next";
import LegalPageLayout, { type LegalSection } from "@/components/legal/LegalPageLayout";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const title = "Terms of Service";
const description =
  "Terms governing access to bolxolve.com, interactive concept demonstrations, proprietary software platforms, and service engagements with BOLXOLVE LTD.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: `${title} | BOLXOLVE LTD`,
    description,
    url: `${SITE_URL}/terms`,
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary",
    title: `${title} | BOLXOLVE LTD`,
    description,
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const TERMS_SECTIONS: LegalSection[] = [
  {
    number: "01",
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using bolxolve.com, its interactive concept demonstrations, or submitting an enquiry to BOLXOLVE LTD (RC:9940684), you agree to comply with these Terms of Service.",
    ],
  },
  {
    number: "02",
    title: "Proprietary Platforms & Intellectual Property",
    paragraphs: [
      "All software architectures, source code, user interfaces, brand marks, visual assets, and product concepts displayed on this website—including ZENTRA, Invoice Management System, and BOLMEET AI—are the intellectual property of BOLXOLVE LTD unless explicitly stated otherwise.",
      "You may view and evaluate content on this site for prospective business engagement, but you may not copy, redistribute, or commercially exploit any portion without written consent.",
    ],
  },
  {
    number: "03",
    title: "Interactive Demos & Product Roadmaps",
    paragraphs: [
      "Interactive demonstrations (such as workflow and operations blueprints) and planned product roadmaps (including Education Technology Solutions) use sample data for illustration. Specifications, timelines, and commercial terms for dedicated deployments are confirmed in separate project agreements.",
    ],
  },
  {
    number: "04",
    title: "Client Engagements & Separate Agreements",
    paragraphs: [
      "Submitting a project enquiry through our website initiates a conversation and does not by itself create a binding service contract. Custom development, licensing, and SaaS deployments are governed by written proposals or Master Service Agreements signed by both parties.",
    ],
  },
  {
    number: "05",
    title: "Acceptable Use & Limitation of Liability",
    paragraphs: [
      "You agree not to attempt automated scraping, denial-of-service, spam submission against our enquiry endpoint, or unauthorized probing of this platform. To the fullest extent permitted by applicable law, bolxolve.com is provided on an 'as is' informational basis.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      eyebrow="LEGAL & GOVERNANCE"
      title="Terms of Service"
      summary="Clear guidelines covering website access, intellectual property, product demonstrations, and client engagements with BOLXOLVE LTD."
      lastUpdated="November 2026"
      sections={TERMS_SECTIONS}
      crossLink={{ label: "Read Privacy Policy", href: "/privacy" }}
    />
  );
}

