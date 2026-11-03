export interface Capability {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  services: string[];
  slugs: string[];
  tag: string;
}

export const CAPABILITIES: Capability[] = [
  {
    id: "web-digital",
    number: "01",
    title: "Web & Digital Experiences",
    shortDescription: "High-impact digital platforms engineered for brand authority and audience engagement.",
    description:
      "Thoughtfully designed digital experiences that establish your online presence, communicate your brand and connect you with your audience.",
    services: [
      "Business websites",
      "Landing pages",
      "Web portals",
      "Interactive digital experiences",
    ],
    slugs: ["business-websites", "web-digital-experiences"],
    tag: "EXPERIENCE ENGINE",
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-commerce Solutions",
    shortDescription: "Frictionless commerce infrastructure built for transactions, operations, and scale.",
    description:
      "Digital commerce platforms designed to simplify selling, manage operations and create seamless shopping experiences.",
    services: [
      "Online stores",
      "Payment integrations",
      "Order management",
      "E-commerce platforms",
    ],
    slugs: ["ecommerce-platforms"],
    tag: "TRANSACTION RUNTIME",
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software & Systems",
    shortDescription: "Bespoke software architecture transforming complex logic into scalable operational tools.",
    description:
      "Purpose-built software that transforms complex business processes into organised, efficient and scalable systems.",
    services: [
      "Business management systems",
      "Custom web applications",
      "SaaS platforms",
      "Internal business tools",
    ],
    slugs: ["custom-web-apps", "business-management"],
    tag: "CORE ARCHITECTURE",
  },
  {
    id: "automation",
    number: "04",
    title: "Automation & Integration",
    shortDescription: "Unified systems connecting tools and eliminating manual operational bottlenecks.",
    description:
      "Connect your tools, eliminate repetitive processes and create more efficient workflows through intelligent automation.",
    services: [
      "Workflow automation",
      "API development",
      "Third-party integrations",
      "Process optimisation",
    ],
    slugs: ["workflow-automation"],
    tag: "PIPELINE ORCHESTRATION",
  },
  {
    id: "ai-emerging",
    number: "05",
    title: "AI & Emerging Technologies",
    shortDescription: "Intelligent automation and adaptive models delivering real-world operational leverage.",
    description:
      "Explore practical applications of intelligent technology to improve business operations and create new possibilities.",
    services: [
      "AI-powered applications",
      "AI integrations",
      "Intelligent workflows",
      "Emerging technology solutions",
    ],
    slugs: ["ai-integrations"],
    tag: "COGNITIVE SYSTEMS",
  },
];
