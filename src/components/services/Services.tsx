"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Layers,
  Receipt,
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
  // Default to Custom Software & Business Systems (02) which features the Invoice Management System
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[1].id);
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
    SERVICE_CATEGORIES.find((c) => c.id === activeTab) || SERVICE_CATEGORIES[1];

  const isInvoiceCategory = activeCategory.id === "custom-software";
  const ActiveVisualComponent =
    !isInvoiceCategory && viewMode === "featuredInvoice"
      ? InvoiceSystemInterface
      : INTERFACE_MAP[activeCategory.featuredInterfaceId] || InvoiceSystemInterface;

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor Aliases */}
      <span id="what-we-do" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="our-services" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Atmospheric Soft Ambient Lighting (Aligned with Hero) */}
      <div className="absolute top-1/4 right-[10%] w-[620px] h-[620px] rounded-full bg-radial-hero pointer-events-none opacity-25 blur-3xl" />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            1. EDITORIAL SECTION HEADER (In Line with Hero Typography)
           ========================================================================= */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Hero-Style Eyebrow */}
          <div className="inline-flex items-center gap-3">
            <span className="w-5 h-px bg-[#BAF247]" />
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.22em] uppercase text-[#BAF247]">
              WHAT WE DO / OUR SERVICES
            </span>
          </div>

          {/* Confident Editorial Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.85rem] font-bold tracking-[-0.04em] text-white leading-[1.04] max-w-3xl">
            Technology built around the way your{" "}
            <span className="text-[#BAF247] font-bold inline">business works.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg md:text-[1.125rem] text-[#A1A1AA] leading-relaxed max-w-2xl font-normal pt-1">
            From digital experiences to intelligent business systems, we build practical technology that helps organisations operate better and grow with confidence.
          </p>
        </div>

        {/* =========================================================================
            2. DESKTOP ASYMMETRIC EDITORIAL STAGE (>= 1024px)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Column (5 Cols): Editorial Index Directory (Zero Card Boxes!) */}
          <div
            className="col-span-5 border-t border-b border-[#1E2638] divide-y divide-[#1E2638]"
            role="tablist"
            aria-label="BOLXOLVE Service Capabilities"
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
                    "group py-5 sm:py-6 px-3 sm:px-4 cursor-pointer transition-all duration-200 select-none outline-none relative",
                    isActive ? "bg-[#101522]/30" : "hover:bg-[#101522]/15"
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

                  {/* Clean Electric Lime Left Line on Active */}
                  {isActive && (
                    <span className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#BAF247]" />
                  )}

                  {/* Number & Category Eyebrow */}
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-mono tracking-widest transition-colors",
                        isActive ? "text-[#BAF247] font-bold" : "text-[#71717A] group-hover:text-white"
                      )}
                    >
                      {category.number} // {category.categoryLabel}
                    </span>
                    <ArrowUpRight
                      className={cn(
                        "w-4 h-4 transition-all duration-200",
                        isActive
                          ? "text-[#BAF247] opacity-100 translate-x-0"
                          : "text-[#71717A] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"
                      )}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={cn(
                      "text-xl sm:text-2xl font-bold tracking-tight transition-colors mt-2",
                      isActive ? "text-white" : "text-[#A1A1AA] group-hover:text-white"
                    )}
                  >
                    {category.title}
                  </h3>

                  {/* Description reveal on active */}
                  {isActive ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.2 }}
                      className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed pt-2 font-normal"
                    >
                      {category.shortDescription}
                    </motion.p>
                  ) : (
                    <p className="text-xs text-[#71717A] leading-relaxed pt-1 line-clamp-1 font-normal hidden xl:block">
                      {category.shortDescription}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Open Architectural Stage (Zero Outer Card Nesting!) */}
          <div className="col-span-7 sticky top-24 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                id={`service-panel-${activeCategory.id}`}
                role="tabpanel"
                aria-label={activeCategory.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                {/* 1. Category Overview & Editorial Scope */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-[#BAF247] font-bold">{activeCategory.number}</span>
                      <span className="text-[#1E2638]">/</span>
                      <span className="text-[#71717A] uppercase tracking-wider">
                        {activeCategory.categoryLabel}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider">
                      SPECIFICATION // READY
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                    {activeCategory.title}
                  </h3>

                  <p className="text-base text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
                    {activeCategory.description}
                  </p>
                </div>

                {/* 2. Core Deliverables (Refined Architectural Grid with Green Micro-Bullets) */}
                <div className="py-4 border-y border-[#1E2638]/70 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] block font-medium">
                    Core Capabilities &amp; Deliverables
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs font-mono text-[#D4D4D8]">
                    {activeCategory.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                        <span className="text-[#D4D4D8] truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Primary Action & Dedicated Route Link */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
                  <Button
                    variant="primary"
                    size="md"
                    href="#contact"
                    iconRight={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                    className="shadow-[0_4px_24px_rgba(186,242,71,0.22)]"
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

                {/* 4. Single Elevated Product Window (The Software Interface Visual) */}
                <div className="pt-4 relative">
                  {/* Subtle Context Bar */}
                  <div className="flex items-center justify-between pb-3 text-xs font-mono">
                    <div className="flex items-center gap-2 text-[#71717A]">
                      <Layers className="w-3.5 h-3.5 text-[#BAF247]" />
                      <span className="text-[11px] uppercase tracking-wider text-[#A1A1AA]">
                        {isInvoiceCategory
                          ? "FEATURED SYSTEM ARCHITECTURE // INVOICE MANAGEMENT"
                          : "LIVE DOMAIN INTERFACE DEMONSTRATION"}
                      </span>
                    </div>

                    {!isInvoiceCategory && (
                      <button
                        type="button"
                        onClick={() =>
                          setViewMode(viewMode === "service" ? "featuredInvoice" : "service")
                        }
                        className="text-[11px] font-mono text-[#71717A] hover:text-[#BAF247] transition-colors flex items-center gap-1.5"
                      >
                        <Receipt className="w-3.5 h-3.5 text-[#BAF247]" />
                        <span>
                          {viewMode === "service"
                            ? "Inspect Invoice Engine →"
                            : "← Back to Domain UI"}
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Framed Hardware / Software Viewport */}
                  <div className="relative rounded-xl bg-[#080D1A] border border-[#1E2638] shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden">
                    <ActiveVisualComponent />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE & TABLET EDITORIAL EXPANSION (< 1024px)
           ========================================================================= */}
        <div className="lg:hidden border-t border-b border-[#1E2638] divide-y divide-[#1E2638]">
          {SERVICE_CATEGORIES.map((category) => {
            const isExpanded = expandedMobileId === category.id;
            const CategoryVisualComponent =
              INTERFACE_MAP[category.featuredInterfaceId] || InvoiceSystemInterface;

            return (
              <div key={category.id} className="transition-colors duration-200">
                {/* Mobile Anchor targets */}
                {category.slugs.map((slug) => (
                  <span
                    key={slug}
                    id={`m-${slug}`}
                    className="relative -top-24 pointer-events-none block h-0 w-0"
                  />
                ))}

                {/* Collapsible Row */}
                <button
                  type="button"
                  onClick={() =>
                    setExpandedMobileId(isExpanded ? null : category.id)
                  }
                  className="w-full py-5 px-3 text-left flex items-start justify-between gap-4 outline-none focus-visible:ring-1 focus-visible:ring-[#BAF247]"
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

                  <div className="p-1.5 text-[#71717A] shrink-0 mt-1">
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        isExpanded && "rotate-180 text-[#BAF247]"
                      )}
                    />
                  </div>
                </button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`mobile-panel-${category.id}`}
                      initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={shouldReduceMotion ? { opacity: 0, height: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="px-3 pb-6 space-y-5"
                    >
                      <p className="text-sm text-[#D4D4D8] leading-relaxed pt-2">
                        {category.description}
                      </p>

                      {/* Deliverables */}
                      <div className="py-3 border-y border-[#1E2638] space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          Core Capabilities &amp; Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-[#D4D4D8]">
                          {category.deliverables.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Software Viewport */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          Live System Demonstration
                        </span>
                        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden overflow-x-auto">
                          <CategoryVisualComponent />
                        </div>
                      </div>

                      {/* Actions */}
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
