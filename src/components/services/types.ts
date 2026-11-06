export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  description: string;
  deliverables: string[];
  example: string;
  note?: string;
  slugs: string[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-digital",
    number: "01",
    title: "Web & Digital Experiences",
    categoryLabel: "WEB & PLATFORMS",
    description:
      "We create websites and online platforms that help businesses present themselves professionally, reach more people and make it easier for customers to find and use their services.",
    deliverables: [
      "Business websites",
      "Landing pages",
      "Company and organisation portals",
      "Booking websites",
      "Interactive web platforms",
    ],
    example:
      "A website for a real estate company where visitors can browse properties, view property details, search available listings and request inspections.",
    slugs: ["web-digital", "business-websites", "web-digital-experiences"],
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software & Business Systems",
    categoryLabel: "CUSTOM SOFTWARE",
    description:
      "Sometimes ordinary apps and spreadsheets are not enough to run a business. We build software around the way your business works, helping you manage daily activities, keep records and reduce unnecessary manual work.",
    deliverables: [
      "Business management systems",
      "Inventory and stock management",
      "Sales and transaction management",
      "Staff and customer management",
      "Custom dashboards and reporting",
      "Internal business applications",
    ],
    example:
      "A building materials distribution company that needs to manage products, stock levels, sales, suppliers, customers and staff from one system.",
    note: "Custom software built specifically for your unique operational needs.",
    slugs: ["custom-software", "custom-web-apps", "business-management", "business-systems"],
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce Solutions",
    categoryLabel: "ONLINE STORES",
    description:
      "We help businesses sell their products online. From displaying products to receiving orders and accepting payments, we build online stores that make buying easier for customers.",
    deliverables: [
      "Online stores",
      "Product catalogues",
      "Shopping carts and checkout",
      "Online payment integration",
      "Order management",
      "Inventory connections",
    ],
    example:
      "An online fashion and footwear store where customers can browse products, select sizes and colours, add items to their cart, pay online and track orders.",
    slugs: ["ecommerce", "ecommerce-platforms", "ecommerce-solutions"],
  },
  {
    id: "automation",
    number: "04",
    title: "Business Automation & Integrations",
    categoryLabel: "WORKFLOW AUTOMATION",
    description:
      "We connect the tools a business already uses and automate repetitive tasks, so employees spend less time doing the same things manually.",
    deliverables: [
      "Automatic email notifications",
      "Customer follow-ups",
      "Connecting business applications",
      "Automated reports",
      "Order and payment notifications",
      "Approval and record-keeping workflows",
    ],
    example:
      "An automated order processing workflow that captures purchases, generates branded customer emails, alerts fulfillment teams, decrements stock across ledgers, and queues dispatches without manual intervention.",
    slugs: ["automation", "workflow-automation", "business-automation"],
  },
  {
    id: "ai-solutions",
    number: "05",
    title: "AI & Intelligent Solutions",
    categoryLabel: "PRACTICAL AI",
    description:
      "We use artificial intelligence to help businesses handle information, answer questions, process documents and complete certain tasks faster.",
    deliverables: [
      "AI-powered assistants",
      "Customer support assistants",
      "Document reading and processing",
      "AI integrations into existing software",
      "Business information analysis",
      "Intelligent search and reporting",
    ],
    example:
      "An AI business assistant that can answer questions about company records, extract information from uploaded invoices and summarise sales using authorised business data.",
    slugs: ["ai-solutions", "ai-integrations", "ai-emerging"],
  },
  {
    id: "education-solutions",
    number: "06",
    title: "Education Technology Solutions",
    categoryLabel: "PLANNED SOLUTION",
    description:
      "We build digital tools that help primary and secondary schools manage their daily activities, keep student records and make school administration easier for teachers, parents and school owners.",
    deliverables: [
      "Student records",
      "Attendance management",
      "School fee management",
      "Academic records and results",
      "Parent communication",
      "Staff and class management",
      "School administration dashboards",
    ],
    example:
      "A school management platform with separate experiences for administrators, teachers and parents.",
    note: "Planned solution direction in active development.",
    slugs: ["education-solutions", "education-tech", "education"],
  },
];

// Backwards compatibility aliases
export type Capability = ServiceCategory;
export const CAPABILITIES = SERVICE_CATEGORIES;
