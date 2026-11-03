"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Check, Sparkles, Layers } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { PROJECTS, Project } from "./types";
import ZentraPreview from "./previews/ZentraPreview";
import BolmeetPreview from "./previews/BolmeetPreview";
import ArgyrPreview from "./previews/ArgyrPreview";
import ReceiptSystemPreview from "./previews/ReceiptSystemPreview";

export const SelectedWork: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const zentra = PROJECTS[0];
  const bolmeet = PROJECTS[1];
  const argyr = PROJECTS[2];
  const receipt = PROJECTS[3];

  return (
    <section
      id="work"
      className="relative w-full py-20 sm:py-28 lg:py-36 bg-[#050915] border-b border-[#1E2638] overflow-hidden"
    >
      {/* Target anchor aliases for external/hash navigation */}
      <span id="portfolio" className="relative -top-28 pointer-events-none block h-0 w-0" />
      <span id="selected-work" className="relative -top-28 pointer-events-none block h-0 w-0" />

      {/* Subtle Understated Background Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Controlled Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-radial-hero pointer-events-none opacity-30" />

      <Container size="wide" className="relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-5">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-3">
            <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-[#BAF247]">
              SELECTED WORK / OUR PORTFOLIO
            </span>
            <span className="text-[#1E2638] font-mono text-xs">/</span>
            <span className="text-[11px] font-mono tracking-widest text-[#71717A] uppercase">
              PROVEN EXECUTION
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
            Ideas are good.{" "}
            <span className="text-[#BAF247]">Execution is better.</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed font-normal">
            A look at the digital experiences and systems we&apos;ve brought to life.
          </p>
        </div>

        {/* =========================================================================
            ASYMMETRIC EDITORIAL PORTFOLIO GRID
           ========================================================================= */}
        <div className="space-y-10 sm:space-y-12">
          {/* =======================================================================
              01. FEATURED FLAGSHIP: ZENTRA (Full Width Asymmetric Card)
             ======================================================================= */}
          <div
            id={zentra.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Information & Capabilities */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#BAF247] font-bold">
                      {zentra.number} // FEATURED BUILD
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                      {zentra.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                    Category: {zentra.category}
                  </span>

                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                    {zentra.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {zentra.description}
                </p>

                {/* Core Capabilities Chips */}
                <div className="space-y-2 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    ENGINEERED ARCHITECTURE
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {zentra.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-2 rounded bg-[#050915] border border-[#1E2638] text-xs text-white flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Inquire CTA */}
                <div className="pt-2">
                  <Button
                    variant="primary"
                    size="md"
                    href="#contact"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire About Similar Architecture
                  </Button>
                </div>
              </div>

              {/* Right Column (7 Cols): Visual Preview */}
              <div className="lg:col-span-7">
                <ZentraPreview />
              </div>
            </div>
          </div>

          {/* =======================================================================
              02 & 03. MID-GRID ASYMMETRIC PAIR: BOLMEET AI & ARGYRWORLDWIDE
             ======================================================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* 02. BOLMEET AI */}
            <div
              id={bolmeet.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                  <span className="text-xs font-mono text-[#BAF247] font-bold">
                    {bolmeet.number} // ARTIFICIAL INTELLIGENCE
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                    {bolmeet.tag}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A1A1AA] block mb-1 uppercase tracking-wider">
                    Category: {bolmeet.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {bolmeet.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {bolmeet.description}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="py-2">
                <BolmeetPreview />
              </div>

              {/* Capabilities & Link */}
              <div className="space-y-4 pt-2 border-t border-[#1E2638]">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A1A1AA]">
                  {bolmeet.capabilities.map((cap) => (
                    <span key={cap} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="#contact"
                    className="w-full justify-between"
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    <span>Inquire About AI Builds</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* 03. ARGYRWORLDWIDE */}
            <div
              id={argyr.id}
              className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-[0_12px_36px_rgba(0,0,0,0.5)] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-3">
                  <span className="text-xs font-mono text-[#BAF247] font-bold">
                    {argyr.number} // DIGITAL COMMERCE
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A]">
                    {argyr.tag}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-mono text-[#A1A1AA] block mb-1 uppercase tracking-wider">
                    Category: {argyr.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                    {argyr.title}
                  </h3>
                </div>

                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  {argyr.description}
                </p>
              </div>

              {/* Visual Preview */}
              <div className="py-2">
                <ArgyrPreview />
              </div>

              {/* Capabilities & Link */}
              <div className="space-y-4 pt-2 border-t border-[#1E2638]">
                <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#A1A1AA]">
                  {argyr.capabilities.map((cap) => (
                    <span key={cap} className="flex items-center gap-1.5 truncate">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] shrink-0" />
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    href="#contact"
                    className="w-full justify-between"
                    iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    <span>Inquire About Commerce Builds</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* =======================================================================
              04. FULL-WIDTH ENTERPRISE AUTOMATION: Business Receipt Management System
             ======================================================================= */}
          <div
            id={receipt.id}
            className="rounded-2xl bg-[#101522] border border-[#1E2638] hover:border-[#BAF247]/40 transition-all duration-300 p-6 sm:p-10 lg:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.5)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column (5 Cols): Editorial Information */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs font-mono text-[#BAF247] font-bold">
                      {receipt.number} // BUSINESS SYSTEMS
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A]">
                      {receipt.tag}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-[#A1A1AA] block uppercase tracking-wider">
                    Category: {receipt.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                    {receipt.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                  {receipt.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2 pt-2 border-t border-[#1E2638]">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#71717A] block">
                    FUNCTIONAL MODULES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {receipt.capabilities.map((cap) => (
                      <div
                        key={cap}
                        className="p-2 rounded bg-[#050915] border border-[#1E2638] text-xs text-white flex items-center space-x-2"
                      >
                        <Check className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-2">
                  <Button
                    variant="secondary"
                    size="md"
                    href="#contact"
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    Inquire About Custom Business Tools
                  </Button>
                </div>
              </div>

              {/* Right Column (7 Cols): Preview Visual */}
              <div className="lg:col-span-7">
                <ReceiptSystemPreview />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SelectedWork;
