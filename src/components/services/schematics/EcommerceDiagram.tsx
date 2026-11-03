"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const EcommerceDiagram: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247] animate-pulse" />
          <span className="text-white font-medium">COMMERCE TRANSACTION ENGINE</span>
        </div>
        <div className="text-[#BAF247] font-mono">
          PCI-DSS COMPLIANT
        </div>
      </div>

      {/* Interactive Transaction Pipeline */}
      <div className="relative z-10 my-auto py-4 space-y-4">
        {/* Connecting Line */}
        <div className="relative flex items-center justify-between">
          <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-[2px] bg-[#1E2638] z-0" />

          {/* Animated Energy Flow Along Transit */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                  left: ["10%", "85%", "10%"],
                }
            }
            transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-transparent via-[#BAF247] to-transparent z-0 pointer-events-none"
          />

          {/* Node 1: Cart / Checkout */}
          <div className="relative z-10 w-24 sm:w-28 p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] flex flex-col items-center text-center">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#71717A]">
              STEP 01
            </span>
            <span className="text-xs font-semibold text-white mt-1">Storefront</span>
            <div className="mt-2 w-full h-1 bg-[#BAF247]/40 rounded-full" />
            <span className="text-[8px] font-mono text-[#A1A1AA] mt-1">Multi-Currency</span>
          </div>

          {/* Node 2: Payment Tokenization Gateway */}
          <div className="relative z-10 w-28 sm:w-32 p-3 rounded-lg bg-[#151B2B] border border-[#BAF247]/40 shadow-[0_4px_16px_rgba(186,242,71,0.12)] flex flex-col items-center text-center">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#BAF247] font-semibold">
              GATEWAY
            </span>
            <span className="text-xs font-bold text-white mt-0.5">Encrypted Pay</span>
            <div className="mt-1.5 flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
              <span className="text-[8px] font-mono text-[#A1A1AA]">Tokenized</span>
            </div>
          </div>

          {/* Node 3: Fulfillment & Order Ledger */}
          <div className="relative z-10 w-24 sm:w-28 p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] flex flex-col items-center text-center">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#71717A]">
              STEP 03
            </span>
            <span className="text-xs font-semibold text-white mt-1">Fulfillment</span>
            <div className="mt-2 w-full h-1 bg-[#BAF247]/40 rounded-full" />
            <span className="text-[8px] font-mono text-[#A1A1AA] mt-1">Real-Time Sync</span>
          </div>
        </div>

        {/* Live Operational Metrics Card */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="p-2 rounded bg-[#101522]/90 border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono uppercase text-[#71717A] block">Checkout Speed</span>
            <span className="text-xs font-mono font-bold text-white">&lt; 1.2s</span>
          </div>
          <div className="p-2 rounded bg-[#101522]/90 border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono uppercase text-[#71717A] block">Cart Abandonment</span>
            <span className="text-xs font-mono font-bold text-[#BAF247]">-38%</span>
          </div>
          <div className="p-2 rounded bg-[#101522]/90 border border-[#1E2638] text-center">
            <span className="text-[8px] font-mono uppercase text-[#71717A] block">Uptime SLA</span>
            <span className="text-xs font-mono font-bold text-white">99.99%</span>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>INTEGRATIONS: STRIPE • SHOPIFY • CUSTOM APIS</span>
        <span className="text-white">SYNCHRONIZED // ACTIVE</span>
      </div>
    </div>
  );
};

export default EcommerceDiagram;

