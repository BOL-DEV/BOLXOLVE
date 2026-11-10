export interface SolutionCapability {
  title: string;
  description: string;
}

export interface SolutionProject {
  slug: string;
  number: string;
  title: string;
  eyebrow: string;
  headline: string;
  introText: string[];
  primaryCta: {
    text: string;
    href: string;
    external?: boolean;
  };
  secondaryCta: {
    text: string;
    href: string;
    external?: boolean;
  };
  liveUrl?: string;
  productWebsite?: string;
  screenshot: {
    src: string;
    alt: string;
    captionTitle: string;
    captionStatus: string;
  };
  problemSection: {
    title: string;
    paragraphs: string[];
  };
  capabilitiesSection: {
    title: string;
    items: SolutionCapability[];
  };
  audienceSection: {
    title: string;
    intro: string;
    suitableFor: string[];
  };
  closingSection: {
    title: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    external?: boolean;
    note?: string;
    productWebsite?: string;
  };
}

export type ProjectCaseStudy = SolutionProject;

export const CASE_STUDIES: Record<string, SolutionProject> = {
  "invoice-management": {
    slug: "invoice-management",
    number: "01",
    title: "Invoice Management System",
    eyebrow: "BUSINESS MANAGEMENT SOLUTION",
    headline: "Take control of your business records.",
    introText: [
      "Create professional invoices and receipts, keep track of transactions, and organise your business records in one place. Spend less time handling paperwork and more time running your business.",
    ],
    primaryCta: {
      text: "Inquire About System",
      href: "/#contact",
    },
    secondaryCta: {
      text: "Talk to Our Team",
      href: "/#contact",
    },
    liveUrl: "https://invoice.bolxolve.com",
    productWebsite: "invoice.bolxolve.com",
    screenshot: {
      src: "/showcase/invoice-bolxolve-screenshot.jpg",
      alt: "BOLXOLVE Invoicing and Multi-Branch Enterprise Billing Dashboard",
      captionTitle: "BOLXOLVE Invoice \u2022 Multi-Branch Depot & Revenue Overview",
      captionStatus: "Production Platform",
    },
    problemSection: {
      title: "The problem we're solving",
      paragraphs: [
        "Managing business transactions manually can become difficult as a business grows.",
        "Paper receipts get misplaced. Transaction records become scattered. Preparing documents takes time, and keeping track of staff activities can become unnecessarily complicated.",
        "Our Invoice Management System helps businesses bring these everyday operations into a more organised digital workflow.",
      ],
    },
    capabilitiesSection: {
      title: "What you can do with it",
      items: [
        {
          title: "Create professional business documents",
          description:
            "Generate invoices and receipts for business transactions without having to prepare every document manually.",
        },
        {
          title: "Keep transaction records organised",
          description:
            "Maintain a structured record of business transactions, making it easier to retrieve and review past records.",
        },
        {
          title: "Manage staff activities",
          description:
            "Give staff access to relevant operations while keeping important actions within an approval workflow.",
        },
        {
          title: "Export and share documents",
          description:
            "Generate business documents in formats suitable for sharing, printing, and record keeping, including PDF and image formats.",
        },
        {
          title: "Keep business information accessible",
          description:
            "Make business records easier to manage and retrieve instead of depending entirely on scattered paper documents.",
        },
      ],
    },
    audienceSection: {
      title: "Designed around real business operations",
      intro:
        "The system is intended for businesses that regularly issue invoices and receipts and need a more organised way to manage their transactions.",
      suitableFor: [
        "Building materials and supply businesses",
        "Retail and wholesale businesses",
        "Small and growing businesses",
        "Businesses with multiple staff handling transactions",
      ],
    },
    closingSection: {
      title: "A better way to manage everyday transactions",
      description:
        "Move away from scattered paperwork and build a more organised process for handling business documents and transaction records.",
      ctaText: "Discuss Your Business Needs",
      ctaHref: "/#contact",
      note: "*Note: Feature availability and implementation may vary depending on the final product configuration.*",
    },
  },

  zentra: {
    slug: "zentra",
    number: "02",
    title: "ZENTRA \u2014 Event Ticketing Platform",
    eyebrow: "EVENT MANAGEMENT & TICKETING",
    headline: "Your event. Your brand. Your ticketing experience.",
    introText: [
      "ZENTRA gives event organisers the tools to create branded event pages, sell tickets online, and manage ticket verification \u2014 all through one platform.",
      "Instead of sending attendees through a generic event marketplace, give your event its own dedicated online presence.",
    ],
    primaryCta: {
      text: "Explore ZENTRA",
      href: "https://zentra.bolxolve.com",
      external: true,
    },
    secondaryCta: {
      text: "Talk to Us",
      href: "/#contact",
    },
    liveUrl: "https://zentra.bolxolve.com",
    productWebsite: "zentra.bolxolve.com",
    screenshot: {
      src: "/showcase/zentra-screenshot.jpg",
      alt: "ZENTRA live event management and ticketing platform screenshot",
      captionTitle: "ZENTRA \u2022 Dynamic Ticketing & Holographic QR Verification",
      captionStatus: "Production Platform",
    },
    problemSection: {
      title: "More than just selling tickets",
      paragraphs: [
        "Running an event involves more than collecting payments. Organisers need a place to present their events, manage ticket categories, receive orders, and verify attendees at the entrance.",
        "ZENTRA brings these parts of the ticketing process together in one organised platform.",
      ],
    },
    capabilitiesSection: {
      title: "What ZENTRA makes possible",
      items: [
        {
          title: "Your own branded event page",
          description:
            "Create a dedicated event page where attendees can discover event information, explore event details, and purchase tickets.",
        },
        {
          title: "Flexible ticket categories",
          description:
            "Set up different ticket types and prices to suit your event, whether you offer regular admission, VIP access, or other ticket categories.",
        },
        {
          title: "Online ticket purchases",
          description:
            "Allow attendees to purchase tickets online through an integrated payment process.",
        },
        {
          title: "Digital ticket delivery",
          description:
            "Give attendees access to their purchased tickets without requiring them to create an account on the platform.",
        },
        {
          title: "QR code ticket verification",
          description:
            "Verify tickets at the event entrance using QR codes, helping organisers manage attendee entry more efficiently.",
        },
        {
          title: "Staff-assisted event check-in",
          description:
            "Give authorised event staff access to ticket verification so entry management does not have to depend on one person.",
        },
        {
          title: "Organiser dashboard",
          description:
            "Manage event information, ticket categories, and ticketing activities from an organiser-focused dashboard.",
        },
      ],
    },
    audienceSection: {
      title: "Built for event organisers",
      intro:
        "ZENTRA is designed for organisers who want more control over how their events are presented and how attendees purchase and access tickets.",
      suitableFor: [
        "Concerts and music events",
        "Conferences and business events",
        "University and campus events",
        "Workshops and seminars",
        "Private and public gatherings",
      ],
    },
    closingSection: {
      title: "Give your next event a better ticketing experience",
      description:
        "Create your event presence, sell tickets, and manage entry with a platform designed around the needs of organisers.",
      ctaText: "Get Started with ZENTRA",
      ctaHref: "https://zentra.bolxolve.com",
      external: true,
      productWebsite: "zentra.bolxolve.com",
    },
  },

  "bolmeet-ai": {
    slug: "bolmeet-ai",
    number: "03",
    title: "BOLMEET AI \u2014 Intelligent Meeting Workspace",
    eyebrow: "AI & COLLABORATION SOLUTION",
    headline: "Meetings, Transformed by Active Intelligence.",
    introText: [
      "Conduct standard meeting calls with a built-in AI teammate. Detect key decisions, automatically compile and assign tasks, construct reports, and query past conversations with semantic memory.",
    ],
    primaryCta: {
      text: "Explore BOLMEET AI",
      href: "https://bolmeet-ai.vercel.app/",
      external: true,
    },
    secondaryCta: {
      text: "Talk to Our Team",
      href: "/#contact",
    },
    liveUrl: "https://bolmeet-ai.vercel.app/",
    productWebsite: "bolmeet-ai.vercel.app",
    screenshot: {
      src: "/showcase/bolmeet-ai-screenshot.png",
      alt: "BOLMEET AI Meeting Workspace Screenshot",
      captionTitle: "BOLMEET AI \u2022 Active Intelligence & Neural Synthesis",
      captionStatus: "In Development",
    },
    problemSection: {
      title: "The problem we're solving",
      paragraphs: [
        "Distributed technology teams spend hours in virtual meetings, but critical decisions, requirements, and assigned responsibilities are routinely lost or miscommunicated in manual note-taking.",
        "Valuable discussions vanish immediately after calls end, leaving non-attendees with zero contextual awareness and heavy manual follow-up burdens.",
      ],
    },
    capabilitiesSection: {
      title: "What BOLMEET AI makes possible",
      items: [
        {
          title: "Real-Time Intelligent Workspace",
          description:
            "Conferencing runtime paired with real-time meeting synthesis and an interactive AI co-pilot.",
        },
        {
          title: "Multi-Speaker Neural Transcription",
          description:
            "Automated speaker diarization that identifies participants and provides searchable, timestamped transcripts.",
        },
        {
          title: "Executive Synthesis & Decision Records",
          description:
            "Automated distillation of lengthy meeting calls into structured decision memos and consensus points.",
        },
        {
          title: "Action Item & Assignee Detection",
          description:
            "Automatic identification of commitments, deadlines, and assigned individuals formatted directly as actionable tasks.",
        },
        {
          title: "Searchable Semantic Knowledge Base",
          description:
            "Vector-indexed meeting repository allowing team members to query past conversations in natural language.",
        },
      ],
    },
    audienceSection: {
      title: "Built for distributed teams",
      intro:
        "BOLMEET AI is designed for organizations that want clarity and zero information loss across their remote discussions.",
      suitableFor: [
        "Distributed engineering and product teams",
        "High-velocity technology startups",
        "Remote consultancies and agency teams",
        "Cross-functional executive committees",
      ],
    },
    closingSection: {
      title: "Transform your team meetings into actionable execution",
      description:
        "Capture decisions, assign tasks automatically, and keep your entire team aligned without manual meeting minutes.",
      ctaText: "Get Started with BOLMEET AI",
      ctaHref: "https://bolmeet-ai.vercel.app/",
      external: true,
      productWebsite: "bolmeet-ai.vercel.app",
    },
  },
};

export const PROJECTS_LIST: SolutionProject[] = [
  CASE_STUDIES["invoice-management"],
  CASE_STUDIES.zentra,
  CASE_STUDIES["bolmeet-ai"],
];
