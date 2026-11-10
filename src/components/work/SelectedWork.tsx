"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Check, GraduationCap, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "./types";
import ZentraPreview from "./previews/ZentraPreview";

export const SelectedWork: React.FC = () => {
  const zentra = PROJECTS[0];
  const invoice = PROJECTS[1];
  const education = PROJECTS[2];
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="solutions"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Target anchor aliases for external/hash navigation */}
      <span id="products" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="solutions" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="work" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="portfolio" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="selected-solutions" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Controlled Radial Background Glow — Breathing Motion */}
      <motion.div
        animate={shouldReduceMotion ? { opacity: 0.2 } : {
          opacity: [0.15, 0.25, 0.15],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-hero pointer-events-none"
      />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            SECTION INTRODUCTION
           ========================================================================= */}
        <ScrollReveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-3xl space-y-5">
            {/* Eyebrow */}
            <div>
              <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
                OUR PRODUCTS  SOLUTIONS
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Tools we&apos;ve built.{" "}
              <span className="text-[#BAF247]">Solutions ready to work.</span>
            </h2>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
              We develop practical software products that help organisations manage their operations, serve customers and work more efficiently.
            </p>
          </div>

          <div className="shrink-0 md:pb-2">
            <Button
              variant="secondary"
              size="md"
              href="/solutions"
              iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
            >
              Explore All Solutions
            </Button>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            PRODUCTS & SOLUTIONS EDITORIAL SHOWCASE
           ========================================================================= */}
        <div className="space-y-10 sm:space-y-12">
          {/* =======================================================================
              01. FEATURED HERO PRODUCT: ZENTRA (Comes First)
             ======================================================================= */}
          <ScrollReveal>
            <SpotlightCard
              id={zentra.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Information, Status & Model */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                    <span className="text-[#BAF247] font-bold">
                      {zentra.number} FEATURED PRODUCT
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-[#71717A]">
                      {zentra.category}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold uppercase tracking-wider">
                      {zentra.status}
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#050915] border border-[#1E2638] text-[#A1A1AA]">
                      Commercial Model: {zentra.commercialModel}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {zentra.title}
                  </h3>
                </div>

                {/* Mobile Preview right after title */}
                <div className="lg:hidden my-4">
                  <Link
                    href={zentra.route}
                    className="block group/preview cursor-pointer"
                    aria-label={`Explore ${zentra.title}`}
                  >
                    <ZentraPreview />
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {zentra.description}
                </p>

                {/* Verified Core Functionality */}
                <div className="space-y-2 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    VERIFIED CORE FUNCTIONALITY
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                    {zentra.capabilities.map((cap) => (
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

                {/* Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href={zentra.route}
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    {zentra.ctaText}
                  </Button>

                  {zentra.externalUrl && (
                    <a
                      href={zentra.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#1E2638] bg-[#050915] hover:bg-[#1E2638] text-white text-sm font-semibold transition-colors"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (7 Cols): Authentic Production Screenshot */}
              <div className="hidden lg:block lg:col-span-7">
                <Link
                  href={zentra.route}
                  className="block group/preview cursor-pointer"
                  aria-label={`Explore ${zentra.title}`}
                >
                  <ZentraPreview />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

          {/* =======================================================================
              02. PRODUCT: INVOICE MANAGEMENT SYSTEM (Horizontal Showcase)
             ======================================================================= */}
          <ScrollReveal delay={0.1}>
            <SpotlightCard
              id={invoice.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial & Commercial Context */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E2638] pb-4 text-xs font-mono">
                  <span className="text-[#BAF247] font-bold">
                    {invoice.number} BUSINESS MANAGEMENT
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-semibold">
                      {invoice.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                    Category: {invoice.category}
                  </span>
                  <span className="text-xs font-mono text-[#71717A] block">
                    Commercial Model: {invoice.commercialModel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white pt-1">
                    {invoice.title}
                  </h3>
                </div>

                {/* Mobile Preview right after title */}
                <div className="lg:hidden my-4">
                  <Link
                    href={invoice.route}
                    className="block group/preview cursor-pointer rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#BAF247]/40"
                    aria-label={`Explore ${invoice.title}`}
                  >
                    <div className="relative w-full aspect-[16/10] bg-[#050915] overflow-hidden">
                      <Image
                        src="/showcase/invoice-bolxolve-screenshot.jpg"
                        alt="BOLXOLVE Invoicing and Multi-Branch Enterprise Billing Dashboard"
                        fill
                        sizes="100vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-xs">
                      <span className="font-bold text-white tracking-tight">
                        BOLXOLVE Invoice Multi-Branch Billing
                      </span>
                      <span className="text-[11px] text-[#BAF247] font-mono">
                        Production Platform
                      </span>
                    </div>
                  </Link>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {invoice.description}
                </p>

                {/* Verified Core Functionality */}
                <div className="space-y-2 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    VERIFIED CORE FUNCTIONALITY
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                    {invoice.capabilities.map((cap) => (
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

                {/* Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href={invoice.route}
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    {invoice.ctaText}
                  </Button>

                  {invoice.externalUrl && (
                    <a
                      href={invoice.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-[#1E2638] bg-[#050915] hover:bg-[#1E2638] text-white text-sm font-semibold transition-colors"
                    >
                      <span>Visit Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
                    </a>
                  )}
                </div>
              </div>

              {/* Right Column (7 Cols): Authentic Production Screenshot */}
              <div className="hidden lg:block lg:col-span-7">
                <Link
                  href={invoice.route}
                  className="block group/preview cursor-pointer rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#BAF247]/40"
                  aria-label={`Explore ${invoice.title}`}
                >
                  {/* Screenshot Viewport */}
                  <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden">
                    <Image
                      src="/showcase/invoice-bolxolve-screenshot.jpg"
                      alt="BOLXOLVE Invoicing and multi-branch enterprise billing platform screenshot"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover/preview:scale-[1.01]"
                    />
                  </div>

                  {/* Minimal Caption Strip */}
                  <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-xs">
                    <span className="font-bold text-white tracking-tight">
                      BOLXOLVE Invoice Multi-Branch Depot &amp; Revenue Overview
                    </span>
                    <span className="text-[11px] text-[#BAF247] font-mono">
                      Production Platform
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>

          {/* =======================================================================
              03. PRODUCT: EDUCATION MANAGEMENT SOLUTIONS (Upcoming / Planned) — Horizontal Showcase
             ======================================================================= */}
          <ScrollReveal delay={0.15}>
            <SpotlightCard
              id="education-solutions"
              className="hidden md:block rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial & Upcoming Status */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E2638] pb-4 text-xs font-mono">
                  <span className="text-[#BAF247] font-bold">
                    {education.number} EDUCATION TECHNOLOGY
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#BAF247]" />
                    {education.status} / Planned
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                    Category: {education.category}
                  </span>
                  <span className="text-xs font-mono text-[#71717A] block">
                    Commercial Model: {education.commercialModel}
                  </span>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white pt-1">
                    {education.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {education.description}
                </p>

                {/* Primary & Secondary School Context */}
                <div className="p-3.5 rounded-xl bg-[#080D1A] border border-[#1E2638] text-xs text-[#A1A1AA] leading-relaxed space-y-1">
                  <span className="text-white font-medium flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#BAF247]" />
                    Primary &amp; Secondary Institution Focus
                  </span>
                  <p className="text-[11px] text-[#71717A]">
                    Designed specifically to meet the statutory grading, fee tracking, and administration workflows of primary and secondary schools.
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Button
                    variant="primary"
                    size="md"
                    href={education.route}
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                  >
                    {education.ctaText}
                  </Button>
                </div>
              </div>

              {/* Right Column (7 Cols): Architectural Roadmap & Blueprint Panel */}
              <div className="lg:col-span-7">
                <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#BAF247]/70" />
                      <span className="text-white font-medium">Planned Product Architecture &amp; Modules</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#A1A1AA]">
                      Architecture Blueprint
                    </span>
                  </div>

                  {/* Planned Modules Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.capabilities.map((item) => (
                      <div
                        key={item}
                        className="p-3 rounded-lg bg-[#050915] border border-[#1E2638] flex items-start gap-2.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] mt-1.5 shrink-0" />
                        <div>
                          <span className="text-xs font-medium text-white block">{item}</span>
                          <span className="text-[10px] text-[#71717A] font-mono">Specification in development</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Anti-Hallucination & Transparency Notice */}
                  <div className="p-4 rounded-lg bg-[#050915] border border-[#1E2638] text-xs text-[#71717A] leading-relaxed">
                    <span className="text-[#BAF247] font-semibold block mb-1">
                      Upcoming Solution Notice:
                    </span>
                    This product is currently in active planning and architectural development. It is not represented as an operational or commercially available platform. Open for discovery consultations with school administrators and education boards.
                  </div>

                  {/* Footer status strip */}
                  <div className="pt-2 border-t border-[#1E2638] flex items-center justify-between text-xs font-mono text-[#71717A]">
                    <span>Status: Upcoming / Planned</span>
                    <span className="text-[#BAF247]">Open For Inquiries</span>
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </div>

        {/* =========================================================================
            BOTTOM CALL-TO-ACTION: SOLUTIONS HUB
           ========================================================================= */}
        <ScrollReveal delay={0.1}>
          <SpotlightCard className="mt-12 sm:mt-16 rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/30 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-[#BAF247]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
                <span>EXPANDING SOFTWARE ECOSYSTEM</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Discover our complete suite of digital solutions.
              </h3>
              <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl">
                From live platforms like ZENTRA and Invoice Management to BOLMEET AI and upcoming educational suites, explore our full catalog or discuss custom builds.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                variant="primary"
                size="lg"
                href="/solutions"
                iconRight={<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
              >
                View More Solutions
              </Button>
            </div>
          </SpotlightCard>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default SelectedWork;