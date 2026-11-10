import type { Metadata } from "next";
import BusinessAutomationDemoPage, { metadata as baseMetadata } from "../business-automation/page";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  ...baseMetadata,
  alternates: {
    canonical: "/demos/order-automation",
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: `${SITE_URL}/demos/order-automation`,
  },
};

export default BusinessAutomationDemoPage;

