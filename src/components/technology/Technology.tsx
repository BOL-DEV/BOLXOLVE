"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ENGINEERING_PRINCIPLES } from "./types";

export const Technology: React.FC = () => {
  return (
    <section
      id="technology"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638]"
    >
      {/* Anchor aliases for navigation */}
      <span id="how-we-work" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="engineering" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-15 max-w-full" />

      <Container size="wide" className="relative z-10">
        {/* =========================================================================
            SECTION INTRODUCTION — EDITORIAL & SPACIOUS
           ========================================================================= */}
        <ScrollReveal className="max-w-4xl mb-16 sm:mb-20 space-y-6">
          {/* Eyebrow */}
          <div>
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              TECHNOLOGY &amp; ENGINEERING
            </span>
          </div>

          {/* Main Heading — Balanced, given room to breathe */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.15]">
            Technology should solve problems,{" "}
            <span className="text-[#BAF247]">not create new ones.</span>
          </h2>

          {/* Supporting Description */}
          <p className="max-w-2xl text-base sm:text-lg text-[#A1A1AA] leading-relaxed font-normal">
            We combine thoughtful engineering, modern technologies and practical problem-solving to build digital solutions that work today and can grow with your business.
          </p>
        </ScrollReveal>

        {/* =========================================================================
            THREE ENGINEERING PRINCIPLES — STICKY STACKING OVERLAPPING SLIDER
            01 sticks near the top; as user scrolls, 02 overlaps on top of 01,
            then 03 overlaps on 02 until the section is complete, then all scroll
            out of view together.
            Clean editorial style: no outer box border, no shadow, no divider line.
           ========================================================================= */}
        <div className="relative pb-12 sm:pb-20">
          {ENGINEERING_PRINCIPLES.map((principle, index) => {
            const isLast = index === ENGINEERING_PRINCIPLES.length - 1;

            return (
              <div
                key={principle.id}
                id={principle.id}
                style={{
                  top: "calc(5rem + 1.5rem)",
                  zIndex: 10 + index,
                }}
                className={`sticky bg-[#050915] py-10 sm:py-16 transition-all duration-300 ${
                  isLast ? "mb-0" : "mb-28 sm:mb-40 lg:mb-52"
                }`}
              >
                {/* Principle Content Grid — Clean original editorial typography */}
                <article className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Left Column (5 Cols): Prominent Number & Title */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-mono font-light text-[#BAF247] tracking-tight block">
                      {principle.number}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                      {principle.title}
                    </h3>
                  </div>

                  {/* Right Column (7 Cols): Core Philosophy & In Practice Example */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-base sm:text-lg text-[#D4D4D8] leading-relaxed font-normal">
                      {principle.description}
                    </p>

                    {/* Practical Example Box */}
                    <div className="p-5 sm:p-6 rounded-xl bg-[#080D1A] border border-[#1E2638] space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-[#BAF247] font-semibold tracking-wider uppercase">
                          In Practice
                        </span>
                        {principle.referenceRoute && (
                          <Link
                            href={principle.referenceRoute}
                            className="inline-flex items-center gap-1.5 text-[#71717A] hover:text-[#BAF247] transition-colors"
                          >
                            <span>{principle.referenceLabel}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                        {principle.practicalExample}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Technology;
