"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const WebExperienceDiagram: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Browser Chrome Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#BAF247]/70" />
          <span className="text-[#71717A] ml-2 hidden sm:inline">bolxolve.system/experience</span>
        </div>
        <div className="flex items-center space-x-3 text-[#A1A1AA]">
          <span className="text-[#BAF247]">● 100% LIGHTHOUSE</span>
          <span className="text-[#71717A]">60 FPS</span>
        </div>
      </div>

      {/* Viewport Content Representation */}
      <div className="relative z-10 my-auto py-3 space-y-3">
        {/* Navigation Mockup Bar */}
        <div className="h-6 rounded bg-[#101522] border border-[#1E2638] px-3 flex items-center justify-between">
          <div className="w-12 h-2 rounded-sm bg-[#BAF247]/70" />
          <div className="flex space-x-2">
            <div className="w-8 h-1.5 rounded-sm bg-[#71717A]/50" />
            <div className="w-8 h-1.5 rounded-sm bg-[#71717A]/50" />
            <div className="w-12 h-1.5 rounded-sm bg-[#BAF247]/40" />
          </div>
        </div>

        {/* Hero Section Mockup */}
        <div className="grid grid-cols-12 gap-3 p-3 rounded-lg bg-[#101522]/80 border border-[#1E2638]">
          <div className="col-span-7 space-y-2">
            <div className="w-16 h-2 rounded-sm bg-[#BAF247]/30" />
            <div className="w-full h-3 rounded-sm bg-white/80" />
            <div className="w-4/5 h-3 rounded-sm bg-white/60" />
            <div className="w-3/5 h-2 rounded-sm bg-[#71717A]/50 pt-1" />
            <div className="flex space-x-2 pt-2">
              <div className="w-16 h-5 rounded bg-[#BAF247] flex items-center justify-center">
                <span className="text-[8px] font-mono text-[#050915] font-bold">CTA</span>
              </div>
              <div className="w-16 h-5 rounded border border-[#1E2638] bg-[#050915]" />
            </div>
          </div>
          <div className="col-span-5 rounded bg-[#050915] border border-[#1E2638] p-2 flex flex-col justify-center items-center relative overflow-hidden">
            {/* Interactive Geometry Wireframe Box */}
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, 90, 180, 270, 360],
                    }
              }
              transition={{
                repeat: Infinity,
                duration: 24,
                ease: "linear",
              }}
              className="w-12 h-12 rounded-lg border border-dashed border-[#BAF247]/60 flex items-center justify-center"
            >
              <div className="w-6 h-6 rounded-sm bg-[#BAF247]/20 border border-[#BAF247]" />
            </motion.div>
            <span className="text-[8px] font-mono text-[#71717A] mt-2">CANVAS_SYNC</span>
          </div>
        </div>

        {/* Modular Grid Row */}
        <div className="grid grid-cols-3 gap-2">
          <div className="h-10 rounded bg-[#101522] border border-[#1E2638] p-2 flex flex-col justify-between">
            <div className="w-8 h-1.5 rounded-sm bg-white/40" />
            <div className="w-12 h-2 rounded-sm bg-[#BAF247]/60" />
          </div>
          <div className="h-10 rounded bg-[#101522] border border-[#1E2638] p-2 flex flex-col justify-between">
            <div className="w-8 h-1.5 rounded-sm bg-white/40" />
            <div className="w-12 h-2 rounded-sm bg-[#BAF247]/60" />
          </div>
          <div className="h-10 rounded bg-[#101522] border border-[#1E2638] p-2 flex flex-col justify-between">
            <div className="w-8 h-1.5 rounded-sm bg-white/40" />
            <div className="w-12 h-2 rounded-sm bg-[#BAF247]/60" />
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>RES: 3840×2160 UHD // RETINA</span>
        <span className="text-[#BAF247]">SEO OPTIMIZED: 100</span>
      </div>
    </div>
  );
};

export default WebExperienceDiagram;
