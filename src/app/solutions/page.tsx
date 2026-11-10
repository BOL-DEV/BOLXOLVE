"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Check, Sparkles, Clock, ShieldCheck, Layers, Cpu, GraduationCap, Building2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

interface SolutionItem {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  category: string;
  status: "Available" | "In Development" | "Upcoming";
  commercialModel: string;
  description: string;
  capabilities: string[];
  route: string;
  externalUrl?: string;
  externalDomain?: string;
  image?: string;
  imageAlt?: string;
  statusBadge: {
    label: string;
    variant: "available" | "development" | "upcoming";
  };
}

const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "zentra",
    number: "01",
    title: "ZENTRA — Event Ticketing & Access Platform",
    eyebrow: "WHITE-LABEL SAAS PLATFORM",
    category: "Event Technology",
    status: "Available",
    commercialModel: "Per-event / Platform pricing",
    description:
      "A white-label event ticketing platform that gives event organisers their own branded event pages, ticket checkout workflows, attendee management, and real-time QR code verification.",
    capabilities: [
      "Branded Organiser Event Pages",
      "Multi-Tier Ticket Categories",
      "Integrated Online Payments",
      "Instant Digital Ticket Delivery",
      "Dynamic QR Code Verification",
      "Staff Check-in Scanner Workflows",
    ],
    route: "/solutions/zentra",
    externalUrl: "https://zentra.bolxolve.com",
    externalDomain: "zentra.bolxolve.com",
    image: "/showcase/zentra-screenshot.jpg",
    imageAlt: "ZENTRA event ticketing and verification platform interface",
    statusBadge: {
      label: "Production • Available",
      variant: "available",
    },
  },
  {
    id: "invoice-management",
    number: "02",
    title: "Invoice Management System",
    eyebrow: "PROPRIETARY BUSINESS SOFTWARE",
    category: "Business Management",
    status: "Available",
    commercialModel: "Subscription-based",
    description:
      "A practical business tool that helps businesses create invoices and receipts, manage multi-branch transactions, and keep structured audit records without paperwork disorder.",
    capabilities: [
      "Invoice and Receipt Generation",
      "Multi-Branch & Depot Tracking",
      "Structured Audit Transaction Logs",
      "PDF and Printable Document Exports",
      "Spreadsheet Record Exports",
      "Role-Based Staff Access & Approvals",
    ],
    route: "/solutions/invoice-management",
    externalUrl: "https://invoice.bolxolve.com",
    externalDomain: "invoice.bolxolve.com",
    image: "/showcase/invoice-bolxolve-screenshot.jpg",
    imageAlt: "BOLXOLVE Invoicing and Multi-Branch Enterprise Billing Dashboard",
    statusBadge: {
      label: "Production • Available",
      variant: "available",
    },
  },
  {
    id: "bolmeet-ai",
    number: "03",
    title: "BOLMEET AI — Intelligent Meeting Workspace",
    eyebrow: "AI & COLLABORATION SOLUTION",
    category: "Intelligent Workspaces",
    status: "In Development",
    commercialModel: "Team / Enterprise Tier",
    description:
      "A virtual meeting workspace with an integrated AI teammate. Captures discussions, diarizes multi-speaker audio in real time, distills consensus decisions, and extracts actionable tasks.",
    capabilities: [
      "Real-Time Audio Conferencing",
      "Multi-Speaker Neural Transcription",
      "Executive Decision Distillation",
      "Action Item & Assignee Extraction",
      "Searchable Semantic Meeting Memory",
      "Exportable Meeting Memos & Notes",
    ],
    route: "/solutions/bolmeet-ai",
    externalUrl: "https://bolmeet-ai.vercel.app/",
    externalDomain: "bolmeet-ai.vercel.app",
    image: "/showcase/bolmeet-ai-screenshot.png",
    imageAlt: "BOLMEET AI intelligent meeting workspace interface",
    statusBadge: {
      label: "In Development • Active Pilot",
      variant: "development",
    },
  },
  {
    id: "education",
    number: "04",
    title: "Education Management Platform",
    eyebrow: "PLANNED EDTECH OPERATING SYSTEM",
    category: "Education Technology",
    status: "Upcoming",
    commercialModel: "Institutional Licensing",
    description:
      "A unified administrative and academic operating system purpose-built for primary and secondary schools. Eliminates paper attendance registers, scattered gradebooks, and opaque fee collections.",
    capabilities: [
      "Student Profiles & Enrollment Records",
      "Continuous Assessment & Report Cards",
      "School Fee Billing & Auto-Receipting",
      "Daily Student & Staff Attendance",
      "Parent Communication Notification Portal",
      "Role-Based Teacher & Admin Privileges",
    ],
    route: "/solutions/education",
    statusBadge: {
      label: "Upcoming • Early Discovery",
      variant: "upcoming",
    },
  },
];

