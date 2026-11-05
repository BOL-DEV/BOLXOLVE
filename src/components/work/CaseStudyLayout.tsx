"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Sparkles, Layers, Cpu, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ProjectCaseStudy, PROJECTS_LIST } from "@/data/projectsData";
import ZentraPreview from "./previews/ZentraPreview";
import BolmeetPreview from "./previews/BolmeetPreview";
import ReceiptSystemPreview from "./previews/ReceiptSystemPreview";

interface CaseStudyLayoutProps {
  project: ProjectCaseStudy;
}

export const CaseStudyLayout: React.FC<CaseStudyLayoutProps> = ({ project }) => {
  // Find previous and next project for bottom navigation
  const currentIndex = PROJECTS_LIST.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? PROJECTS_LIST[currentIndex - 1] : null;
  const nextProject = currentIndex < PROJECTS_LIST.length - 1 ? PROJECTS_LIST[currentIndex + 1] : null;

  return (
    <article className="min-h-screen bg-[#050915] text-white pt-8 pb-24 overflow-hidden">
      {/* Background Subtle Tech Grid & Atmospheric Radial Glow */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-25" />

      {/* Top Breadcrumb & Navigation Bar */}
      <div className="w-full border-b border-[#1E2638] bg-[#050915]/80 backdrop-blur-md sticky top-20 z-40">
        <Container size="wide">
          <div className="h-14 flex items-center justify-between text-xs font-mono">
            {/* Back to Work Link */}
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#BAF247] transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Selected Work</span>
            </Link>

            {/* Breadcrumb Path */}
            <div className="hidden sm:flex items-center gap-2 text-[#71717A]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
              <span>/</span>
              <span className="text-white font-medium">{project.title}</span>
            </div>
          </div>
        </Container>
      </div>

      <Container size="wide" className="relative z-10 pt-12 sm:pt-16 lg:pt-20">
        {/* =====================================================================
            1. PROJECT HERO & METADATA HEADER
           ===================================================================== */}
        <div className="space-y-8 max-w-4xl pb-16 border-b border-[#1E2638]">
          {/* Eyebrow & Status Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#BAF247] font-bold">
              CASE STUDY // {project.number}
            </span>
            <span className="text-[#1E2638] font-mono text-xs">/</span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#101522] border border-[#1E2638] text-[11px] font-mono text-[#BAF247]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
              {project.status}
            </span>
          </div>

          {/* Project Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
            {project.title}
          </h1>

          {/* Project Summary / Overview */}
          <p className="text-lg sm:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            {project.overview}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#1E2638] text-xs font-mono">
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Sector</span>
              <span className="text-white font-medium">{project.clientType}</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Discipline</span>
              <span className="text-white font-medium">{project.discipline}</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Year</span>
              <span className="text-white font-medium">{project.year}</span>
            </div>
            <div>
              <span className="text-[#71717A] uppercase tracking-wider block mb-1">Architecture</span>
              <span className="text-[#BAF247] font-semibold">{project.tag}</span>
            </div>
          </div>
        </div>

        {/* =====================================================================
            2. PRODUCT SCREENSHOT / VISUAL PREVIEW STAGE
           ===================================================================== */}
        <div className="py-12 sm:py-16">
          <div className="p-3 sm:p-5 rounded-2xl bg-[#101522] border border-[#1E2638] shadow-[0_24px_64px_rgba(0,0,0,0.6)]">
            {project.previewComponentId === "zentra" && <ZentraPreview />}
            {project.previewComponentId === "invoice-management" && <ReceiptSystemPreview />}
            {project.previewComponentId === "bolmeet-ai" && <BolmeetPreview />}
          </div>
        </div>

        {/* Key Metrics Strip (If Available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[#1E2638]">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="space-y-1 text-center sm:text-left border-b md:border-b-0 md:border-r border-[#1E2638] last:border-r-0 pb-4 md:pb-0">
                <span className="text-3xl sm:text-4xl font-bold font-mono text-[#BAF247]">
                  {metric.value}
                </span>
                <span className="block text-xs font-mono uppercase tracking-wider text-white font-medium">
                  {metric.label}
                </span>
                <span className="block text-xs text-[#71717A]">
                  {metric.subtext}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* =====================================================================
            3. PROBLEM STATEMENT & SOLUTION APPROACH (Two Column Editorial Deep Dive)
           ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 py-12 border-t border-[#1E2638]">
          {/* Problem Statement */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#71717A]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              01 // THE CHALLENGE
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Problem Statement
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.problemStatement.summary}
            </p>
            <ul className="space-y-3 pt-2">
              {project.problemStatement.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                  <span className="text-[#EF4444] font-mono font-bold mt-0.5">&times;</span>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Approach */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
              02 // THE ENGINEERING APPROACH
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Solution Approach
            </h2>
            <p className="text-base text-[#A1A1AA] leading-relaxed">
              {project.solutionApproach.summary}
            </p>
            <ul className="space-y-3 pt-2">
              {project.solutionApproach.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#D4D4D8]">
                  <Check className="w-4 h-4 text-[#BAF247] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* =====================================================================
            4. KEY CAPABILITIES GRID
           ===================================================================== */}
        <div className="py-16 border-t border-[#1E2638] space-y-10">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              03 // FUNCTIONAL CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Key Capabilities Delivered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3 hover:border-[#BAF247]/30 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-center">
                  <Check className="w-4 h-4 text-[#BAF247]" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================================
            5. TECHNICAL ARCHITECTURE & STACK
           ===================================================================== */}
        <div className="py-16 border-t border-[#1E2638] space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              04 // UNDER THE HOOD
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technical Architecture &amp; Stack
            </h2>
            <p className="text-[#A1A1AA] leading-relaxed">
              {project.technicalArchitecture.summary}
            </p>
          </div>

          {/* Architecture Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.technicalArchitecture.highlights.map((item) => (
              <div key={item.label} className="p-6 rounded-xl bg-[#101522] border border-[#1E2638] space-y-2">
                <span className="text-xs font-mono uppercase text-[#BAF247] font-semibold flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" />
                  {item.label}
                </span>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Technology Stack Categories */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[#1E2638] space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white font-semibold block border-b border-[#1E2638] pb-3">
              TECHNOLOGY INVENTORY
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.techStack.map((group) => (
                <div key={group.category} className="space-y-3">
                  <span className="text-xs font-mono text-[#71717A] uppercase tracking-wider block">
                    {group.category}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-[#050915] border border-[#1E2638] text-xs font-mono text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================================
            6. CONTACT CTA
           ===================================================================== */}
        <div className="my-16 p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#101522] to-[#050915] border border-[#1E2638] text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247]">
              LET&apos;S ENGINEER YOUR NEXT PLATFORM
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Interested in similar architecture?
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              We design, engineer, and deploy high-concurrency custom platforms and digital solutions tailored to your operational requirements.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="/#contact">
              Start a project
            </Button>
            <Button variant="secondary" size="lg" href="/#work">
              Explore other work
            </Button>
          </div>
        </div>

        {/* =====================================================================
            7. PREVIOUS / NEXT CASE STUDY NAVIGATION
           ===================================================================== */}
        <div className="pt-8 border-t border-[#1E2638] flex items-center justify-between text-xs font-mono">
          {prevProject ? (
            <Link
              href={`/work/${prevProject.slug}`}
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#BAF247] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous: {prevProject.title}</span>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/work/${nextProject.slug}`}
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#BAF247] transition-colors"
            >
              <span>Next: {nextProject.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Container>
    </article>
  );
};

export default CaseStudyLayout;

