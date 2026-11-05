"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroVisual from "./HeroVisual";

const CAPABILITY_ITEMS = [
  { id: "web-digital", index: "01", title: "Web Experiences", href: "#web-digital" },
  { id: "custom-software", index: "02", title: "Custom Software", href: "#custom-software" },
  { id: "ecommerce", index: "03", title: "E-Commerce", href: "#ecommerce" },
  { id: "automation", index: "04", title: "Automation", href: "#automation" },
  { id: "ai-emerging", index: "05", title: "AI Integration", href: "#ai-emerging" },
];

export const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Staggered entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-[#050915] border-b border-[#1E2638]">
      {/* Clean Ambient Atmospheric Lighting (Controlled & Soft) */}
      <div className="absolute top-1/3 right-[8%] w-[580px] h-[580px] rounded-full bg-radial-hero pointer-events-none opacity-30 blur-3xl" />

      {/* Main Hero Content Stage */}
      <div className="grow flex items-center">
        <Container size="wide" className="relative z-10 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Asymmetrical Editorial Typography & Actions */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7"
            >
              {/* Editorial Eyebrow */}
              <motion.div variants={itemVariants} className="inline-flex items-center gap-3">
                <span className="w-5 h-px bg-[#BAF247]" />
                <span className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.22em] uppercase text-[#BAF247]">
                  Digital Solutions & Technology
                </span>
              </motion.div>

              {/* Large Confident Editorial Headline with Refined Leading and Line Breaks */}
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.75rem] font-bold tracking-[-0.04em] text-white leading-[1.0] max-w-2xl">
                  We turn complex challenges into{" "}
                  <span className="text-[#BAF247] font-bold inline">
                    powerful digital solutions.
                  </span>
                </h1>
              </motion.div>

              {/* Supporting Description with Controlled Line Length */}
              <motion.div variants={itemVariants}>
                <p className="text-base sm:text-lg md:text-[1.125rem] text-[#A1A1AA] leading-relaxed max-w-xl font-normal">
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
                  className="group shadow-[0_4px_24px_rgba(186,242,71,0.22)]"
                >
                  Start a project
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  href="#solutions"
                  iconRight={<ArrowUpRight className="w-4 h-4 text-[#71717A] group-hover:text-white transition-colors" />}
                  className="group"
                >
                  Explore our solutions
                </Button>
              </motion.div>

              {/* Supporting Brand Statement */}
              <motion.div
                variants={itemVariants}
                className="pt-6 border-t border-[#1E2638]/70 flex flex-wrap items-center gap-3 text-xs font-mono tracking-[0.22em] text-[#71717A] uppercase select-none"
              >
                <span>WE DESIGN</span>
                <span className="text-[#BAF247] font-bold">&bull;</span>
                <span>WE DEVELOP</span>
                <span className="text-[#BAF247] font-bold">&bull;</span>
                <span className="text-white font-semibold">WE SOLVE</span>
              </motion.div>
            </motion.div>

            {/* Right Column: Monumental Brand Visual */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              className="lg:col-span-5 flex items-center justify-center pt-4 lg:pt-0"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </Container>
      </div>

      {/* Bottom Capabilities Strip (Refined Readability & Balanced Spacing) */}
      <div className="w-full border-t border-[#1E2638] bg-[#050915]/90 backdrop-blur-sm z-20">
        <Container size="wide" className="px-0 sm:px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-[#1E2638]">
            {CAPABILITY_ITEMS.map((item, index) => (
              <Link
                key={item.id}
                href={item.href}
                className={`group py-4 sm:py-5 px-4 sm:px-5 flex items-center justify-between gap-3 hover:bg-[#101522] transition-colors ${
                  index === 4 ? "col-span-2 md:col-span-1 border-t md:border-t-0" : ""
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono tracking-wider text-[#BAF247]/80 group-hover:text-[#BAF247] transition-colors font-semibold">
                    {item.index}
                  </span>
                  <span className="text-xs sm:text-[13px] font-mono uppercase tracking-[0.12em] text-[#E4E4E7] group-hover:text-white transition-colors font-medium">
                    {item.title}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#71717A] opacity-60 group-hover:opacity-100 group-hover:text-[#BAF247] transition-all transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 shrink-0" />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
