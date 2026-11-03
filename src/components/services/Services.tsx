"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Check, ArrowRight, Sparkles, Terminal } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { CAPABILITIES, Capability } from "./types";
import WebExperienceDiagram from "./schematics/WebExperienceDiagram";
import EcommerceDiagram from "./schematics/EcommerceDiagram";
import CustomSoftwareDiagram from "./schematics/CustomSoftwareDiagram";
import AutomationDiagram from "./schematics/AutomationDiagram";
import AiTechDiagram from "./schematics/AiTechDiagram";
import { cn } from "@/lib/utils";

const SCHEMATIC_COMPONENTS: Record<string, React.FC> = {
  "web-digital": WebExperienceDiagram,
  ecommerce: EcommerceDiagram,
  "custom-software": CustomSoftwareDiagram,
  automation: AutomationDiagram,
  "ai-emerging": AiTechDiagram,
};

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(CAPABILITIES[0].id);
  const shouldReduceMotion = useReducedMotion();

  // Listen to hash changes (e.g., if user clicked a service link from Navbar)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const matched = CAPABILITIES.find(
        (c) => c.id === hash || c.slugs.includes(hash)
      );
      if (matched) {
        setActiveTab(matched.id);
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeCapability =
    CAPABILITIES.find((c) => c.id === activeTab) || CAPABILITIES[0];
  const ActiveSchematic = SCHEMATIC_COMPONENTS[activeCapability.id];

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Controlled Lime Ambient Glow Behind Stage */}
      <div className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-radial-hero pointer-events-none opacity-40" />

      <Container size="wide" className="relative z-10">
        {/* Section Introduction */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              WHAT WE DO
            </span>
            <span className="text-[#1E2638] font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              05 CORE CAPABILITIES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Technology built around the way your{" "}
            <span className="text-[#BAF247]">business works.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            From digital experiences to intelligent business systems, we engineer solutions that help organisations work smarter, operate efficiently and grow.
          </p>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (>= 1024px): Asymmetric Editorial Interactive Station
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
          {/* Left Column (5 Cols): Editorial Roster / Index */}
          <div className="col-span-5 space-y-3" role="tablist" aria-label="BOLXOLVE Core Capabilities">
            {CAPABILITIES.map((cap) => {
              const isActive = cap.id === activeTab;
              return (
                <div
                  key={cap.id}
                  id={cap.slugs[0]}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`panel-${cap.id}`}
                  onClick={() => setActiveTab(cap.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveTab(cap.id);
                    }
                  }}
                  className={cn(
                    "group relative p-6 rounded-xl border transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#BAF247]",
                    isActive
                      ? "bg-[#101522] border-[#BAF247]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
                      : "bg-[#101522]/40 border-[#1E2638] hover:bg-[#101522]/80 hover:border-[#1E2638]/90"
                  )}
                >
                  {/* Invisible anchor targets for navbar slugs */}
                  {cap.slugs.map((slug) => (
                    <span key={slug} id={slug} className="relative -top-28 pointer-events-none block h-0 w-0" />
                  ))}

                  {/* Active Indicator Bar on Left */}
                  <div
                    className={cn(
                      "absolute left-0 top-6 bottom-6 w-1 rounded-r transition-all duration-200",
                      isActive ? "bg-[#BAF247]" : "bg-transparent group-hover:bg-[#1E2638]"
                    )}
                  />

                  {/* Header Row: Number + Tag */}
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        "text-xs font-mono tracking-widest font-bold transition-colors",
                        isActive ? "text-[#BAF247]" : "text-[#71717A] group-hover:text-white"
                      )}
                    >
                      {cap.number} // CAPABILITY
                    </span>
                    <span className="text-[10px] font-mono tracking-wider text-[#71717A] uppercase">
                      {cap.tag}
                    </span>
                  </div>

                  {/* Capability Title */}
                  <h3
                    className={cn(
                      "text-xl font-bold tracking-tight transition-colors mb-2",
                      isActive ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
                    )}
                  >
                    {cap.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed line-clamp-2">
                    {cap.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Architectural Capability Stage & Schematic Viewport */}
          <div className="col-span-7 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.id}
                id={`panel-${activeCapability.id}`}
                role="tabpanel"
                aria-label={activeCapability.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 lg:p-10 rounded-2xl bg-[#101522] border border-[#1E2638] shadow-[0_16px_48px_rgba(0,0,0,0.6)] space-y-8 relative overflow-hidden"
              >
                {/* Stage Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-mono text-[#BAF247] font-bold">
                        {activeCapability.number}
                      </span>
                      <span className="text-sm font-mono tracking-widest text-[#71717A] uppercase">
                        {activeCapability.tag}
                      </span>
                    </div>
                    <Badge variant="status" size="sm" dot>
                      ACTIVE DOMAIN
                    </Badge>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {activeCapability.title}
                  </h3>

                  <p className="text-base text-[#A1A1AA] leading-relaxed max-w-2xl">
                    {activeCapability.description}
                  </p>
                </div>

                {/* Custom Bespoke Architectural Schematic */}
                <div className="relative">
                  <ActiveSchematic />
                </div>

                {/* Services Grid (4 Discrete Sub-Services) */}
                <div className="space-y-3 pt-2 border-t border-[#1E2638]">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#71717A] block">
                    ENGINEERED DELIVERABLES &amp; SCOPE
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    {activeCapability.services.map((svc) => (
                      <div
                        key={svc}
                        className="p-3.5 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between group hover:border-[#BAF247]/40 transition-colors"
                      >
                        <span className="text-xs sm:text-sm font-medium text-white group-hover:text-[#BAF247] transition-colors">
                          {svc}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] group-hover:text-[#BAF247] transition-colors shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stage Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#71717A]">
                    BOLXOLVE SPECIFICATION // READY FOR INQUIRY
                  </span>
                  <Button
                    variant="link"
                    href="#contact"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                    className="text-xs sm:text-sm"
                  >
                    Inquire about {activeCapability.title}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            MOBILE & TABLET LAYOUT (< 1024px): Architectural Stacked Dossier
           ========================================================================= */}
        <div className="lg:hidden space-y-8">
          {CAPABILITIES.map((cap) => {
            const SchematicComponent = SCHEMATIC_COMPONENTS[cap.id];
            return (
              <div
                key={cap.id}
                className="p-6 sm:p-8 rounded-xl bg-[#101522] border border-[#1E2638] space-y-6 shadow-[0_12px_32px_rgba(0,0,0,0.5)] relative"
              >
                {/* Mobile Anchor targets */}
                {cap.slugs.map((slug) => (
                  <span key={slug} id={`m-${slug}`} className="relative -top-24 pointer-events-none block h-0 w-0" />
                ))}

                {/* Header Row */}
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-[#BAF247] font-bold">
                      {cap.number}
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#71717A] uppercase">
                      {cap.tag}
                    </span>
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Bespoke Schematic Diagram */}
                <div className="pt-2">
                  <SchematicComponent />
                </div>

                {/* The 4 Discrete Services */}
                <div className="space-y-3 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    DELIVERABLES &amp; SERVICES
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {cap.services.map((svc) => (
                      <div
                        key={svc}
                        className="p-3 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between"
                      >
                        <span className="text-xs font-medium text-white">
                          {svc}
                        </span>
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Link to Contact */}
                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="#contact"
                    className="w-full justify-center"
                    iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Inquire about {cap.title}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
