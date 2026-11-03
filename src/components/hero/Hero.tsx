"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Staggered entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-center overflow-hidden bg-[#050915] border-b border-[#1E2638]">
      {/* Background Understated Technical Grid with Radial Mask */}
      <div className="absolute inset-0 bg-tech-grid mask-radial-hero opacity-40 pointer-events-none" />

      {/* Atmospheric Ambient Lime Glow (Controlled - Subtle Depth Only) */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-radial-hero pointer-events-none opacity-60" />

      {/* Hairline Framing Coordinate Accents */}
      <div className="hidden lg:block absolute top-6 left-8 text-[10px] font-mono tracking-widest text-[#71717A]/60 select-none pointer-events-none">
        BOLXOLVE // DIGITAL SYSTEMS PLATFORM
      </div>
      <div className="hidden lg:block absolute top-6 right-8 text-[10px] font-mono tracking-widest text-[#71717A]/60 select-none pointer-events-none">
        LOC: 51.5074° N, 0.1278° W
      </div>
      <div className="hidden lg:block absolute bottom-6 left-8 text-[10px] font-mono tracking-widest text-[#71717A]/60 select-none pointer-events-none">
        SYS_STATUS: ACTIVE // NOMINAL
      </div>
      <div className="hidden lg:block absolute bottom-6 right-8 text-[10px] font-mono tracking-widest text-[#71717A]/60 select-none pointer-events-none">
        SECURE ENTERPRISE RUNTIME
      </div>

      <Container size="wide" className="relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Editorial Typography & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Eyebrow Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-[#101522] border border-[#1E2638] space-x-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BAF247] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BAF247]" />
                </span>
                <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.16em] uppercase text-[#A1A1AA]">
                  Digital Solutions & Technology
                </span>
              </div>
            </motion.div>

            {/* Main Oversized Editorial Headline */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold tracking-[-0.035em] text-white leading-[1.05]">
                We turn complex challenges into{" "}
                <span className="text-[#BAF247] inline-block font-bold">
                  powerful digital solutions.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Description */}
            <motion.div variants={itemVariants}>
              <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed max-w-2xl font-normal">
                We design, engineer and deliver technology that helps businesses operate smarter, scale faster and move forward.
              </p>
            </motion.div>

            {/* Primary & Secondary Action CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Button
                variant="primary"
                size="lg"
                href="#contact"
                iconRight={<ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />}
                className="group shadow-[0_4px_24px_rgba(186,242,71,0.25)]"
              >
                Start a project
              </Button>

              <Button
                variant="secondary"
                size="lg"
                href="#work"
                iconRight={<ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />}
                className="group"
              >
                Explore our work
              </Button>
            </motion.div>

            {/* Supporting Brand Statement */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-[#1E2638]/80 flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono tracking-[0.2em] sm:tracking-[0.28em] text-[#71717A] uppercase select-none"
            >
              <span>WE DESIGN</span>
              <span className="text-[#BAF247] font-bold">&bull;</span>
              <span>WE DEVELOP</span>
              <span className="text-[#BAF247] font-bold">&bull;</span>
              <span className="text-white font-semibold">WE SOLVE</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Abstract Visual Inspired by Logo */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="lg:col-span-5 flex items-center justify-center pt-8 lg:pt-0"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
