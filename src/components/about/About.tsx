"use client";

import React from "react";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { COMPANY_VALUES } from "./types";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Anchor aliases for navigation and external links */}
      <span id="company" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="who-we-are" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-15" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-radial-hero pointer-events-none opacity-10" />

      <Container size="wide" className="relative z-10 space-y-20 sm:space-y-28 lg:space-y-36">
        {/* =========================================================================
            PART A — COMPANY INTRODUCTION
           ========================================================================= */}
        <ScrollReveal className="max-w-4xl space-y-6">
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              ABOUT BOLXOLVE
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            We build technology around the way{" "}
            <span className="text-[#BAF247]">the world works.</span>
          </h2>

          {/* Primary Company Introduction */}
          <p className="max-w-3xl text-base sm:text-lg lg:text-xl text-[#D4D4D8] leading-relaxed font-normal pt-2">
            At BOLXOLVE, we believe good technology starts with understanding people, businesses and the challenges they face. We turn those challenges into practical digital solutions designed to make everyday operations better.
          </p>
        </ScrollReveal>

        {/* =========================================================================
            PART B — IDENTITY AND PURPOSE (Split Layout: Identity vs. Mission & Vision)
           ========================================================================= */}
        <ScrollReveal className="pt-12 sm:pt-16 border-t border-[#1E2638]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column (5 Cols): Our Identity */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold block">
                OUR IDENTITY
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Technology with a purpose.
              </h3>
              <div className="space-y-4 text-base text-[#A1A1AA] leading-relaxed pt-2">
                <p>
                  BOLXOLVE is a technology company focused on building digital products and software solutions that help businesses and organisations work better.
                </p>
                <p>
                  From business management systems to digital platforms and intelligent applications, we approach every challenge with the goal of creating technology that is useful, practical and built around real needs.
                </p>
              </div>
            </div>

            {/* Right Column (7 Cols): Mission & Vision Statements */}
            <div className="lg:col-span-7 space-y-6">
              {/* Mission Statement */}
              <SpotlightCard className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold">
                    OUR MISSION
                  </span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  &ldquo;To create practical and accessible technology that helps businesses and organisations solve everyday challenges, improve how they operate and make better use of digital tools.&rdquo;
                </p>
              </SpotlightCard>

              {/* Vision Statement */}
              <SpotlightCard className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold">
                    OUR VISION
                  </span>
                </div>
                <p className="text-base sm:text-lg text-white font-medium leading-relaxed">
                  &ldquo;To become a technology company known for building useful innovations that improve how people, businesses and industries work.&rdquo;
                </p>
              </SpotlightCard>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================================================
            PART C — WHAT GUIDES US (Company Values)
           ========================================================================= */}
        <ScrollReveal className="pt-12 sm:pt-16 border-t border-[#1E2638] space-y-10 sm:space-y-12">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#BAF247] font-semibold block">
              WHAT GUIDES US
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              The beliefs behind how we work.
            </h3>
          </div>

          {/* Three Values Editorial Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {COMPANY_VALUES.map((value, idx) => (
              <ScrollReveal key={value.number} delay={idx * 0.1} className="space-y-3">
                <span className="text-2xl sm:text-3xl font-mono font-light text-[#BAF247] tracking-tight block">
                  {value.number}
                </span>
                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  {value.title}
                </h4>
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {value.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        {/* =========================================================================
            PART D — CLOSING STATEMENT (Natural Transition into Inquiries / Contact)
           ========================================================================= */}
        <ScrollReveal className="pt-12 sm:pt-16 border-t border-[#1E2638]">
          <div className="max-w-3xl space-y-4">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
              &ldquo;We believe the right technology can make a meaningful difference in how work gets done.&rdquo;
            </blockquote>
            <p className="text-xs font-mono uppercase tracking-wider text-[#71717A] pt-1">
              BOLXOLVE LTD  Digital Solutions &amp; Software Engineering
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};

export default About;

