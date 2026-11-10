import React from "react";
import type { Metadata } from "next";
import LegalPageLayout, { type LegalSection } from "@/components/legal/LegalPageLayout";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Learn how BOLXOLVE LTD collects, uses, and protects personal and project enquiry information submitted through bolxolve.com.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: `${title} | BOLXOLVE LTD`,
    description,
    url: `${SITE_URL}/privacy`,
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

const PRIVACY_SECTIONS: LegalSection[] = [
  {
    number: "01",
    title: "Information We Collect",
    paragraphs: [
      "We collect only the information you voluntarily provide when you reach out to BOLXOLVE LTD through our project enquiry form or direct email.",
    ],
    bullets: [
      "Full name and business or organisation name (if provided).",
      "Email address so our team can respond to your enquiry.",
      "Selected service category and project description details.",
    ],
  },
  {
    number: "02",
    title: "How We Use Your Information",
    paragraphs: [
      "Information submitted through bolxolve.com is used solely to review your project requirements, prepare technical or commercial responses, and communicate with you regarding software services or proprietary BOLXOLVE platforms.",
      "We do not sell, rent, or trade your personal or company details to third parties for marketing or advertising.",
    ],
  },
  {
    number: "03",
    title: "Email Processing & Security",
    paragraphs: [
      "Project enquiry emails are transmitted securely over HTTPS and delivered to our team through Brevo (transactional email infrastructure) strictly for enquiry fulfillment.",
      "We implement transport encryption, spam rate-limiting, and access controls to safeguard any information shared with us.",
    ],
  },
  {
    number: "04",
    title: "Cookies & Analytics",
    paragraphs: [
      "bolxolve.com operates without invasive third-party advertising trackers. Standard server connection logs (such as IP-based rate limiting to prevent abuse on our contact endpoint) are handled solely for operational security and reliability.",
    ],
  },
  {
    number: "05",
    title: "Data Retention & Your Rights",
    paragraphs: [
      "We retain enquiry correspondence only as long as necessary to follow up on your request or maintain an active business relationship.",
      "You may request access to, correction of, or deletion of your enquiry details at any time by emailing contact@bolxolve.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="LEGAL & DATA GOVERNANCE"
      title="Privacy Policy"
      summary="How BOLXOLVE LTD handles, stores, and protects the enquiry details and business information you share with us."
      lastUpdated="November 2026"
      sections={PRIVACY_SECTIONS}
      crossLink={{ label: "Read Terms of Service", href: "/terms" }}
    />
  );
}

