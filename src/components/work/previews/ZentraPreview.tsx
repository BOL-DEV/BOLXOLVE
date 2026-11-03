"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { QrCode, Ticket, CheckCircle2, ShieldCheck, Users } from "lucide-react";

export const ZentraPreview: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Atmospheric Lime Radial Glow on Hover */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-radial-hero pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

      {/* Top System Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#BAF247]" />
          <span className="text-white font-semibold tracking-wider">ZENTRA // EVENT ENGINE</span>
          <span className="text-[#71717A] hidden sm:inline">&bull; WHITE-LABEL PORTAL</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-[9px] px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#71717A]">
            ARCHITECTURAL BLUEPRINT
          </span>
        </div>
      </div>

      {/* Central Interactive Blueprint Canvas */}
      <div className="relative z-10 my-auto py-3 grid grid-cols-12 gap-3 sm:gap-4 items-center">
        {/* Left: Organizer Dashboard Mockup */}
        <div className="col-span-7 sm:col-span-8 space-y-2.5">
          <div className="p-3 sm:p-4 rounded-lg bg-[#101522]/90 border border-[#1E2638] space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#BAF247] flex items-center gap-1.5">
                <Ticket className="w-3 h-3 text-[#BAF247]" /> ACTIVE EVENT
              </span>
              <span className="text-[9px] font-mono text-[#71717A]">ID: ZN-8842</span>
            </div>

            <div className="space-y-1">
              <h5 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                Global Technology Forum &bull; Main Stage
              </h5>
              <div className="flex items-center space-x-3 text-[10px] font-mono text-[#A1A1AA]">
                <span>Hall A &bull; Keynote</span>
                <span>Tier: VIP &amp; Executive</span>
              </div>
            </div>

            {/* Inventory Progress Bar */}
            <div className="space-y-1 pt-1">
              <div className="flex items-center justify-between text-[9px] font-mono">
                <span className="text-[#71717A]">Ticket Allocation</span>
                <span className="text-white font-medium">92% Claimed</span>
              </div>
              <div className="w-full h-1.5 bg-[#050915] rounded-full overflow-hidden border border-[#1E2638]">
                <div className="h-full w-[92%] bg-gradient-to-r from-[#BAF247]/70 to-[#BAF247] rounded-full" />
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-[#101522]/80 border border-[#1E2638] text-center">
              <span className="text-[8px] font-mono text-[#71717A] uppercase block">Check-Ins</span>
              <span className="text-xs font-mono font-bold text-white">1,420</span>
            </div>
            <div className="p-2 rounded bg-[#101522]/80 border border-[#1E2638] text-center">
              <span className="text-[8px] font-mono text-[#71717A] uppercase block">Scan Latency</span>
              <span className="text-xs font-mono font-bold text-[#BAF247]">&lt; 150ms</span>
            </div>
            <div className="p-2 rounded bg-[#101522]/80 border border-[#1E2638] text-center">
              <span className="text-[8px] font-mono text-[#71717A] uppercase block">Gate Uptime</span>
              <span className="text-xs font-mono font-bold text-white">99.98%</span>
            </div>
          </div>
        </div>

        {/* Right: Digital Pass & QR Verification Node */}
        <div className="col-span-5 sm:col-span-4 p-3.5 rounded-lg bg-[#151B2B] border border-[#BAF247]/30 shadow-[0_4px_24px_rgba(186,242,71,0.12)] flex flex-col items-center justify-center text-center space-y-2 relative overflow-hidden">
          {/* Subtle animated laser scan line across the QR pass */}
          <motion.div
            animate={
              shouldReduceMotion
                ? {}
                : {
                    top: ["10%", "90%", "10%"],
                  }
            }
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute left-2 right-2 h-[1px] bg-gradient-to-r from-transparent via-[#BAF247] to-transparent pointer-events-none z-20"
          />

          <div className="p-2 rounded bg-[#050915] border border-[#1E2638] relative z-10">
            <QrCode className="w-12 h-12 text-[#BAF247]" />
          </div>

          <div className="space-y-0.5 relative z-10">
            <span className="text-[9px] font-mono font-bold text-white tracking-wider uppercase block">
              ADMIT PASS
            </span>
            <span className="text-[8px] font-mono text-[#BAF247] flex items-center justify-center gap-1">
              <CheckCircle2 className="w-2.5 h-2.5" /> SECURE // VERIFIED
            </span>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>ORGANIZER CMS &bull; SCANNER APP &bull; CHECKOUT API</span>
        <span className="text-[#BAF247]">PRODUCTION ARCHITECTURE</span>
      </div>
    </div>
  );
};

export default ZentraPreview;