type FilterType = "all" | "available" | "development";

export default function SolutionsHubPage() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredSolutions = SOLUTIONS_DATA.filter((sol) => {
    if (filter === "available") return sol.status === "Available";
    if (filter === "development") return sol.status === "In Development" || sol.status === "Upcoming";
    return true;
  });

  return (
    <main className="min-h-screen bg-[#050915] text-white pt-24 sm:pt-28 lg:pt-32 pb-24 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[650px] h-[650px] bg-radial-hero pointer-events-none opacity-20" />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            HEADER & HERO SECTION
           ========================================================================= */}
        <div className="max-w-4xl space-y-5 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              BOLXOLVE PLATFORMS &amp; SOFTWARE ECOSYSTEM
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Practical software tools.{" "}
            <span className="text-[#BAF247]">Ready to work.</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-3xl">
            We build digital products and proprietary business tools that solve real operational challenges. Explore our full catalog of production platforms, solutions in development, and strategic roadmap.
          </p>

          {/* Quick Stats / Overview Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1E2638] text-xs font-mono">
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Production Ready</span>
              <span className="text-white font-bold text-sm">2 Platforms</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">In Development</span>
              <span className="text-white font-bold text-sm">2 Active Projects</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Architecture</span>
              <span className="text-[#BAF247] font-medium">Modular &amp; Scalable</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Commercial Models</span>
              <span className="text-white font-medium">SaaS &amp; Dedicated</span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FILTER CONTROLS
           ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#1E2638]">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${filter === "all"
                  ? "bg-[#BAF247] text-[#050915] font-semibold"
                  : "bg-[#101522] text-[#A1A1AA] hover:text-white border border-[#1E2638]"
                }`}
            >
              All Solutions ({SOLUTIONS_DATA.length})
            </button>
            <button
              onClick={() => setFilter("available")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${filter === "available"
                  ? "bg-[#BAF247] text-[#050915] font-semibold"
                  : "bg-[#101522] text-[#A1A1AA] hover:text-white border border-[#1E2638]"
                }`}
            >
              Production Ready (2)
            </button>
            <button
              onClick={() => setFilter("development")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors ${filter === "development"
                  ? "bg-[#BAF247] text-[#050915] font-semibold"
                  : "bg-[#101522] text-[#A1A1AA] hover:text-white border border-[#1E2638]"
                }`}
            >
              In Development &amp; Upcoming (2)
            </button>
          </div>

          <span className="text-xs font-mono text-[#71717A]">
            Showing {filteredSolutions.length} of {SOLUTIONS_DATA.length} solutions
          </span>
        </div>

        {/* =========================================================================
            SOLUTIONS LISTING
           ========================================================================= */}
        <div className="space-y-8">
          {filteredSolutions.map((solution, index) => (
            <ScrollReveal key={solution.id} delay={index * 0.1}>
              <SpotlightCard
                id={solution.id}
                className="p-6 sm:p-8 lg:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.4)] group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Information Column (7 Cols) */}
                  <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="text-[#BAF247] font-bold">
                        {solution.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-[#71717A]">
                        {solution.eyebrow}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {solution.statusBadge.variant === "available" && (
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold uppercase tracking-wider">
                          {solution.statusBadge.label}
                        </span>
                      )}
                      {solution.statusBadge.variant === "development" && (
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          {solution.statusBadge.label}
                        </span>
                      )}
                      {solution.statusBadge.variant === "upcoming" && (
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold uppercase tracking-wider flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#BAF247]" />
                          {solution.statusBadge.label}
                        </span>
                      )}

                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#050915] border border-[#1E2638] text-[#A1A1AA]">
                        Model: {solution.commercialModel}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white pt-1">
                      {solution.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Capabilities Grid */}
                  <div className="space-y-2 pt-3 border-t border-[#1E2638]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                      CORE CAPABILITIES &amp; DELIVERABLES
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                      {solution.capabilities.map((cap) => (
                        <div
                          key={cap}
                          className="p-2 rounded bg-[#050915] border border-[#1E2638] flex items-center space-x-2"
                        >
                          <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                          <span className="truncate">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#1E2638]/70 flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      href={solution.route}
                      iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                    >
                      Explore Full Platform
                    </Button>

                    {solution.externalUrl && (
                      <a
                        href={solution.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-[#D4D4D8] hover:text-white bg-[#050915] border border-[#1E2638] hover:border-[#BAF247]/40 rounded-md transition-colors"
                      >
                        <span>{solution.externalDomain}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#BAF247]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual / Screenshot Column (5 Cols) */}
                <div className="lg:col-span-5">
                  {solution.image ? (
                    <Link
                      href={solution.route}
                      className="block group/preview cursor-pointer rounded-xl overflow-hidden border border-[#1E2638] bg-[#050915] transition-all duration-300 hover:border-[#BAF247]/50"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0A0F1D]">
                        <Image
                          src={solution.image}
                          alt={solution.imageAlt || solution.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.03]"
                        />
                      </div>
                      <div className="px-4 py-2.5 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-xs">
                        <span className="font-semibold text-white truncate">
                          {solution.title.split(" — ")[0]}
                        </span>
                        <span className="text-[11px] text-[#BAF247] font-mono shrink-0 ml-2">
                          View Architecture &rarr;
                        </span>
                      </div>
                    </Link>
                  ) : (
                    /* Modular EdTech Blueprint Card for Education */
                    <Link
                      href={solution.route}
                      className="block group/preview cursor-pointer rounded-xl bg-[#080D1A] border border-[#1E2638] p-6 space-y-4 transition-all duration-300 hover:border-[#BAF247]/40"
                    >
                      <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
                        <span className="text-white font-medium flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#BAF247]" />
                          K-12 School Architecture
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#A1A1AA]">
                          Planned Architecture
                        </span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-3 rounded bg-[#050915] border border-[#1E2638] text-xs font-mono space-y-1">
                          <span className="text-white font-medium block">Academic Operating System</span>
                          <span className="text-[11px] text-[#71717A] block">
                            Integrated report cards, continuous assessment, and paperless grade administration.
                          </span>
                        </div>
                        <div className="p-3 rounded bg-[#050915] border border-[#1E2638] text-xs font-mono space-y-1">
                          <span className="text-white font-medium block">Bursary &amp; Fee Management</span>
                          <span className="text-[11px] text-[#71717A] block">
                            Fee tracking, automated receipts, parent installment records, and payment reconciliation.
                          </span>
                        </div>
                      </div>

                      <div className="pt-2 text-xs font-mono text-[#BAF247] flex items-center justify-between">
                        <span>Explore Education Roadmap</span>
                        <span>&rarr;</span>
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>
        ))}
        </div>

        {/* =========================================================================
            BOTTOM CONVERSION SECTION
           ========================================================================= */}
        <ScrollReveal delay={0.2} className="mt-16 sm:mt-20">
          <SpotlightCard className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-[#BAF247]/20">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">
                Ready to deploy or discuss a solution?
              </h4>
              <p className="text-xs text-[#71717A]">
                Our engineering team is ready to assist with deployment, custom configurations, or integrations.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Button variant="outline" size="sm" href="/#services">
                Explore Services
              </Button>
              <Button variant="primary" size="sm" href="/#contact">
                Start a Conversation
              </Button>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </Container>
    </main>
  );
}

