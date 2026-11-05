"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PROJECTS } from "./types";
import ZentraPreview from "./previews/ZentraPreview";
import BolmeetPreview from "./previews/BolmeetPreview";
import ReceiptSystemPreview from "./previews/ReceiptSystemPreview";

export const SelectedWork: React.FC = () => {
  const zentra = PROJECTS[0];
  const invoice = PROJECTS[1];
  const bolmeet = PROJECTS[2];

  return (
    <section
      id="solutions"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Target anchor aliases for external/hash navigation */}
      <span id="work" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="portfolio" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="selected-solutions" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="selected-work" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Controlled Radial Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-hero pointer-events-none opacity-25" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              SELECTED SOLUTIONS
            </span>
            <span className="text-[#1E2638] font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              PROVEN EXECUTION
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Ideas are good.{" "}
            <span className="text-[#BAF247]">Execution is better.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            A look at the digital solutions, enterprise systems and emerging platforms we&apos;ve brought to life.
          </p>
        </div>

        {/* =========================================================================
            ASYMMETRIC EDITORIAL SOLUTIONS GRID
           ========================================================================= */}
        <div className="space-y-10 sm:space-y-12">
          {/* =======================================================================
              01. FEATURED FLAGSHIP: ZENTRA (Full Width Asymmetric Card)
             ======================================================================= */}
          <div
            id={zentra.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Information & Capabilities */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#BAF247] font-bold">
                      {zentra.number} // FEATURED SOLUTION
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                      {zentra.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                      Category: {zentra.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050915] border border-[#1E2638] text-[#BAF247]">
                      {zentra.status.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {zentra.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {zentra.description}
                </p>

                {/* Core Capabilities Chips */}
                <div className="space-y-2 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    ENGINEERED ARCHITECTURE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {zentra.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-2 rounded bg-[#050915] border border-[#1E2638] text-xs text-white flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href={zentra.route}
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    View Solution
                  </Button>

                  <Button
                    variant="secondary"
                    size="md"
                    href="/#contact"
                  >
                    Inquire Similar Architecture
                  </Button>
                </div>
              </div>

              {/* Right Column (7 Cols): Visual Preview */}
              <div className="lg:col-span-7">
                <Link href={zentra.route} className="block group/preview cursor-pointer" aria-label={`View ${zentra.title} Solution`}>
                  <ZentraPreview />
                </Link>
              </div>
            </div>
          </div>

          {/* =======================================================================
              02 & 03. MID-GRID ASYMMETRIC PAIR: INVOICE MANAGEMENT & BOLMEET AI
             ======================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* 02. INVOICE MANAGEMENT SYSTEM */}
            <div
              id={invoice.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                  <span className="text-xs font-mono text-[#BAF247] font-bold">
                    {invoice.number} // BUSINESS SYSTEMS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050915] border border-[#1E2638] text-[#BAF247]">
                    {invoice.status.toUpperCase()}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A1A1AA] block mb-1 uppercase tracking-wider">
                    Category: {invoice.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {invoice.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {invoice.description}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="py-2">
                <Link href={invoice.route} className="block group/preview cursor-pointer" aria-label={`View ${invoice.title} Solution`}>
                  <ReceiptSystemPreview />
                </Link>
              </div>

              {/* Capabilities & Link */}
              <div className="space-y-4 pt-2 border-t border-[#1E2638]">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A1A1AA]">
                  {invoice.capabilities.map((cap) => (
                    <span key={cap} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href={invoice.route}
                    className="w-full justify-between"
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    <span>View Solution</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 03. BOLMEET AI */}
            <div
              id={bolmeet.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                  <span className="text-xs font-mono text-[#BAF247] font-bold">
                    {bolmeet.number} // ARTIFICIAL INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#050915] border border-[#1E2638] text-[#BAF247]">
                    {bolmeet.status.toUpperCase()}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A1A1AA] block mb-1 uppercase tracking-wider">
                    Category: {bolmeet.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {bolmeet.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {bolmeet.description}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="py-2">
                <Link href={bolmeet.route} className="block group/preview cursor-pointer" aria-label={`View ${bolmeet.title} Solution`}>
                  <BolmeetPreview />
                </Link>
              </div>

              {/* Capabilities & Link */}
              <div className="space-y-4 pt-2 border-t border-[#1E2638]">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A1A1AA]">
                  {bolmeet.capabilities.map((cap) => (
                    <span key={cap} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="sm"
                    href={bolmeet.route}
                    className="w-full justify-between"
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    <span>View Solution</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================================
              04. UPCOMING SOLUTION PREVIEW: EDUCATION MANAGEMENT SOLUTIONS
             ======================================================================= */}
          <div
            id="education-solution"
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/50 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] relative overflow-hidden group"
          >
            {/* Subtle Accent Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#BAF247]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Left Column (7 Cols): Editorial Introduction */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#BAF247] font-bold">
                      04 // UPCOMING SOLUTION
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#BAF247]/10 border border-[#BAF247]/30 text-[#BAF247] font-semibold uppercase tracking-wider">
                      Planned for Primary &amp; Secondary Schools
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                    Category: Institutional Software / EdTech Operations
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    Education Management Platform
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  We are engineering a next-generation administrative and academic operations platform purpose-built for primary and secondary school institutions. Designed to eliminate fragmented spreadsheets, paper attendance registers, and manual billing.
                </p>

                {/* Core Modules in Development */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2 border-t border-[#1E2638] text-xs font-mono">
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 01</span>
                    Student Lifecycle &amp; SIS
                  </div>
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 02</span>
                    Digital Attendance &amp; Alerts
                  </div>
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 03</span>
                    Continuous Grading &amp; Reports
                  </div>
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 04</span>
                    Parent &amp; Guardian Portal
                  </div>
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 05</span>
                    Facility &amp; Timetable Engine
                  </div>
                  <div className="p-2.5 rounded bg-[#050915] border border-[#1E2638] text-[#D4D4D8]">
                    <span className="text-[#BAF247] block text-[10px] mb-0.5">MODULE 06</span>
                    Fee Billing &amp; Reconciliation
                  </div>
                </div>

                {/* CTA Link to Dedicated Solution Route */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    href="/solutions/education"
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    Explore Solution Architecture &amp; Early Pilot
                  </Button>
                </div>
              </div>

              {/* Right Column (5 Cols): Architectural Blueprint Graphic */}
              <div className="lg:col-span-5">
                <div className="p-6 sm:p-8 rounded-xl bg-[#050915] border border-[#1E2638] space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
                    <span className="flex items-center gap-1.5 text-white font-medium">
                      <GraduationCap className="w-4 h-4 text-[#BAF247]" />
                      EDTECH OPERATING SYSTEM
                    </span>
                    <span className="text-[#BAF247] font-semibold">UPCOMING</span>
                  </div>

                  <div className="space-y-3 text-xs font-mono">
                    <div className="p-3 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between">
                      <span className="text-[#A1A1AA]">Target Institutions</span>
                      <span className="text-white font-semibold">K-12 Primary &amp; Secondary</span>
                    </div>
                    <div className="p-3 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between">
                      <span className="text-[#A1A1AA]">Deployment Model</span>
                      <span className="text-[#BAF247]">Secure Cloud Tenant</span>
                    </div>
                    <div className="p-3 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between">
                      <span className="text-[#A1A1AA]">Current Status</span>
                      <span className="text-white">Active Architectural Build</span>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-[#151B2B] border border-[#BAF247]/20 text-[11px] font-mono text-[#A1A1AA]">
                    <span className="text-[#BAF247] font-semibold block mb-1 uppercase tracking-wider">
                      Pilot Program Notice
                    </span>
                    We are currently collaborating with selected school boards for the 2025 academic year deployment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SelectedWork;
