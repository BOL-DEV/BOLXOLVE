export interface EngineeringPrinciple {
  number: string;
  id: string;
  title: string;
  description: string;
  practicalExample: string;
  referenceRoute?: string;
  referenceLabel?: string;
}

export const ENGINEERING_PRINCIPLES: EngineeringPrinciple[] = [
  {
    number: "01",
    id: "built-with-purpose",
    title: "Built with Purpose",
    description:
      "Every project starts with understanding the problem. We choose technologies and approaches based on what the solution needs to achieve, not simply because a particular tool is popular.",
    practicalExample:
      "Our Invoice Management System is built around everyday business activities such as generating receipts, recording transactions and managing business documents.",
    referenceRoute: "/solutions/invoice-management",
    referenceLabel: "Explore Invoice Management",
  },
  {
    number: "02",
    id: "connected-systems",
    title: "Connected Systems",
    description:
      "Modern businesses depend on different tools and services. We build solutions that can connect with relevant platforms and services to make everyday operations work together.",
    practicalExample:
      "ZENTRA brings event presentation, ticket purchases, digital ticket delivery and QR verification together in one event ticketing workflow.",
    referenceRoute: "/solutions/zentra",
    referenceLabel: "Explore ZENTRA",
  },
  {
    number: "03",
    id: "designed-to-grow",
    title: "Designed to Grow",
    description:
      "We consider more than the immediate requirements of a project. Our approach focuses on building software that can be maintained, improved and adapted as business needs change.",
    practicalExample:
      "Good software should have room for new features and changing requirements without needing to be rebuilt every time the business evolves.",
  },
];
