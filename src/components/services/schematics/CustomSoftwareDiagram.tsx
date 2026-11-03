"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const CustomSoftwareDiagram: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
          <span className="text-white font-medium">CUSTOM SYSTEM TOPOLOGY</span>
        </div>
        <div className="text-[#71717A]">
          ARCHITECTURE // EVENT-DRIVEN
        </div>
      </div>

      {/* Layered Architectural Flow */}
      <div className="relative z-10 my-auto py-2 space-y-3">
        {/* Tier 1: Client Frontends */}
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono text-[#71717A] uppercase block">Client Layer</span>
            <span className="text-[11px] font-semibold text-white">Web App</span>
          </div>
          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono text-[#71717A] uppercase block">Client Layer</span>
            <span className="text-[11px] font-semibold text-white">SaaS Platform</span>
          </div>
          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono text-[#71717A] uppercase block">Client Layer</span>
            <span className="text-[11px] font-semibold text-white">Internal Tool</span>
          </div>
        </div>

        {/* Dynamic Bus Interconnect with Animated Data Arrows */}
        <div className="relative h-4 flex items-center justify-around">
          <div className="w-[1px] h-full bg-[#BAF247]/60" />
          <div className="w-[1px] h-full bg-[#BAF247]/60" />
          <div className="w-[1px] h-full bg-[#BAF247]/60" />
        </div>

        {/* Tier 2: Core Processing & Business Logic Hub */}
        <div className="p-3 rounded-lg bg-[#151B2B] border border-[#BAF247]/30 shadow-[0_4px_20px_rgba(186,242,71,0.1)] flex items-center justify-between">
          <div className="space-y-0.5">
            <span className="text-[9px] font-mono uppercase text-[#BAF247] font-semibold">
              CORE APPLICATION ENGINE
            </span>
            <h5 className="text-xs font-bold text-white">Business Logic &amp; Management Hub</h5>
            <p className="text-[9px] font-mono text-[#A1A1AA]">
              RESTful &bull; GraphQL &bull; Role-Based Access Control
            </p>
          </div>
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="w-10 h-10 rounded-lg bg-[#050915] border border-[#BAF247] flex items-center justify-center shrink-0"
          >
            <span className="text-xs font-mono text-[#BAF247] font-bold">&lt;/&gt;</span>
          </motion.div>
        </div>

        {/* Dynamic Bus Interconnect */}
        <div className="relative h-4 flex items-center justify-around">
          <div className="w-[1px] h-full bg-[#1E2638]" />
          <div className="w-[1px] h-full bg-[#BAF247]/60" />
          <div className="w-[1px] h-full bg-[#1E2638]" />
        </div>

        {/* Tier 3: High-Availability Database & Storage */}
        <div className="grid grid-cols-2 gap-2">
          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[8px] font-mono text-[#71717A] block">Data Store</span>
              <span className="text-[11px] font-semibold text-white">PostgreSQL / Redis</span>
            </div>
            <span className="text-[9px] font-mono text-[#BAF247]">ACID SAFE</span>
          </div>
          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[8px] font-mono text-[#71717A] block">Infrastructure</span>
              <span className="text-[11px] font-semibold text-white">Isolated VPC / Cloud</span>
            </div>
            <span className="text-[9px] font-mono text-[#BAF247]">ENCRYPTED</span>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>SCALABILITY: AUTO-SCALE // KUBERNETES</span>
        <span className="text-white">STATUS: NOMINAL</span>
      </div>
    </div>
  );
};

export default CustomSoftwareDiagram;
