"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  ExternalLink,
  ShieldCheck,
  Building2,
  Music2,
  ArrowRight,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface RealProject {
  id: "hrh" | "dikonut";
  name: string;
  categoryTag: string;
  clientType: string;
  url: string;
  domain: string;
  headline: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
}

const REAL_PROJECTS: RealProject[] = [
  {
    id: "hrh",
    name: "HRH | Healing, Rhythm & Highlife",
    categoryTag: "CULTURAL EDITORIAL & SESSIONS",
    clientType: "Culture, Music & Therapeutic Media",
    url: "https://hrhsession.vercel.app/",
    domain: "hrhsession.vercel.app",
    headline: "A cinematic editorial platform for culture, care, music, and memory.",
    description:
      "A bespoke editorial web platform where cultural identity, emotional honesty, and highlife move in the same direction. Features curated listening rooms, intimate dialogue archives, and reflective monochrome storytelling.",
    techStack: ["Next.js 16", "Editorial Architecture", "Custom Audio Integration", "Monochrome Design System"],
    keyHighlights: [
      "Cinematic monochrome editorial aesthetic with film grain overlays",
      "Archival audio sessions & highlife listening interface",
      "Reflective longform essays and therapeutic community dialogue",
      "Sub-second edge routing and responsive editorial typography",
    ],
  },
  {
    id: "dikonut",
    name: "Dikonut Limited",
    categoryTag: "ENGINEERING & CONSTRUCTION FLAGSHIP",
    clientType: "Commercial Construction & Project Management",
    url: "https://dikonut.vercel.app/",
    domain: "dikonut.vercel.app",
    headline: "Construction. Engineering. Project Management.",
    description:
      "A high-impact corporate web platform built for a construction and engineering company delivering dependable solutions across the built environment in Lagos and Ogun State, Nigeria.",
    techStack: ["Next.js 16", "Architectural Blueprint UI", "Project Portfolio Engine", "Consultation Pipeline"],
    keyHighlights: [
      "Technical architectural grid design language with high-contrast yellow accents",
      "Structured project portfolio showcase (Commercial, Infrastructure, Residential)",
      "Engineering capabilities matrix and technical approach walkthrough",
      "Integrated client consultation and site inspection request workflows",
    ],
  },
];

export const WebDigitalShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<"hrh" | "dikonut">("hrh");

  const project = REAL_PROJECTS.find((p) => p.id === activeProject) || REAL_PROJECTS[0];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Browser & Environment Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEPLOYED CLIENT PLATFORMS</span>
          <span className="text-[#71717A]">// Web &amp; Digital Experiences</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live In Production
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Project Selector Switcher */}
        <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveProject("hrh")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                activeProject === "hrh"
                  ? "bg-[#1E2638] text-[#BAF247] font-semibold border border-[#BAF247]/30 shadow-xs"
                  : "text-[#71717A] hover:text-white bg-[#0A0F1D] border border-transparent"
              }`}
            >
              <Music2 className="w-3.5 h-3.5" />
              <span>01 &bull; HRH Platform</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveProject("dikonut")}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
                activeProject === "dikonut"
                  ? "bg-[#1E2638] text-[#BAF247] font-semibold border border-[#BAF247]/30 shadow-xs"
                  : "text-[#71717A] hover:text-white bg-[#0A0F1D] border border-transparent"
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>02 &bull; Dikonut Limited</span>
            </button>
          </div>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#BAF247] hover:underline flex items-center gap-1 font-mono"
          >
            <span>Visit Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Browser Mockup Chrome */}
        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl">
          {/* Simulated Browser Address Bar */}
          <div className="px-4 py-2 bg-[#0C1120] border-b border-[#1E2638] flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60" />
            </div>

            <div className="flex-1 max-w-md bg-[#050915] py-1 px-3 rounded-md border border-[#1E2638] flex items-center justify-between text-[11px] text-[#A1A1AA]">
              <div className="flex items-center gap-1.5 truncate">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-white">https://{project.domain}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold shrink-0">SSL OK</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-[10px] text-[#71717A]">
              <span>Edge Cached</span>
            </div>
          </div>

          {/* Project Details & Visual Card */}
          <div className="p-4 sm:p-6 space-y-5">
            {/* HRH Visual & Content */}
            {activeProject === "hrh" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                {/* Visual Imagery Preview */}
                <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-[#1E2638] aspect-4/3 group">
                  <Image
                    src="/showcase/hrh/hero.jpg"
                    alt="HRH — Healing, Rhythm & Highlife Platform"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#BAF247] border border-white/10">
                      Authentic Live Imagery
                    </span>
                    <p className="text-white text-xs font-serif italic mt-1 drop-shadow-md">
                      &ldquo;A session of inward attention. Music as medicine.&rdquo;
                    </p>
                  </div>
                </div>

                {/* Narrative & Highlights */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#BAF247] font-bold block">
                      {project.categoryTag}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight mt-1">
                      {project.name}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    {project.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#D4D4D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[10px] font-mono text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Dikonut Visual & Content */}
            {activeProject === "dikonut" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
                {/* Architectural Blueprint Graphic Preview */}
                <div className="lg:col-span-5 relative rounded-lg overflow-hidden border border-[#1E2638] bg-[#0A0D14] aspect-4/3 p-5 flex flex-col justify-between">
                  {/* Grid Lines Overlay */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #BAF247 1px, transparent 1px), linear-gradient(to bottom, #BAF247 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="font-display text-xl font-black tracking-tight text-white">
                      DIKO<span className="text-[#F59E0B]">NUT</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 font-mono text-[10px]">
                      Lagos &bull; Ogun
                    </span>
                  </div>

                  <div className="relative z-10 space-y-2 my-auto py-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#71717A] block">
                      Featured Portfolios
                    </span>
                    <div className="space-y-1 font-mono text-xs">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white">Commercial Complex</span>
                        <span className="text-[#F59E0B]">Lagos</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-white">Infrastructure Works</span>
                        <span className="text-[#F59E0B]">Ogun</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white">Residential Towers</span>
                        <span className="text-[#F59E0B]">Planned</span>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 text-[10px] font-mono text-[#71717A] border-t border-white/10 pt-2 flex justify-between">
                    <span>Engineering &bull; Procurement</span>
                    <span className="text-white">Project Management</span>
                  </div>
                </div>

                {/* Narrative & Highlights */}
                <div className="lg:col-span-7 space-y-3.5">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#BAF247] font-bold block">
                      {project.categoryTag}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight mt-1">
                      {project.name}
                    </h4>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed mt-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    {project.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 text-[#D4D4D8]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0 mt-0.5" />
                        <span className="text-[11px] leading-tight">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[10px] font-mono text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* External Visit Banner */}
        <div className="p-3 bg-gradient-to-r from-[#0E1322] to-[#121A2F] border border-[#1E2638] rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <span className="font-semibold text-white block">
              Live Production Showcase: {project.name}
            </span>
            <span className="text-[11px] text-[#A1A1AA]">
              Explore the deployed platform directly in production at {project.domain}.
            </span>
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#BAF247] hover:bg-[#cbf95c] text-[#050915] font-semibold text-xs transition-colors shrink-0"
          >
            <span>Visit Live Platform</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 01 // WEB &amp; DIGITAL EXPERIENCES</span>
        <span className="text-[#BAF247]">REAL CLIENT PLATFORMS</span>
      </div>
    </div>
  );
};

export default WebDigitalShowcase;
export const RealEstateConceptPreview = WebDigitalShowcase;
