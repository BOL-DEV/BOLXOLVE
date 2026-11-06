export interface Project {
  id: string;
  slug: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  status: "Available" | "In Development" | "Upcoming";
  commercialModel: string;
  description: string;
  capabilities: string[];
  route: string;
  ctaText: string;
  externalUrl?: string;
  isFeatured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "invoice-management",
    slug: "invoice-management",
    number: "01",
    title: "Invoice Management System",
    category: "Business Management / Document Automation",
    tag: "PROPRIETARY BUSINESS SOFTWARE",
    status: "Available",
    commercialModel: "Subscription-based",
    description:
      "A practical business tool that helps businesses create invoices and receipts, manage transactions and keep their business records organised.",
    capabilities: [
      "Invoice and receipt generation",
      "Transaction records",
      "Business document management",
      "PDF or image exports",
      "Spreadsheet exports",
      "Staff access and approval workflows",
    ],
    route: "/solutions/invoice-management",
    ctaText: "Explore Invoice Management",
    externalUrl: "https://invoice.bolxolve.com",
    isFeatured: true,
  },
  {
    id: "zentra",
    slug: "zentra",
    number: "02",
    title: "ZENTRA",
    category: "Event Technology / Ticketing",
    tag: "WHITE-LABEL SAAS PLATFORM",
    status: "Available",
    commercialModel: "Per-event / platform pricing",
    description:
      "A white-label event ticketing platform that helps event organisers create events, sell tickets, manage attendees and verify entry.",
    capabilities: [
      "Event creation",
      "Organiser-branded event pages",
      "Ticket types",
      "Online payments",
      "Ticket delivery",
      "QR ticket verification",
      "Staff verification workflows",
    ],
    route: "/solutions/zentra",
    ctaText: "Explore ZENTRA",
    externalUrl: "https://zentra.bolxolve.com",
    isFeatured: false,
  },
  {
    id: "education-solutions",
    slug: "education",
    number: "03",
    title: "Education Management Solutions",
    category: "Education Technology",
    tag: "PLANNED EDTECH SOLUTION",
    status: "Upcoming",
    commercialModel: "Commercial model to be determined",
    description:
      "We are developing digital tools to help primary and secondary schools manage student records, academic activities, fees and everyday administration.",
    capabilities: [
      "Student records",
      "Attendance",
      "Fee management",
      "Results and academic records",
      "Teacher and staff management",
      "Parent communication",
      "School administration",
    ],
    route: "/solutions/education",
    ctaText: "Discuss Education Solutions",
    isFeatured: false,
  },
];
