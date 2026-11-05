export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  deliverables: string[];
  slugs: string[];
  solutionRoute?: string;
  solutionLabel?: string;
  featuredInterfaceId: "invoice" | "zentra" | "ecommerce" | "automation" | "bolmeet" | "education";
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "web-digital",
    number: "01",
    title: "Web & Digital Experiences",
    categoryLabel: "DIGITAL EXPERIENCES",
    shortDescription: "Business websites, landing pages, web portals and interactive digital platforms.",
    description:
      "We design and engineer bespoke web platforms that establish immediate brand credibility, engage visitors, and turn casual traffic into qualified commercial relationships. Every platform is built for speed, responsiveness, and clear conversion paths.",
    deliverables: [
      "Business websites & brand flagships",
      "Campaign & high-converting landing pages",
      "Client, member & customer web portals",
      "Interactive digital experiences & tools",
    ],
    slugs: ["business-websites", "web-digital-experiences", "web-digital"],
    solutionRoute: "/solutions/zentra",
    solutionLabel: "View ZENTRA Experience Case Study",
    featuredInterfaceId: "zentra",
  },
  {
    id: "custom-software",
    number: "02",
    title: "Custom Software & Business Systems",
    categoryLabel: "BUSINESS SYSTEMS",
    shortDescription: "Bespoke operational software, management platforms, internal tools and business applications.",
    description:
      "Purpose-built operational software that replaces disjointed spreadsheets and cumbersome manual processes. Engineered around your organization's exact workflows, ensuring data integrity, role-based security, and frictionless team coordination.",
    deliverables: [
      "Bespoke operational software",
      "Business management platforms",
      "Internal tools & employee portals",
      "Custom business web applications",
    ],
    slugs: ["custom-web-apps", "business-management", "custom-software", "business-systems"],
    solutionRoute: "/solutions/invoice-management",
    solutionLabel: "Explore Invoice Management System",
    featuredInterfaceId: "invoice",
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce Solutions",
    categoryLabel: "COMMERCE INFRASTRUCTURE",
    shortDescription: "Online storefronts, payment integrations, inventory workflows and commerce infrastructure.",
    description:
      "High-conversion commerce experiences engineered for reliability under peak transactional load. From atomic inventory control to automated payment routing and customer account portals, we build commerce engines that scale.",
    deliverables: [
      "Bespoke online storefronts",
      "Multi-gateway payment integrations",
      "Real-time inventory workflows",
      "Scalable commerce infrastructure",
    ],
    slugs: ["ecommerce-platforms", "ecommerce-solutions", "ecommerce"],
    solutionRoute: "/solutions/zentra",
    solutionLabel: "View High-Volume Commerce Engine",
    featuredInterfaceId: "ecommerce",
  },
  {
    id: "automation",
    number: "04",
    title: "Business Automation & Integrations",
    categoryLabel: "WORKFLOW AUTOMATION",
    shortDescription: "Workflow automation, system integrations, process optimisation and operational efficiency.",
    description:
      "Eliminate repetitive administrative overhead and human data-entry bottlenecks. We link your commercial tools, automate transaction processing, and build intelligent background pipelines that run quietly 24/7.",
    deliverables: [
      "Workflow automation engines",
      "System & third-party API integrations",
      "Process optimisation pipelines",
      "Operational efficiency infrastructure",
    ],
    slugs: ["workflow-automation", "business-automation", "automation"],
    solutionRoute: "/solutions/invoice-management",
    solutionLabel: "View Document Dispatch Pipeline",
    featuredInterfaceId: "automation",
  },
  {
    id: "ai-emerging",
    number: "05",
    title: "AI & Intelligent Solutions",
    categoryLabel: "INTELLIGENT SYSTEMS",
    shortDescription: "AI-powered applications, intelligent assistants, document processing and business intelligence integrations.",
    description:
      "Practical, high-utility artificial intelligence integrated directly into your everyday operations. We implement production-ready models for document processing, meeting synthesis, and decision support with enterprise privacy.",
    deliverables: [
      "AI-powered applications",
      "Intelligent virtual assistants",
      "Automated document processing",
      "Business intelligence integrations",
    ],
    slugs: ["ai-integrations", "ai-solutions", "ai-emerging"],
    solutionRoute: "/solutions/bolmeet-ai",
    solutionLabel: "View BOLMEET AI Case Study",
    featuredInterfaceId: "bolmeet",
  },
  {
    id: "education-solutions",
    number: "06",
    title: "Education Technology Solutions",
    categoryLabel: "ACADEMIC OPERATIONS",
    shortDescription: "Digital platforms for primary and secondary schools, school administration, academic operations and education management.",
    description:
      "Purpose-built administrative and academic software engineered specifically for K-12 primary and secondary educational institutions. Replaces fragmented paper books with a unified, secure digital operating environment.",
    deliverables: [
      "Primary & secondary school platforms",
      "School administrative systems",
      "Academic operations & registers",
      "Unified education management",
    ],
    slugs: ["education-solutions", "education-tech", "education"],
    solutionRoute: "/solutions/education",
    solutionLabel: "Explore Education Solutions Roadmap",
    featuredInterfaceId: "education",
  },
];

// Backwards compatibility aliases
export type Capability = ServiceCategory;
export const CAPABILITIES = SERVICE_CATEGORIES;
