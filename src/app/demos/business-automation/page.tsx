import { Metadata } from "next";
import { AutomationProvider } from "@/demos/business-automation/AutomationContext";
import AutomationApp from "@/demos/business-automation/AutomationApp";
import { DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/seo";

const title = "Automated E-commerce Order Processing — Interactive Workflow Demo";
const description =
  "Interactive demonstration showing how BOLXOLVE automates multi-system business activities: order ingestion, customer notifications, internal staff alerts, stock synchronization, and fulfillment dispatch.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/demos/business-automation",
  },
  openGraph: {
    title: `${title} | BOLXOLVE LTD`,
    description,
    url: `${SITE_URL}/demos/business-automation`,
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

export default function BusinessAutomationDemoPage() {
  return (
    <AutomationProvider>
      <AutomationApp />
    </AutomationProvider>
  );
}

