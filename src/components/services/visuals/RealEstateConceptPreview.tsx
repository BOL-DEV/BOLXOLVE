"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
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
}

const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: "hrh",
    name: "HRH — Healing, Rhythm & Highlife",
    category: "Cultural Editorial & Sound",
    url: "https://hrhsession.vercel.app/",
    domain: "hrhsession.vercel.app",
    screenshot: "/showcase/hrh-screenshot.jpg",
    tagline: "A cultural experience blending therapeutic conversations and highlife music.",
  },
  {
    id: "dikonut",
    name: "Dikonut Limited",
    category: "Construction & Engineering Flagship",
    url: "https://dikonut.vercel.app/",
    domain: "dikonut.vercel.app",
    screenshot: "/showcase/dikonut-screenshot.png",
    tagline: "Construction, engineering and project management solutions across the built environment.",
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

      {/* Main Visual Showcase (Pure Screenshot Viewport) */}
      <div className="p-3 sm:p-4 bg-[#070B16]">
        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl">
          {/* Full-bleed Screenshot Viewport */}
          <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden group">
            <Image
              src={project.screenshot}
              alt={`${project.name} website preview`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

          {/* Clean Minimal Caption Strip without tech tags */}
          <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <div className="flex flex-wrap items-center gap-2">
                <h4 className="font-bold text-white text-sm tracking-tight">{project.name}</h4>
                <span className="text-[11px] text-[#BAF247] font-mono">{project.category}</span>
              </div>
              <p className="text-[11px] text-[#A1A1AA]">{project.tagline}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDigitalShowcase;
export const RealEstateConceptPreview = WebDigitalShowcase;
