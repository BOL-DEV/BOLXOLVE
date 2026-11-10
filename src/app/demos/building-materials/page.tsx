import { Metadata } from "next";
import { DemoProvider } from "@/demos/building-materials/DemoContext";
import BuildingMaterialsApp from "@/demos/building-materials/BuildingMaterialsApp";
import { SITE_URL } from "@/lib/seo";

const title = "Building Materials Distribution System — Interactive Concept Demo";
const description =
  "Interactive demonstration of custom business management software for multi-product building materials distribution, inventory control, and transaction workflows. Built by BOLXOLVE LTD.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/demos/building-materials",
  },
  openGraph: {
    title: `${title} | BOLXOLVE LTD`,
    description,
    url: `${SITE_URL}/demos/building-materials`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | BOLXOLVE LTD`,
    description,
  },
};

export default function BuildingMaterialsDemoPage() {
  return (
    <DemoProvider>
      <BuildingMaterialsApp />
    </DemoProvider>
  );
}

