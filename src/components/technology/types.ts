export interface EngineeringPrinciple {
  number: string;
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
}

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: "01",
    id: "built-with-purpose",
    title: "Built with Purpose",
    tagline: "PROBLEM-FIRST ENGINEERING",
    description:
      "Every project starts with understanding the problem. We choose technologies and approaches based on what the solution needs to achieve, not simply because a particular tool is popular.",
    points: [
      "Understand the business requirements",
      "Choose appropriate technologies",
      "Focus on practical outcomes",
      "Avoid unnecessary complexity",
    ],
  },
  {
    number: "02",
    id: "connected-systems",
    title: "Connected Systems",
    tagline: "INTEROPERABLE ARCHITECTURE",
    description:
      "Modern businesses depend on different tools and services. We build solutions that can connect with relevant platforms, APIs and external services to make everyday operations work together.",
    points: [
      "API integrations",
      "Payment integrations",
      "Third-party services",
      "Automated workflows",
      "Data exchange between systems",
    ],
  },
  {
    number: "03",
    id: "designed-to-grow",
    title: "Designed to Grow",
    tagline: "LONGEVITY & MAINTAINABILITY",
    description:
      "We consider more than the immediate requirements of a project. Our engineering approach focuses on building maintainable, reliable and scalable solutions that can adapt as business needs change.",
    points: [
      "Maintainable software architecture",
      "Performance considerations",
      "Security-conscious development",
      "Future expansion",
      "Reliable system design",
    ],
  },
];

export interface VerifiedTool {
  name: string;
  category: "Frontend & UI" | "Backend & APIs" | "Data & Storage" | "Tooling & Architecture";
  purpose: string;
}

export const VERIFIED_TOOLS: VerifiedTool[] = [
  { name: "TypeScript", category: "Frontend & UI", purpose: "Strict type safety & maintainable codebases" },
  { name: "Next.js & React", category: "Frontend & UI", purpose: "Performant server rendering & accessible interfaces" },
  { name: "Tailwind CSS", category: "Frontend & UI", purpose: "Design system tokenization & responsive layouts" },
  { name: "Node.js", category: "Backend & APIs", purpose: "Event-driven runtime for robust server services" },
  { name: "REST & Webhook APIs", category: "Backend & APIs", purpose: "Interoperable, standardized data exchange" },
  { name: "PostgreSQL", category: "Data & Storage", purpose: "Relational integrity & ACID-compliant storage" },
  { name: "Prisma ORM", category: "Data & Storage", purpose: "Type-safe database schemas & structured migrations" },
  { name: "Zod", category: "Tooling & Architecture", purpose: "Runtime schema validation & data sanitization" },
];
