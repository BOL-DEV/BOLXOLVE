export interface KeyCapability {
  title: string;
  description: string;
}

export interface ArchitectureHighlight {
  label: string;
  detail: string;
}

export interface TechStackGroup {
  category: string;
  technologies: string[];
}

export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface ProjectCaseStudy {
  slug: string;
  number: string;
  title: string;
  category: string;
  tag: string;
  status: string;
  statusBadgeVariant: "success" | "neutral" | "accent";
  year: string;
  discipline: string;
  clientType: string;
  overview: string;
  problemStatement: {
    summary: string;
    points: string[];
  };
  solutionApproach: {
    summary: string;
    points: string[];
  };
  keyCapabilities: KeyCapability[];
  technicalArchitecture: {
    summary: string;
    highlights: ArchitectureHighlight[];
  };
  techStack: TechStackGroup[];
  metrics: ProjectMetric[];
  previewComponentId: "zentra" | "invoice-management" | "bolmeet-ai";
}

export const CASE_STUDIES: Record<string, ProjectCaseStudy> = {
  zentra: {
    slug: "zentra",
    number: "01",
    title: "ZENTRA",
    category: "SaaS / Event Technology",
    tag: "WHITE-LABEL SAAS PLATFORM",
    status: "Live in Production / Active Deployments",
    statusBadgeVariant: "success",
    year: "2024",
    discipline: "Full-Stack Web Architecture & Platform Engineering",
    clientType: "Commercial Event Organizers & Entertainment Promoters",
    overview:
      "ZENTRA is a white-label event ticketing and operations platform that empowers organizers to publish branded event storefronts, manage ticket inventory, process multi-currency payments, and verify attendee admissions through cryptographically signed QR scanning.",
    problemStatement: {
      summary:
        "Commercial event organizers face steep friction when relying on conventional ticketing aggregators. Heavy platform fees (often exceeding 10–15% per ticket), locked-down customer data, and fragile admission verification during peak entry times create severe operational and financial vulnerabilities.",
      points: [
        "Extortionate commission fees draining organizer margins on high-volume ticket sales.",
        "Zero customer data retention, preventing organizers from building lasting direct-to-consumer brand relationships.",
        "Unreliable check-in scanners that stall or fail when cellular networks congest at event entrances.",
        "Overselling risks during high-demand on-sale drops due to distributed database race conditions.",
      ],
    },
    solutionApproach: {
      summary:
        "BOLXOLVE engineered a multi-tenant, white-label ticketing infrastructure allowing organizers to deploy custom domains and retain 100% of attendee relationships. We designed atomic reservation locks to eliminate overselling and implemented offline-capable cryptographic QR verification for sub-second door admission.",
      points: [
        "Architected multi-tenant isolation ensuring individual organizers control custom styling, email templates, and pricing tiers.",
        "Deployed atomic Redis reservation counters to lock inventory for 10 minutes during active checkout, eliminating double-selling.",
        "Built cryptographic offline-first QR ticket validation capable of verifying authenticity even during complete cellular outage.",
        "Integrated direct Stripe Connect payouts so revenues settle directly to organizer accounts with zero intermediary hold periods.",
      ],
    },
    keyCapabilities: [
      {
        title: "White-Label Storefront Portals",
        description:
          "Organizers configure custom domain event portals with bespoke brand typography, logos, and custom checkout flows.",
      },
      {
        title: "Atomic Tiered Inventory Control",
        description:
          "Support for early bird, VIP, table packages, and general admission with millisecond-accurate seat and tier allocations.",
      },
      {
        title: "Offline-Resilient QR Admission",
        description:
          "High-speed door scanner progressive web application that verifies cryptographically signed ticket payloads with or without internet.",
      },
      {
        title: "Automated Document Dispatch",
        description:
          "Asynchronous headless PDF ticket generation with high-resolution 2D barcodes and automated email delivery upon settlement.",
      },
      {
        title: "Real-Time Operational Analytics",
        description:
          "Live dashboard metrics showing sales velocity, revenue breakdown, admission check-in percentages, and gate throughput.",
      },
      {
        title: "Direct Gateway Payouts",
        description:
          "Zero-delay financial routing with Stripe Connect, Apple Pay, Google Pay, and international payment support.",
      },
    ],
    technicalArchitecture: {
      summary:
        "A distributed, high-concurrency architecture engineered for extreme traffic spikes during public ticket release moments.",
      highlights: [
        {
          label: "Frontend & Edge Delivery",
          detail: "Next.js App Router deployed at the edge with dynamic server-side rendering and client-side progressive caching.",
        },
        {
          label: "Concurrency & Inventory Locking",
          detail: "Redis cluster utilizing Lua scripts to ensure ACID-compliant inventory decrements under simultaneous user load.",
        },
        {
          label: "Data Layer & Isolation",
          detail: "PostgreSQL database with multi-tenant row-level security (RLS) policies guaranteeing tenant privacy.",
        },
        {
          label: "Async Ticket Pipeline",
          detail: "AWS SQS worker queue powering serverless PDF ticket rendering and instantaneous transactional dispatch.",
        },
      ],
    },
    techStack: [
      {
        category: "Frontend & UI",
        technologies: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      },
      {
        category: "Backend & Systems",
        technologies: ["Node.js", "Redis Cluster (Atomic Locking)", "PostgreSQL", "Prisma ORM", "AWS Lambda"],
      },
      {
        category: "Payments & Verification",
        technologies: ["Stripe Connect", "Apple Pay / Google Pay", "Cryptographic Ed25519 QR Signing", "PWA Scanner"],
      },
    ],
    metrics: [
      {
        label: "Peak Concurrency",
        value: "99.98%",
        subtext: "Uptime maintained across high-demand on-sale drops",
      },
      {
        label: "Door Admission Latency",
        value: "<0.4s",
        subtext: "Sub-second verification per ticket at entrance gates",
      },
      {
        label: "Customer Data Retention",
        value: "100%",
        subtext: "Full attendee ownership directly transferred to organizers",
      },
    ],
    previewComponentId: "zentra",
  },

  "invoice-management": {
    slug: "invoice-management",
    number: "02",
    title: "Invoice Management System",
    category: "Business Software / Automation",
    tag: "WORKFLOW DIGITISATION",
    status: "Active Enterprise Deployment",
    statusBadgeVariant: "success",
    year: "2024",
    discipline: "Custom Enterprise Software & Automated Document Engineering",
    clientType: "Commercial Service Enterprises & Mid-Market Corporations",
    overview:
      "The Invoice Management System is a bespoke enterprise tool that digitises transaction record keeping, commercial billing, tax calculation, and automated invoice and receipt voucher generation.",
    problemStatement: {
      summary:
        "Growing mid-market businesses frequently depend on disconnected tools: physical paper receipts, manual Excel ledgers, and fragmented billing portals. This leads to invoice reconciliation bottlenecks, lost receipts, VAT calculation errors, and painful month-end audit preparation.",
      points: [
        "Laborious manual entry causing billing delays and invoice discrepancies across departments.",
        "Lack of chronological immutability, exposing corporate accounting to regulatory and audit risks.",
        "Uncollected receivables and unpaid invoice aging due to missing automated notification workflows.",
        "High staff overhead spent formatting and dispatching PDF vouchers and transaction summaries.",
      ],
    },
    solutionApproach: {
      summary:
        "BOLXOLVE engineered a centralized web platform that automates invoice creation, tax compliance calculations, customer billing histories, and instantaneous PDF generation with chronological audit tracking.",
      points: [
        "Created an intuitive billing interface allowing staff to generate itemized commercial invoices and receipts in under 30 seconds.",
        "Engineered an automated tax computation engine accommodating variable VAT rates, client exemptions, and withholding calculations.",
        "Built a headless document rendering pipeline producing secure, printable, branded PDF vouchers with verifiable audit stamps.",
        "Established role-based access controls (RBAC) ensuring cashiers, accountants, and executives have calibrated system permissions.",
      ],
    },
    keyCapabilities: [
      {
        title: "Dynamic Receipt & Invoice Generation",
        description:
          "Fast itemized invoice generation with automated line-item calculations, discount rates, and corporate customer profiles.",
      },
      {
        title: "Automated Multi-Rate Tax Engine",
        description:
          "Systematic VAT, sales tax, and withholding tax calculations eliminating human accounting errors during checkout.",
      },
      {
        title: "Chronological Audit Trail",
        description:
          "Every generated voucher and edited ledger record receives an immutable timestamp and cryptographic author signature.",
      },
      {
        title: "Automated Document Dispatch",
        description:
          "Instant delivery of audit-ready PDF invoices to client email addresses with customizable corporate payment reminders.",
      },
      {
        title: "One-Click Accounting Exports",
        description:
          "Instant generation of CSV, Excel, and structured PDF ledger packages ready for external auditors and corporate accountants.",
      },
      {
        title: "Role-Based Staff Access (RBAC)",
        description:
          "Dedicated permission tiers distinguishing front-desk operators, accounting managers, and executive directors.",
      },
    ],
    technicalArchitecture: {
      summary:
        "An enterprise-grade, data-integrity-first architecture focused on transactional precision, document security, and automated worker pipelines.",
      highlights: [
        {
          label: "Frontend Client Architecture",
          detail: "Responsive React and Next.js interface with optimistic state updates and live calculation engines.",
        },
        {
          label: "Document Pipeline",
          detail: "Headless Chromium rendering microservice outputting standardized vector-crisp PDF documents.",
        },
        {
          label: "Relational Ledger Database",
          detail: "PostgreSQL with strict foreign key constraints, temporal change tables, and point-in-time recovery.",
        },
        {
          label: "Authentication & Security",
          detail: "JWT session handling with secure HTTP-only cookies, granular scope-based permissions, and audit event logs.",
        },
      ],
    },
    techStack: [
      {
        category: "Client Application",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Zod Validation"],
      },
      {
        category: "Backend & Document Engine",
        technologies: ["Node.js API", "PostgreSQL", "Prisma ORM", "Puppeteer PDF Engine", "AWS S3 Document Storage"],
      },
      {
        category: "Security & Operations",
        technologies: ["Role-Based Access Control (RBAC)", "Audit Logging", "Docker", "Nginx"],
      },
    ],
    metrics: [
      {
        label: "Administrative Time Saved",
        value: "78%",
        subtext: "Reduction in manual billing and invoice preparation hours",
      },
      {
        label: "Tax Discrepancy Rate",
        value: "0.0%",
        subtext: "Zero automated calculation errors across deployed ledgers",
      },
      {
        label: "Voucher Generation Speed",
        value: "<1.2s",
        subtext: "Instantaneous compilation of branded PDF documentation",
      },
    ],
    previewComponentId: "invoice-management",
  },

  "bolmeet-ai": {
    slug: "bolmeet-ai",
    number: "03",
    title: "BOLMEET AI",
    category: "Artificial Intelligence / Collaboration",
    tag: "COGNITIVE WORKSPACE",
    status: "Active Beta / Cognitive Workspace Platform",
    statusBadgeVariant: "neutral",
    year: "2024",
    discipline: "Real-Time WebRTC Media Streaming & Generative AI Pipelines",
    clientType: "Distributed Engineering Teams & High-Velocity Technology Startups",
    overview:
      "BOLMEET AI is an intelligent meeting workspace that fuses real-time audio/video communication with neural transcription, executive synthesis, and automatic task generation.",
    problemStatement: {
      summary:
        "Distributed technology teams spend hours in virtual meetings, but critical architectural decisions, requirements, and assigned responsibilities are routinely lost or miscommunicated in manual note-taking.",
      points: [
        "Valuable meeting discussions vanish immediately after calls end, leaving non-attendees with zero contextual awareness.",
        "Manual note-taking distracts team members from participating actively in strategic engineering discussions.",
        "Action items fall through the cracks because notes are rarely translated into actionable backlog tickets.",
        "Locating historical decisions requires scrubbing through hours of unindexed, unwieldy video recordings.",
      ],
    },
    solutionApproach: {
      summary:
        "BOLXOLVE built an intelligent meeting platform that streams audio directly into neural transcription pipelines, separates speakers via acoustic diarization, extracts key decisions using structured LLM reasoning, and exports tasks to team management platforms.",
      points: [
        "Engineered an ultralow-latency WebRTC conferencing runtime with adaptive bitrate streaming.",
        "Implemented real-time audio chunking sending voice streams to Whisper models for multilingual transcript generation.",
        "Applied LLM reasoning agents with strict JSON schemas to distill 60-minute calls into 2-minute actionable executive summaries.",
        "Built one-click bi-directional integrations syncing extracted tasks directly into Jira, Linear, Slack, and Notion.",
      ],
    },
    keyCapabilities: [
      {
        title: "Real-Time WebRTC Conferencing",
        description:
          "Low-latency audio and video conferencing with automatic noise suppression, echo cancellation, and screen sharing.",
      },
      {
        title: "Multi-Speaker Neural Transcription",
        description:
          "Continuous speaker diarization identifying participants and delivering timestamped, searchable transcripts.",
      },
      {
        title: "Executive Synthesis & Topic Extraction",
        description:
          "Automated distillation of lengthy meeting recordings into concise decision memos, key topics, and consensus points.",
      },
      {
        title: "Action Item & Assignee Detection",
        description:
          "Automatic identification of commitments, deadlines, and assigned individuals formatted directly as actionable tasks.",
      },
      {
        title: "Searchable Semantic Knowledge Base",
        description:
          "Vector-indexed meeting repository allowing team members to ask natural language questions about past discussions.",
      },
      {
        title: "Direct Workflow Backlog Sync",
        description:
          "Native webhooks and API integrations exporting extracted tasks straight to Linear, Jira, Notion, and Slack.",
      },
    ],
    technicalArchitecture: {
      summary:
        "A hybrid media-streaming and asynchronous AI worker architecture designed for high availability and low-latency audio processing.",
      highlights: [
        {
          label: "Media Streaming Runtime",
          detail: "Selective Forwarding Unit (SFU) WebRTC architecture delivering low-latency peer media distribution.",
        },
        {
          label: "Audio Ingestion & Diarization",
          detail: "Asynchronous worker queue partitioning audio streams into optimal segments for neural speech-to-text inference.",
        },
        {
          label: "Cognitive Synthesis Engine",
          detail: "LLM pipeline enforcing deterministic JSON schema responses to ensure predictable task and summary formats.",
        },
        {
          label: "Vector Semantic Storage",
          detail: "Pinecone vector database holding transcript embeddings for contextual conversational retrieval.",
        },
      ],
    },
    techStack: [
      {
        category: "Real-Time Media & Frontend",
        technologies: ["Next.js", "React", "TypeScript", "WebRTC Media Pipeline", "Tailwind CSS"],
      },
      {
        category: "AI & Neural Processing",
        technologies: ["OpenAI Whisper", "GPT-4o Reasoning API", "LangChain", "Pinecone Vector DB"],
      },
      {
        category: "Backend & Message Queue",
        technologies: ["Node.js", "Redis Pub/Sub", "PostgreSQL", "Docker Microservices"],
      },
    ],
    metrics: [
      {
        label: "Documentation Time Reduced",
        value: "94%",
        subtext: "Less manual hours spent drafting post-call meeting memos",
      },
      {
        label: "Action Item Capture Rate",
        value: "100%",
        subtext: "All conversational commitments converted into structured tickets",
      },
      {
        label: "Summary Turnaround Latency",
        value: "<2s",
        subtext: "Executive synthesis generated immediately upon call conclusion",
      },
    ],
    previewComponentId: "bolmeet-ai",
  },
};

export const PROJECTS_LIST = [
  CASE_STUDIES.zentra,
  CASE_STUDIES["invoice-management"],
  CASE_STUDIES["bolmeet-ai"],
];

