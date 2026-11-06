import { Metadata } from "next";
import { AutomationProvider } from "@/demos/business-automation/AutomationContext";
import AutomationApp from "@/demos/business-automation/AutomationApp";

export const metadata: Metadata = {
  title: "Automated E-commerce Order Processing — Interactive Workflow Demo",
  description:
    "Interactive demonstration showing how BOLXOLVE automates multi-system business activities: order ingestion, customer notifications, internal staff alerts, stock synchronization, and fulfillment dispatch.",
};

export default function BusinessAutomationDemoPage() {
  return (
    <AutomationProvider>
      <AutomationApp />
    </AutomationProvider>
  );
}

