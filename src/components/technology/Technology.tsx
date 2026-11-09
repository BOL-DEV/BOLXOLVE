"use client";

import React from "react";
import { ArrowRight, Check, Sparkles, Wrench } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ENGINEERING_PRINCIPLES, VERIFIED_TOOLS } from "./types";
import PurposeFlowVisual from "./visuals/PurposeFlowVisual";
import ConnectedSystemsVisual from "./visuals/ConnectedSystemsVisual";
import ScalableArchitectureVisual from "./visuals/ScalableArchitectureVisual";

export const Technology: React.FC = () => {
  const [p1, p2, p3] = ENGINEERING_PRINCIPLES;

  return (
    <section
      id="technology"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor aliases for navigation and external links */}
      <span id="how-we-work" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="engineering" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Controlled Radial Ambient Lighting */}
      <div className="absolute top-1/4 right-1/4 w-[650px] h-[650px] bg-radial-hero pointer-events-none opacity-20" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-radial-hero pointer-events-none opacity-15" />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            1. SECTION INTRODUCTION
           ========================================================================= */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              TECHNOLOGY &amp; ENGINEERING
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Technology should solve problems,{" "}
            <span className="text-[#BAF247]">not create new ones.</span>
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            We combine thoughtful engineering, modern technologies and practical problem-solving to build digital solutions that work today and can grow with your business.
          </p>
        </div>

        {/* =========================================================================
            2. THREE ENGINEERING PRINCIPLES — PREMIUM EDITORIAL SHOWCASE
           ========================================================================= */}
        <div className="space-y-12 sm:space-y-16">
          {/* =======================================================================
              PRINCIPLE 01 — BUILT WITH PURPOSE
             ======================================================================= */}
          <div
            id={p1.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/30 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Content & Points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#BAF247] font-bold">
                      {p1.number} &bull; {p1.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {p1.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {p1.description}
                </p>

                {/* Supporting Points */}
                <div className="space-y-2.5 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    ENGINEERING FOCUS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                    {p1.points.map((pt) => (
                      <div
                        key={pt}
                        className="p-2.5 rounded bg-[#050915] border border-[#1E2638] flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Purpose Decision Flow Visual */}
              <div className="lg:col-span-7">
                <PurposeFlowVisual />
              </div>
            </div>
          </div>

          {/* =======================================================================
              PRINCIPLE 02 — CONNECTED SYSTEMS (Alternating Layout)
             ======================================================================= */}
          <div
            id={p2.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/30 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column on Desktop (7 Cols): Network Architecture Visual */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <ConnectedSystemsVisual />
              </div>

              {/* Right Column on Desktop (5 Cols): Editorial Content & Points */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#BAF247] font-bold">
                      {p2.number} &bull; {p2.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {p2.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {p2.description}
                </p>

                {/* Supporting Points */}
                <div className="space-y-2.5 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    INTEGRATION CAPABILITIES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                    {p2.points.map((pt) => (
                      <div
                        key={pt}
                        className="p-2.5 rounded bg-[#050915] border border-[#1E2638] flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================================
              PRINCIPLE 03 — DESIGNED TO GROW
             ======================================================================= */}
          <div
            id={p3.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/30 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Content & Points */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-[#BAF247] font-bold">
                      {p3.number} &bull; {p3.tagline}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {p3.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#D4D4D8] leading-relaxed">
                  {p3.description}
                </p>

                {/* Supporting Points */}
                <div className="space-y-2.5 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    ARCHITECTURE PILLARS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                    {p3.points.map((pt) => (
                      <div
                        key={pt}
                        className="p-2.5 rounded bg-[#050915] border border-[#1E2638] flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column (7 Cols): Layered Architecture Visual */}
              <div className="lg:col-span-7">
                <ScalableArchitectureVisual />
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. SECONDARY AREA — THE TOOLS BEHIND THE SOLUTIONS
           ========================================================================= */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-2xl bg-[#080D1A] border border-[#1E2638] space-y-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#BAF247]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold">
                PRACTICAL TOOLING
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The tools behind the solutions.
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              We select tools based on operational requirements rather than trends. Every technology in our stack is chosen for reliability, community support, and long-term maintainability.
            </p>
          </div>

          {/* Verified Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {VERIFIED_TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-2 hover:border-[#BAF247]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#71717A]">
                    {tool.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
                </div>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {tool.name}
                </h4>
                <p className="text-xs text-[#A1A1AA] leading-relaxed">
                  {tool.purpose}
                </p>
              </div>
            ))}
          </div>

          {/* Stack Transparency Disclaimer */}
          <div className="pt-4 border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#71717A]">
            <span>Technology stacks are tailored per project to fit operational requirements.</span>
            <span className="text-[#BAF247]">Documented &bull; Maintainable &bull; Pragmatic</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Technology;
