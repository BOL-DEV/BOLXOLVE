"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Globe,
  ExternalLink,
  ShieldCheck,
  Building2,
  Music2,
} from "lucide-react";

interface ShowcaseProject {
  id: "hrh" | "dikonut";
  name: string;
  category: string;
  url: string;
  domain: string;
  screenshot: string;
  tagline: string;
  tags: string[];
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "hrh",
    name: "HRH — Healing, Rhythm & Highlife",
    category: "Cultural Editorial & Sound",
    url: "https://hrhsession.vercel.app/",
    domain: "hrhsession.vercel.app",
    screenshot: "/showcase/hrh-screenshot.jpg",
    tagline: "A cinematic editorial platform for culture, care, music, and memory.",
    tags: ["Next.js 16", "Editorial System", "Audio Showcase"],
  },
  {
    id: "dikonut",
    name: "Dikonut Limited",
    category: "Construction & Engineering Flagship",
    url: "https://dikonut.vercel.app/",
    domain: "dikonut.vercel.app",
    screenshot: "/showcase/dikonut-screenshot.png",
    tagline: "A technical corporate platform for construction, engineering, and infrastructure.",
    tags: ["Next.js 16", "Architectural UI", "Project Portfolio"],
  },
];

export const WebDigitalShowcase: React.FC = () => {
  const [activeProject, setActiveProject] = useState<"hrh" | "dikonut">("hrh");

  const project =
    SHOWCASE_PROJECTS.find((p) => p.id === activeProject) || SHOWCASE_PROJECTS[0];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Bar with Project Switcher & Single Live Link */}
      <div className="px-4 py-3 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Project Selector Tabs */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveProject("hrh")}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
              activeProject === "hrh"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold border border-[#BAF247]/40 shadow-xs"
                : "text-[#71717A] hover:text-white bg-[#0D1222] border border-transparent"
            }`}
          >
            <Music2 className="w-3.5 h-3.5" />
            <span>HRH Platform</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveProject("dikonut")}
            className={`px-3 py-1.5 rounded-lg text-xs transition-all flex items-center gap-2 ${
              activeProject === "dikonut"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold border border-[#BAF247]/40 shadow-xs"
                : "text-[#71717A] hover:text-white bg-[#0D1222] border border-transparent"
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Dikonut Limited</span>
          </button>
        </div>

        {/* Single Clean Live Site Link */}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#BAF247]/10 hover:bg-[#BAF247]/20 border border-[#BAF247]/30 text-[#BAF247] font-semibold text-xs transition-colors"
        >
          <span>Visit Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Visual Showcase (Browser Viewport) */}
      <div className="p-3 sm:p-4 bg-[#070B16]">
        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl">
          {/* Browser Address Bar Chrome */}
          <div className="px-4 py-2 bg-[#0C1120] border-b border-[#1E2638] flex items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/70" />
            </div>

            <div className="flex-1 max-w-sm bg-[#050915] py-1 px-3 rounded-md border border-[#1E2638] flex items-center justify-between text-[11px] text-[#A1A1AA]">
              <div className="flex items-center gap-1.5 truncate">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="truncate text-white">https://{project.domain}</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-bold shrink-0">SSL</span>
            </div>

            <div className="text-[10px] text-[#71717A] hidden sm:block">
              {project.category}
            </div>
          </div>

          {/* Full-bleed Screenshot Viewport */}
          <div className="relative w-full aspect-[16/9] sm:aspect-[16/9] bg-[#050915] overflow-hidden group">
            <Image
              src={project.screenshot}
              alt={`${project.name} website preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
            {/* Subtle inner top-to-bottom vignette */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#050915]/60 via-transparent to-transparent opacity-40" />
          </div>

          {/* Clean Minimal Caption Strip */}
          <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm tracking-tight">{project.name}</h4>
                <span className="text-[11px] text-[#BAF247] font-mono">&bull; {project.category}</span>
              </div>
              <p className="text-[11px] text-[#A1A1AA]">{project.tagline}</p>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-[#71717A]">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDigitalShowcase;
export const RealEstateConceptPreview = WebDigitalShowcase;
