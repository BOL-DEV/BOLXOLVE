import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Clock, ShieldCheck, Users, Calendar, Receipt, FileText, BellRing, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Education Management Platform — Primary & Secondary School Solutions",
  description:
    "A next-generation administrative and academic operating system purpose-built for primary and secondary schools. Currently in active development by BOLXOLVE LTD.",
  alternates: {
    canonical: "/solutions/education",
  },
  openGraph: {
    title: "Education Management Platform | BOLXOLVE Solutions",
    description:
      "Modern school management software designed for K-12 primary and secondary institutions. Student records, attendance, report cards, parent portals, and fee billing.",
    url: `${SITE_URL}/solutions/education`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Education Management Platform | BOLXOLVE Solutions",
    description:
      "Modern school management software designed for primary and secondary institutions by BOLXOLVE LTD.",
  },
};

export default function EducationSolutionPage() {
  return (
    <article className="min-h-screen bg-[#050915] text-white pt-8 sm:pt-14 lg:pt-20 pb-20 sm:pb-24 overflow-hidden">
      {/* Background Matrix & Subtle Ambient Lighting */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[650px] h-[650px] bg-radial-hero pointer-events-none opacity-25" />

      <Container size="wide" className="relative z-10">
        {/* =====================================================================
            1. SOLUTION HERO & UPCOMING STATUS
           ===================================================================== */}
        <div className="space-y-8 max-w-4xl pb-16 border-b border-[#1E2638]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#BAF247] font-bold">
              SOLUTIONS ROADMAP 2025
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              Primary &amp; Secondary School Operations
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#BAF247]/10 border border-[#BAF247]/30 text-[11px] font-mono text-[#BAF247] font-semibold">
              IN ACTIVE DEVELOPMENT — EARLY PILOT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            Education Management Platform
          </h1>

          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            A unified administrative and academic operating system designed specifically for primary and secondary schools. Built to eliminate fragmented paper registers, disconnected gradebooks, and opaque billing workflows.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#1E2638] text-xs font-mono">
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Target Institutions</span>
              <span className="text-white font-medium">K-12 Primary &amp; Secondary</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Current Status</span>
              <span className="text-[#BAF247] font-semibold">Core Architecture Phase</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Planned Pilot</span>
              <span className="text-white font-medium">2025 Academic Cycle</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Delivery Model</span>
              <span className="text-white font-medium">Secure Dedicated Cloud Tenant</span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. TRANSPARENCY NOTICE BANNER
           ===================================================================== */}
        <div className="my-12 p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[#BAF247]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#BAF247]" />
              UPCOMING SOLUTION TRANSPARENCY NOTICE
            </span>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              This solution is actively under development. We do not claim completed production status or existing customer deployments. We are currently inviting school administrators, principals, and educational boards to participate in our early institutional advisory cohort.
            </p>
          </div>
          <Button variant="primary" size="md" href="/#contact">
            Request Pilot Information
          </Button>
        </div>

        {/* =====================================================================
            3. THE OPERATIONAL CHALLENGE IN SCHOOLS
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-12 border-t border-[#1E2638]">
          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A] block">
              01 // THE CHALLENGE
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Why School Operations Are Broken
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              Most primary and secondary institutions are burdened by software from the early 2000s or fragmented spreadsheets. Teachers waste hours on manual attendance roll-calls, student files are scattered across physical filing cabinets, and parents lack real-time visibility into their children&apos;s academic performance.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <span className="text-[#EF4444] font-mono font-bold mt-0.5">&times;</span>
                <span>Manual roll-calls on paper registers leading to delayed absence reporting to guardians.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <span className="text-[#EF4444] font-mono font-bold mt-0.5">&times;</span>
                <span>Laborious end-of-term report card drafting requiring days of teacher overtime.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <span className="text-[#EF4444] font-mono font-bold mt-0.5">&times;</span>
                <span>Unreconciled school fees, paper receipts, and delayed bank payment matching.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <span className="text-[#EF4444] font-mono font-bold mt-0.5">&times;</span>
                <span>Disconnected messaging channels leaving parents uninformed during critical school updates.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] block">
              02 // THE BOLXOLVE VISION
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              A Modern, Unified School OS
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              We are engineering a clean, cloud-native operational system designed around how modern primary and secondary schools actually function. A single login gives school leadership live operational insights, enables teachers to enter grades and attendance in seconds, and provides parents with an intuitive mobile portal.
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <Check className="w-4 h-4 text-[#BAF247] shrink-0 mt-0.5" />
                <span>Unified digital student records covering enrollment, medical, and family profiles.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <Check className="w-4 h-4 text-[#BAF247] shrink-0 mt-0.5" />
                <span>Instant automated SMS/email absence notifications delivered to parents.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <Check className="w-4 h-4 text-[#BAF247] shrink-0 mt-0.5" />
                <span>Continuous assessment gradebooks compiling term reports automatically.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                <Check className="w-4 h-4 text-[#BAF247] shrink-0 mt-0.5" />
                <span>Transparent online tuition fee billing with automated receipting and reconciliation.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================================================================
            4. PLANNED MODULES SPECIFICATION
           ===================================================================== */}
        <div className="py-16 border-t border-[#1E2638] space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              03 // CORE CAPABILITIES ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Planned Platform Modules
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              Every component is being architected specifically for K-12 primary and secondary administrative compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Module 1 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <Users className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 01
              </span>
              <h3 className="text-lg font-bold text-white">Student Information System (SIS)</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Centralized student lifecycle management: admissions, biographical data, emergency contacts, medical records, and sibling linking in one secure repository.
              </p>
            </div>

            {/* Module 2 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <BellRing className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 02
              </span>
              <h3 className="text-lg font-bold text-white">Digital Attendance &amp; Instant Alerts</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                One-tap mobile roll call for teachers. Automated SMS and email notifications are instantly dispatched to parents when an unexcused absence is registered.
              </p>
            </div>

            {/* Module 3 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <FileText className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 03
              </span>
              <h3 className="text-lg font-bold text-white">Continuous Assessment &amp; Reports</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Customizable gradebooks aligned with national and international curricula. Automatically compiles final term report cards with teacher commentary.
              </p>
            </div>

            {/* Module 4 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 04
              </span>
              <h3 className="text-lg font-bold text-white">Parent &amp; Guardian Portal</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                A dedicated mobile-responsive portal for parents to track daily attendance, examination grades, teacher circulars, and scheduled school events.
              </p>
            </div>

            {/* Module 5 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <Calendar className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 05
              </span>
              <h3 className="text-lg font-bold text-white">Facility &amp; Timetable Scheduling</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Algorithmic scheduling engine preventing room and teacher double-booking, with full calendar management for sports days, parent conferences, and term holidays.
              </p>
            </div>

            {/* Module 6 */}
            <div className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
              <div className="w-9 h-9 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                <Receipt className="w-4 h-4 text-[#BAF247]" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#BAF247] block">
                MODULE 06
              </span>
              <h3 className="text-lg font-bold text-white">Fee Billing &amp; Reconciliation</h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                Automated tuition invoice generation, installment plans, digital payment collection, and instant receipt generation with full bookkeeping audit logs.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================================
            5. DATA PRIVACY & COMPLIANCE ARCHITECTURE
           ===================================================================== */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#101522] border border-[#1E2638] space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BAF247]">
            <ShieldCheck className="w-4 h-4 text-[#BAF247]" />
            STUDENT DATA PROTECTION &amp; COMPLIANCE
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineered with Strict Student Privacy Safeguards
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
            <div className="p-4 rounded-lg bg-[#050915] border border-[#1E2638] space-y-2">
              <span className="text-white font-semibold block">Tenant Data Isolation</span>
              <p className="text-[#A1A1AA]">
                Each school operates in a dedicated, isolated database environment to guarantee student records are never co-mingled.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#050915] border border-[#1E2638] space-y-2">
              <span className="text-white font-semibold block">End-to-End Encryption</span>
              <p className="text-[#A1A1AA]">
                All student identity, health, and grade data is encrypted at rest (AES-256) and in transit (TLS 1.3).
              </p>
            </div>
            <div className="p-4 rounded-lg bg-[#050915] border border-[#1E2638] space-y-2">
              <span className="text-white font-semibold block">Role-Based Safeguards</span>
              <p className="text-[#A1A1AA]">
                Strict least-privilege access rules: teachers access only their class lists, while parents view only their registered children.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================================
            6. EARLY ACCESS PILOT REGISTRATION CTA
           ===================================================================== */}
        <div className="my-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#101522] to-[#050915] border border-[#1E2638] text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              INSTITUTIONAL ADVISORY COHORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Shape the Future of School Operations
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              We are partnering with a select cohort of primary and secondary school leadership teams to pilot the platform during the upcoming academic cycle. Register your school&apos;s interest to join the advisory program.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#contact">
              Register School for Pilot Access
            </Button>
            <Button variant="secondary" size="lg" href="/#solutions">
              Return to Selected Solutions
            </Button>
          </div>
        </div>
      </Container>
    </article>
  );
}

