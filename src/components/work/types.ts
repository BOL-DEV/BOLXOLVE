export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  capabilities: string[];
  route: string;
  status: "Available" | "In Development" | "Upcoming";
  isFeatured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "zentra",
    slug: "zentra",
    number: "01",
    title: "ZENTRA",
    category: "SaaS / Event Technology",
    tag: "WHITE-LABEL SAAS PLATFORM",
    status: "Available",
    description:
      "A white-label event ticketing and management platform that empowers organisers to manage events, sell tickets and verify attendees through a unified digital experience.",
    capabilities: [
      "White-label organizer portals",
      "Ticket inventory & checkout",
      "Attendee QR verification",
      "Unified event operations",
    ],
    route: "/solutions/zentra",
    isFeatured: true,
  },
  {
    id: "invoice-management",
    slug: "invoice-management",
    number: "02",
    title: "Invoice Management System",
    category: "Business Software / Automation",
    tag: "WORKFLOW DIGITISATION",
    status: "Available",
    description:
      "A custom business solution that digitises receipt creation, transaction records, invoice dispatch, and automated financial document generation.",
    capabilities: [
      "Digital receipt & invoice generation",
      "Multi-rate tax calculation engine",
      "Automated document creation & export",
      "Audit trail & chronological ledgers",
    ],
    route: "/solutions/invoice-management",
  },
  {
    id: "bolmeet-ai",
    slug: "bolmeet-ai",
    number: "03",
    title: "BOLMEET AI",
    category: "Artificial Intelligence / Collaboration",
    tag: "COGNITIVE WORKSPACE",
    status: "In Development",
    description:
      "An AI-powered meeting workspace combining real-time communication, transcription, intelligent summaries and actionable task generation.",
    capabilities: [
      "Real-time audio communication",
      "Neural speech transcription",
      "Intelligent executive summaries",
      "Actionable task generation & sync",
    ],
    route: "/solutions/bolmeet-ai",
  },
];
