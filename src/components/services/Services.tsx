"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Layers,
  Sparkles,
  Receipt,
  FileText,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES, ServiceCategory } from "./types";
import InvoiceSystemInterface from "./visuals/InvoiceSystemInterface";
import ZentraWebInterface from "./visuals/ZentraWebInterface";
import EcommerceInterface from "./visuals/EcommerceInterface";
import AutomationPipelineInterface from "./visuals/AutomationPipelineInterface";
import BolmeetAiInterface from "./visuals/BolmeetAiInterface";
import EducationSystemInterface from "./visuals/EducationSystemInterface";
import { cn } from "@/lib/utils";

const INTERFACE_MAP: Record<string, React.FC> = {
  invoice: InvoiceSystemInterface,
  zentra: ZentraWebInterface,
  ecommerce: EcommerceInterface,
  automation: AutomationPipelineInterface,
  bolmeet: BolmeetAiInterface,
  education: EducationSystemInterface,
};

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[1].id); // Defaults to Custom Software (Invoice System) or first
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICE_CATEGORIES[1].id);
  const [viewMode, setViewMode] = useState<"service" | "featuredInvoice">("service");
  const shouldReduceMotion = useReducedMotion();

  // Listen to hash changes (e.g. from navbar dropdown or footer links)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const matched = SERVICE_CATEGORIES.find(
        (c) => c.id === hash || c.slugs.includes(hash)
      );
      if (matched) {
        setActiveTab(matched.id);
        setExpandedMobileId(matched.id);
        setViewMode("service");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const activeCategory =
    SERVICE_CATEGORIES.find((c) => c.id === activeTab) || SERVICE_CATEGORIES[0];

  // If the active category is custom-software, it naturally uses the invoice interface
  const isInvoiceCategory = activeCategory.id === "custom-software";
  const ActiveVisualComponent =
    !isInvoiceCategory && viewMode === "featuredInvoice"
      ? InvoiceSystemInterface
      : INTERFACE_MAP[activeCategory.featuredInterfaceId] || InvoiceSystemInterface;

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor Aliases */}
      <span id="what-we-do" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="our-services" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Controlled Lime Ambient Glow */}
      <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-20" />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            1. SOPHISTICATED EDITORIAL INTRODUCTION
           ========================================================================= */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              WHAT WE DO / OUR SERVICES
            </span>
            <span className="text-[#1E2638] font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              06 CORE DISCIPLINES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.08]">
            Technology built around the way your{" "}
            <span className="text-[#BAF247]">business works.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            From digital experiences to intelligent business systems, we build practical technology that helps organisations operate better and grow with confidence.
          </p>
        </div>

        {/* =========================================================================
            2. DESKTOP ASYMMETRIC SPLIT LAYOUT (>= 1024px)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-start">
          {/* Left Column (5 Cols): Editorial Services Navigation List */}
          <div
            className="col-span-5 space-y-2.5"
            role="tablist"
            aria-label="BOLXOLVE Service Categories"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = category.id === activeTab;
              return (
                <div
                  key={category.id}
                  id={category.slugs[0]}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${category.id}`}
                  onClick={() => {
                    setActiveTab(category.id);
                    setViewMode("service");
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveTab(category.id);
                      setViewMode("service");
                    }
                  }}
                  className={cn(
                    "group relative p-5 rounded-xl border transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247]",
                    isActive
                      ? "bg-[#101522] border-[#BAF247]/50 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
                      : "bg-[#0B0F1C]/70 border-[#1E2638] hover:bg-[#101522]/60 hover:border-[#1E2638]/90"
                  )}
                >
                  {/* Invisible anchor targets for navbar and footer hash jumps */}
                  {category.slugs.map((slug) => (
                    <span
                      key={slug}
                      id={slug}
                      className="relative -top-28 pointer-events-none block h-0 w-0"
                    />
                  ))}

                  {/* Clean Accent Bar on Active */}
                  <div
                    className={cn(
                      "absolute left-0 top-3 bottom-3 w-1 rounded-r transition-all duration-200",
                      isActive ? "bg-[#BAF247]" : "bg-transparent group-hover:bg-[#1E2638]"
                    )}
                  />

                  {/* Number & Category Eyebrow */}
                  <div className="flex items-center justify-between mb-1.5 pl-1.5">
                    <span
                      className={cn(
                        "text-xs font-mono font-bold tracking-widest transition-colors",
                        isActive ? "text-[#BAF247]" : "text-[#71717A] group-hover:text-[#A1A1AA]"
                      )}
                    >
                      {category.number} // {category.categoryLabel}
                    </span>
                    <ArrowRight
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-200",
                        isActive
                          ? "text-[#BAF247] translate-x-0"
                          : "text-[#71717A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-lg font-bold tracking-tight pl-1.5 transition-colors mb-1",
                      isActive ? "text-white" : "text-[#D4D4D8] group-hover:text-white"
                    )}
                  >
                    {category.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#71717A] leading-relaxed line-clamp-2 pl-1.5 font-normal">
                    {category.shortDescription}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Detailed Service Presentation Stage */}
          <div className="col-span-7 sticky top-28 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`service-panel-${activeCategory.id}`}
                role="tabpanel"
                aria-label={activeCategory.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-8 rounded-2xl bg-[#101522] border border-[#1E2638] shadow-[0_16px_48px_rgba(0,0,0,0.6)] space-y-6"
              >
                {/* Header Stage */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-[#BAF247] font-bold">{activeCategory.number}</span>
                      <span className="text-[#1E2638]">/</span>
                      <span className="text-[#71717A] uppercase tracking-wider">
                        {activeCategory.categoryLabel}
                      </span>
                    </div>

                    <span className="text-[11px] text-[#A1A1AA] font-mono">
                      ENGINEERED BY BOLXOLVE
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    {activeCategory.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed font-normal">
                    {activeCategory.description}
                  </p>
                </div>

                {/* Scope & Engineered Deliverables (Clean 2x2 Grid) */}
                <div className="space-y-2.5 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                    CORE DELIVERABLES &amp; CAPABILITIES
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCategory.deliverables.map((item) => (
                      <div
                        key={item}
                        className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between group hover:border-[#BAF247]/30 transition-colors"
                      >
                        <span className="text-xs font-medium text-white group-hover:text-[#BAF247] transition-colors truncate pr-2">
                          {item}
                        </span>
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Action & Solution Route Controls */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-[#1E2638]">
                  <Button
                    variant="primary"
                    size="md"
                    href="#contact"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire about {activeCategory.title.split("&")[0].trim()}
                  </Button>

                  {activeCategory.solutionRoute && (
                    <Link
                      href={activeCategory.solutionRoute}
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A1A1AA] hover:text-[#BAF247] transition-colors group"
                    >
                      <span>{activeCategory.solutionLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  )}
                </div>

                {/* =========================================================================
                    FEATURED SOFTWARE INTERFACE VIEWPORT
                   ========================================================================= */}
                <div className="pt-4 border-t border-[#1E2638] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[10px] uppercase tracking-wider text-[#71717A] flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#BAF247]" />
                      REALISTIC SOFTWARE INTERFACE DEMONSTRATION
                    </span>

                    {/* View Switcher: allows inspecting the Featured Invoice System from any category */}
                    {!isInvoiceCategory && (
                      <div className="inline-flex items-center gap-1 p-0.5 rounded-md bg-[#050915] border border-[#1E2638] text-[10px]">
                        <button
                          type="button"
                          onClick={() => setViewMode("service")}
                          className={cn(
                            "px-2 py-0.5 rounded transition-colors",
                            viewMode === "service"
                              ? "bg-[#101522] text-[#BAF247] font-semibold"
                              : "text-[#71717A] hover:text-white"
                          )}
                        >
                          Domain UI
                        </button>
                        <button
                          type="button"
                          onClick={() => setViewMode("featuredInvoice")}
                          className={cn(
                            "px-2 py-0.5 rounded transition-colors flex items-center gap-1",
                            viewMode === "featuredInvoice"
                              ? "bg-[#101522] text-[#BAF247] font-semibold"
                              : "text-[#71717A] hover:text-white"
                          )}
                        >
                          <Receipt className="w-3 h-3" />
                          Featured Invoice System
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Render the Active Visual Component */}
                  <div className="relative">
                    <ActiveVisualComponent />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE & TABLET EXPANDABLE DOSSIER (< 1024px)
           ========================================================================= */}
        <div className="lg:hidden space-y-4">
          {SERVICE_CATEGORIES.map((category) => {
            const isExpanded = expandedMobileId === category.id;
            const CategoryVisualComponent =
              INTERFACE_MAP[category.featuredInterfaceId] || InvoiceSystemInterface;

            return (
              <div
                key={category.id}
                className="rounded-xl bg-[#101522] border border-[#1E2638] overflow-hidden transition-all duration-200 shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
              >
                {/* Mobile Anchor jumps */}
                {category.slugs.map((slug) => (
                  <span
                    key={slug}
                    id={`m-${slug}`}
                    className="relative -top-24 pointer-events-none block h-0 w-0"
                  />
                ))}

                {/* Collapsible Header */}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileId(isExpanded ? null : category.id)
                  }
                  className="w-full p-5 text-left flex items-start justify-between gap-4 outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247]"
                  aria-expanded={isExpanded}
                  aria-controls={`mobile-panel-${category.id}`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#BAF247]">
                      <span>{category.number}</span>
                      <span className="text-[#1E2638]">/</span>
                      <span className="text-[#71717A] uppercase tracking-wider">
                        {category.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {category.shortDescription}
                    </p>
                  </div>

                  <div className="p-2 rounded-lg bg-[#050915] border border-[#1E2638] text-[#71717A] shrink-0 mt-1">
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isExpanded && "rotate-180 text-[#BAF247]"
                      )}
                    />
                  </div>
                </button>

                {/* Expandable Body */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`mobile-panel-${category.id}`}
                      initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="px-5 pb-6 space-y-5 border-t border-[#1E2638]/70"
                    >
                      {/* Detailed narrative */}
                      <div className="pt-4 space-y-2">
                        <p className="text-sm text-[#D4D4D8] leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          DELIVERABLES &amp; CAPABILITIES
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {category.deliverables.map((item) => (
                            <div
                              key={item}
                              className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between"
                            >
                              <span className="text-xs font-medium text-white truncate pr-2">
                                {item}
                              </span>
                              <Check className="w-3 h-3 text-[#BAF247] shrink-0" />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Software Interface Preview */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          SOFTWARE INTERFACE DEMONSTRATION
                        </span>
                        <div className="overflow-x-auto">
                          <CategoryVisualComponent />
                        </div>
                      </div>

                      {/* CTAs */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                        <Button
                          variant="primary"
                          size="sm"
                          href="#contact"
                          className="w-full sm:w-auto justify-center"
                          iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                          Inquire about {category.title.split("&")[0].trim()}
                        </Button>

                        {category.solutionRoute && (
                          <Link
                            href={category.solutionRoute}
                            className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-[#BAF247] hover:underline py-2"
                          >
                            <span>{category.solutionLabel}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Services;
