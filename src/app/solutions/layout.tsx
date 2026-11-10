import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";

const title = "Software Solutions & Digital Platforms";
const description =
  "Explore BOLXOLVE's catalog of production platforms, proprietary business software, and upcoming systems built for operational impact.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/solutions",
  },
  openGraph: {
    title: `${title} | BOLXOLVE LTD`,
    description,
    url: `${SITE_URL}/solutions`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | BOLXOLVE LTD`,
    description,
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

