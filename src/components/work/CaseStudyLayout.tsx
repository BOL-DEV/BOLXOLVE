"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SolutionProject } from "@/data/projectsData";

interface CaseStudyLayoutProps {
  project: SolutionProject;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ project }) => {
  return (
    <article className="min-h-screen bg-[#050915] text-white pt-8 sm:pt-14 lg:pt-20 pb-20 sm:pb-24 overflow-hidden">
      {/* Background Subtle Tech Grid & Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-25" />

      <Container size="wide" className="relative z-10">
        {/* =====================================================================
            1. PRODUCT HERO & HEADLINE
           ===================================================================== */}
        <div className="space-y-6 max-w-4xl pb-14 border-b border-[#1E2638]">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono text-[#BAF247] font-bold tracking-widest uppercase">
              {project.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            {project.headline}
          </h1>

          {/* Product Name Subtitle */}
          <p className="text-base sm:text-lg font-mono text-[#BAF247]/90 font-medium">
            {project.title}
          </p>

          {/* Intro Paragraphs */}
          <div className="space-y-4 pt-2">
            {project.introText.map((paragraph, idx) => (
              <p key={idx} className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            {project.primaryCta.external ? (
              <Button
                variant="primary"
                size="md"
                href={project.primaryCta.href}
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                {project.primaryCta.text}
              </Button>
            ) : (
              <Button
                variant="primary"
                size="md"
                href={project.primaryCta.href}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {project.primaryCta.text}
              </Button>
            )}

            <Button
              variant="secondary"
              size="md"
              href={project.secondaryCta.href}
            >
              {project.secondaryCta.text}
            </Button>

            {project.liveUrl && !project.primaryCta.external && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-[#1E2638] bg-[#101522] hover:bg-[#1E2638] text-white text-sm font-semibold transition-colors"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#71717A]" />
              </a>
            )}
          </div>
        </div>

        {/* =====================================================================
            2. PRODUCT SCREENSHOT / AUTHENTIC VIEWPORT
           ===================================================================== */}
        <div className="py-12 sm:py-16">
          <div className="rounded-2xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            {/* Clean Screenshot Viewport */}
            <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden">
              <Image
                src={project.screenshot.src}
                alt={project.screenshot.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover object-top"
              />
            </div>

            {/* Minimal Caption Strip */}
            <div className="px-5 py-3.5 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold text-white tracking-tight">
                {project.screenshot.captionTitle}
              </span>
              <span className="text-[11px] text-[#BAF247] font-mono">
                {project.screenshot.captionStatus}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            3. THE PROBLEM WE'RE SOLVING
           ===================================================================== */}
        <div className="py-12 border-t border-[#1E2638] space-y-6 max-w-3xl">
          <div className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
            THE CONTEXT
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.problemSection.title}
          </h2>
          <div className="space-y-4">
            {project.problemSection.paragraphs.map((p, idx) => (
              <p key={idx} className="text-base text-[#D4D4D8] leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* =====================================================================
            4. WHAT YOU CAN DO WITH IT / WHAT ZENTRA MAKES POSSIBLE
           ===================================================================== */}
        <div className="py-16 border-t border-[#1E2638] space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              CORE FUNCTIONALITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {project.capabilitiesSection.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.capabilitiesSection.items.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3 hover:border-[#BAF247]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#BAF247]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            5. DESIGNED AROUND REAL BUSINESS OPERATIONS / SUITABLE FOR
           ===================================================================== */}
        <div className="py-16 border-t border-[#1E2638]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left 6 cols: Context & Narrative */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
                OPERATIONAL FIT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.audienceSection.title}
              </h2>
              <p className="text-base text-[#D4D4D8] leading-relaxed">
                {project.audienceSection.intro}
              </p>
            </div>

            {/* Right 6 cols: Suitable For Box */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[#1E2638] space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block border-b border-[#1E2638] pb-3">
                  SUITABLE FOR:
                </span>
                <ul className="space-y-3">
                  {project.audienceSection.suitableFor.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                      <div className="w-5 h-5 rounded bg-[#050915] border border-[#1E2638] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#BAF247]" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            6. CLOSING CTA SECTION
           ===================================================================== */}
        <div className="my-12 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#101522] to-[#050915] border border-[#1E2638] text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
              {project.closingSection.title}
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              {project.closingSection.description}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            {project.closingSection.external ? (
              <Button
                variant="primary"
                size="lg"
                href={project.closingSection.ctaHref}
                iconRight={<ExternalLink className="w-4 h-4" />}
              >
                {project.closingSection.ctaText}
              </Button>
            ) : (
              <Button
                variant="primary"
                size="lg"
                href={project.closingSection.ctaHref}
                iconRight={<ArrowRight className="w-4 h-4" />}
              >
                {project.closingSection.ctaText}
              </Button>
            )}

            <Button variant="secondary" size="lg" href="/#contact">
              Talk to Our Team
            </Button>
          </div>

          {/* Note or Product Website */}
          {project.closingSection.note && (
            <p className="text-xs text-[#71717A] italic pt-2">
              {project.closingSection.note}
            </p>
          )}
        </div>
      </Container>
    </article>
  );
};

export default CaseStudyLayout;