"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronDown, Check, Lightbulb, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SERVICE_CATEGORIES, ServiceCategory } from "./types";
import RealEstateConceptPreview from "./visuals/RealEstateConceptPreview";
import RestaurantSolutionPreview from "./visuals/RestaurantSolutionPreview";
import EcommerceConceptPreview from "./visuals/EcommerceConceptPreview";
import OrderAutomationConceptPreview from "./visuals/OrderAutomationConceptPreview";
import AiAssistantConceptPreview from "./visuals/AiAssistantConceptPreview";
import SchoolManagementConceptPreview from "./visuals/SchoolManagementConceptPreview";
import { cn } from "@/lib/utils";

const CONCEPT_PREVIEWS: Record<string, React.FC> = {
  "web-digital": RealEstateConceptPreview,
  "custom-software": RestaurantSolutionPreview,
  ecommerce: EcommerceConceptPreview,
  automation: OrderAutomationConceptPreview,
  "ai-solutions": AiAssistantConceptPreview,
  "education-solutions": SchoolManagementConceptPreview,
};

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(SERVICE_CATEGORIES[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICE_CATEGORIES[0].id);
  const shouldReduceMotion = useReducedMotion();

  // Function to activate service by slug or id and scroll into view
  const activateService = (slugOrId: string) => {
    const clean = slugOrId.replace("#", "").trim();
    if (!clean) return;

    const matched = SERVICE_CATEGORIES.find(
      (c) => c.id === clean || c.slugs.includes(clean)
    );
    if (matched) {
      setActiveTab(matched.id);
      setExpandedMobileId(matched.id);

      requestAnimationFrame(() => {
        const mobileTarget = document.getElementById(`mobile-card-${matched.id}`);
        const section = document.getElementById("services");

        if (window.innerWidth < 1024 && mobileTarget) {
          mobileTarget.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  };

  // Listen to hash changes and custom selection events (e.g. from navbar dropdown or footer links)
  useEffect(() => {
    if (window.location.hash) {
      activateService(window.location.hash);
    }

    const handleHash = () => {
      if (window.location.hash) {
        activateService(window.location.hash);
      }
    };

    const handleCustomEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ slug?: string }>;
      if (customEvent.detail?.slug) {
        activateService(customEvent.detail.slug);
      }
    };

    window.addEventListener("hashchange", handleHash);
    window.addEventListener("bolxolve:select-service", handleCustomEvent);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      window.removeEventListener("bolxolve:select-service", handleCustomEvent);
    };
  }, []);

  const activeCategory =
    SERVICE_CATEGORIES.find((c) => c.id === activeTab) || SERVICE_CATEGORIES[0];
  const ActiveVisual = CONCEPT_PREVIEWS[activeCategory.id] || RealEstateConceptPreview;

  return (
    <section
      id="services"
      className="relative w-full py-24 sm:py-32 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor Aliases */}
      <span id="what-we-do" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="our-services" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Atmospheric Soft Ambient Lighting — Living Breathing Pulse */}
      <motion.div
        animate={shouldReduceMotion ? { opacity: 0.2 } : {
          opacity: [0.14, 0.24, 0.14],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-[10%] w-[620px] h-[620px] rounded-full bg-radial-hero pointer-events-none opacity-20 blur-3xl"
      />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            1. SECTION INTRODUCTION
           ========================================================================= */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div>
            <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.22em] uppercase text-[#BAF247]">
              WHAT WE DO  OUR SERVICES
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.85rem] font-bold tracking-[-0.04em] text-white leading-[1.04] max-w-3xl">
            Technology built around the way your{" "}
            <span className="text-[#BAF247] font-bold inline">business works.</span>
          </h2>

          {/* Supporting Description */}
          <p className="text-base sm:text-lg md:text-[1.125rem] text-[#A1A1AA] leading-relaxed max-w-2xl font-normal pt-1">
            From websites and online stores to custom business systems and intelligent automation, we build practical technology that makes everyday business operations easier.
          </p>
        </div>

        {/* =========================================================================
            2. DESKTOP ASYMMETRIC EDITORIAL LAYOUT (>= 1024px)
           ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Left Column (5 Cols): Vertical Service Category List */}
          <div
            className="col-span-5 border-t border-b border-[#1E2638] divide-y divide-[#1E2638]"
            role="tablist"
            aria-label="BOLXOLVE Service Categories"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = category.id === activeTab;
              return (
                <div
                  key={category.id}
                  id={category.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isActive}
                  aria-controls={`service-panel-${category.id}`}
                  onClick={() => setActiveTab(category.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveTab(category.id);
                    }
                  }}
                  className={cn(
                    "group py-5 sm:py-6 px-3 sm:px-4 cursor-pointer transition-all duration-200 select-none outline-none relative",
                    isActive ? "bg-[#101522]/40" : "hover:bg-[#101522]/15"
                  )}
                >
                  {/* Invisible anchor targets for navbar and footer hash jumps */}
                  {category.slugs
                    .filter((slug) => slug !== category.id)
                    .map((slug) => (
                      <span
                        key={slug}
                        id={slug}
                        className="relative -top-28 pointer-events-none block h-0 w-0"
                      />
                    ))}

                  {/* Clean Gliding Electric Lime Left Line on Active */}
                  {isActive && (
                    <motion.span
                      layoutId="active-service-tab-indicator"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                      className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#BAF247]"
                    />
                  )}

                  {/* Number & Category Eyebrow */}
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "text-xs font-mono tracking-widest transition-colors",
                        isActive ? "text-[#BAF247] font-bold" : "text-[#71717A] group-hover:text-white"
                      )}
                    >
                      {category.number} {category.categoryLabel}
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
                </div>
              );
            })}
          </div>

          {/* Right Column (7 Cols): Detailed Service Presentation */}
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
                {/* 1. Category Number, Title & Simple Everyday Description */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
                    <div className="flex items-center space-x-2.5">
                      <span className="text-[#BAF247] font-bold">{activeCategory.number}</span>
                      <span className="text-[#71717A] uppercase tracking-wider">
                        SERVICE CATEGORY
                      </span>
                    </div>

                    {activeCategory.note && (
                      <span className="text-[11px] text-[#BAF247] font-mono">
                        {activeCategory.note}
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                    {activeCategory.title}
                  </h3>

                  <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed font-normal">
                    {activeCategory.description}
                  </p>
                </div>

                {/* 2. Deliverables List */}
                <div className="py-4 border-y border-[#1E2638]/70 space-y-3">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#71717A] block font-medium">
                    What We Deliver
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-xs font-mono text-[#D4D4D8]">
                    {activeCategory.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                        <span className="text-[#D4D4D8]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. Practical Example Callout Box */}
                <SpotlightCard className="p-4 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#BAF247] font-semibold uppercase tracking-wider">
                    <Lightbulb className="w-3.5 h-3.5 text-[#BAF247]" />
                    <span>Practical Example</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {activeCategory.example}
                  </p>
                </SpotlightCard>

                {/* 4. Relevant Demonstration Concept Preview */}
                <div className="pt-2">
                  <SpotlightCard className="p-0 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                    <ActiveVisual />
                  </SpotlightCard>
                </div>

                {/* 5. Clear Inquiry CTA Button */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      variant="primary"
                      size="md"
                      href="/#contact"
                      iconRight={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                      className="shadow-[0_4px_24px_rgba(186,242,71,0.22)]"
                    >
                      Inquire about {activeCategory.title.split("&")[0].trim()}
                    </Button>
                  </div>

                  <span className="text-xs font-mono text-[#71717A]">
                    Everyday Solutions Built Around Your Business
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE & TABLET EXPANDABLE PANELS (< 1024px)
           ========================================================================= */}
        <div className="lg:hidden border-t border-b border-[#1E2638] divide-y divide-[#1E2638]">
          {SERVICE_CATEGORIES.map((category) => {
            const isExpanded = expandedMobileId === category.id;
            const CategoryVisual = CONCEPT_PREVIEWS[category.id] || RealEstateConceptPreview;

            return (
              <div key={category.id} id={`mobile-card-${category.id}`} className="transition-colors duration-200">
                {/* Mobile Anchor jumps */}
                {category.slugs.map((slug) => (
                  <span
                    key={slug}
                    id={`m-${slug}`}
                    className="relative -top-24 pointer-events-none block h-0 w-0"
                  />
                ))}

                {/* Collapsible Row Header */}
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
                      <span className="text-[#71717A] uppercase tracking-wider">
                        {category.categoryLabel}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
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

                {/* Expanded Content Panel */}
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
                      {/* Simple Everyday Description */}
                      <p className="text-sm text-[#D4D4D8] leading-relaxed pt-2">
                        {category.description}
                      </p>

                      {/* Deliverables List */}
                      <div className="py-3 border-y border-[#1E2638] space-y-2">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          What We Deliver
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

                      {/* Practical Example */}
                      <div className="p-3.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-[#BAF247] font-semibold block">
                          Practical Example
                        </span>
                        <p className="text-xs text-[#A1A1AA] leading-relaxed">
                          {category.example}
                        </p>
                      </div>

                      {/* Relevant Concept Demonstration */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block font-medium">
                          Solution Architecture
                        </span>
                        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden overflow-x-auto">
                          <CategoryVisual />
                        </div>
                      </div>

                      {/* Inquiry CTA */}
                      <div className="pt-2 space-y-2">
                        <Button
                          variant="primary"
                          size="sm"
                          href="/#contact"
                          className="w-full justify-center"
                          iconRight={<ArrowRight className="w-3.5 h-3.5" />}
                        >
                          Inquire about {category.title.split("&")[0].trim()}
                        </Button>
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
