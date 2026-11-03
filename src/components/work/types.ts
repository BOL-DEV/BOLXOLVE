export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  capabilities: string[];
  isFeatured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "zentra",
    number: "01",
    title: "ZENTRA",
    category: "SaaS / Event Technology",
    tag: "WHITE-LABEL SAAS PLATFORM",
    description:
      "A white-label event ticketing and management platform that empowers organisers to manage events, sell tickets and verify attendees through a unified digital experience.",
    capabilities: [
      "White-label organizer portals",
      "Ticket inventory & checkout",
      "Attendee QR verification",
      "Unified event operations",
    ],
    isFeatured: true,
  },
  {
    id: "bolmeet-ai",
    number: "02",
    title: "BOLMEET AI",
    category: "Artificial Intelligence / Collaboration",
    tag: "COGNITIVE WORKSPACE",
    description:
      "An AI-powered meeting workspace combining real-time communication, transcription, intelligent summaries and actionable task generation.",
    capabilities: [
      "Real-time audio communication",
      "Neural speech transcription",
      "Intelligent summaries",
      "Actionable task generation",
    ],
  },
  {
    id: "argyrworldwide",
    number: "03",
    title: "ARGYRWORLDWIDE",
    category: "E-commerce / Digital Commerce",
    tag: "GLOBAL BRAND COMMERCE",
    description:
      "An e-commerce experience designed to bring a footwear brand online, with product discovery, shopping functionality and international payment capabilities.",
    capabilities: [
      "Footwear product discovery",
      "Shopping & bag functionality",
      "International payment gateway",
      "Brand aesthetic & storytelling",
    ],
  },
  {
    id: "receipt-management",
    number: "04",
    title: "Business Receipt Management System",
    category: "Business Software / Automation",
    tag: "INTERNAL ENTERPRISE TOOL",
    description:
      "A custom business solution that digitises receipt creation, transaction records and document generation.",
    capabilities: [
      "Digital receipt generation",
      "Transaction record tracking",
      "Automated document creation",
      "Audit trail & export systems",
    ],
  },
];

