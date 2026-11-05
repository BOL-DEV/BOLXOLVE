"use client";

import React from "react";
import { Globe, ShieldCheck, Ticket, Users, QrCode, CheckCircle2, ArrowUpRight } from "lucide-react";

export const ZentraWebInterface: React.FC = () => {
  return (
    <div className="w-full bg-[#050915] select-none text-white">
      {/* Browser Bar */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
          </div>
          <span className="text-[#1E2638]">|</span>
          <div className="flex items-center gap-2 text-white">
            <Globe className="w-3.5 h-3.5 text-[#BAF247]" />
            <span className="font-semibold">tickets.vanguardlive.com</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#BAF247]">
              SSL VERIFIED
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[11px] text-[#71717A]">
          <span className="text-[#BAF247] flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
            White-Label Portal Live
          </span>
          <span className="hidden sm:inline text-[#1E2638]">|</span>
          <span className="hidden sm:inline">Edge Caching: 12ms</span>
        </div>
      </div>

      {/* Main Experience Viewport */}
      <div className="p-4 sm:p-6 space-y-5 bg-[#080D1A]">
        {/* Event Header Banner */}
        <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-[#101522] to-[#151B2B] border border-[#1E2638] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#BAF247]">
              <span>Event Portal Engine</span>
              <span>&bull;</span>
              <span>ExCeL London Arena</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              London Global Technology Summit 2025
            </h4>
            <p className="text-xs text-[#A1A1AA]">
              White-label customer checkout with atomic seat locking and instant Apple Pay / Stripe routing.
            </p>
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-[#050915] border border-[#BAF247]/30 text-right shrink-0">
            <span className="text-[10px] font-mono text-[#71717A] block">Capacity Sold</span>
            <span className="text-base font-bold font-mono text-[#BAF247]">4,850 / 5,000 (97%)</span>
          </div>
        </div>

        {/* Real-Time Metrics & Admission Verification */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Gate Throughput</span>
              <Users className="w-3.5 h-3.5 text-[#BAF247]" />
            </div>
            <div className="text-lg font-bold font-mono text-white">42 scans / min</div>
            <div className="text-[10px] font-mono text-[#BAF247]">Sub-second admissions</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Atomic Lock State</span>
              <ShieldCheck className="w-3.5 h-3.5 text-[#BAF247]" />
            </div>
            <div className="text-lg font-bold font-mono text-white">Zero Double-Sales</div>
            <div className="text-[10px] font-mono text-[#71717A]">Redis Lua atomic clusters</div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Offline QR Validation</span>
              <QrCode className="w-3.5 h-3.5 text-[#BAF247]" />
            </div>
            <div className="text-lg font-bold font-mono text-white">&lt;0.4s Latency</div>
            <div className="text-[10px] font-mono text-[#BAF247]">Cryptographic Ed25519</div>
          </div>
        </div>

        {/* Tiered Ticket Inventory Table */}
        <div className="rounded-xl bg-[#101522] border border-[#1E2638] overflow-hidden">
          <div className="px-4 py-2.5 bg-[#0A0F1D] border-b border-[#1E2638] flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
            <span>Active Release Tiers</span>
            <span>Real-Time Allocation</span>
          </div>
          <div className="divide-y divide-[#1E2638]/60 text-xs font-mono">
            <div className="px-4 py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-white block">VIP Executive Access</span>
                <span className="text-[10px] text-[#71717A]">Includes keynote lounge &amp; VIP reception</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-white block">£280.00</span>
                <span className="text-[10px] text-[#BAF247]">480 / 500 allocated</span>
              </div>
            </div>

            <div className="px-4 py-3 flex items-center justify-between bg-[#050915]/40">
              <div>
                <span className="font-semibold text-white block">General Admission — Tier 2</span>
                <span className="text-[10px] text-[#71717A]">Full 3-day access badge</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-white block">£145.00</span>
                <span className="text-[10px] text-[#A8E035]">2,120 / 2,250 allocated</span>
              </div>
            </div>

            <div className="px-4 py-3 flex items-center justify-between opacity-60">
              <div>
                <span className="font-semibold text-[#71717A] block">Early Bird General Admission</span>
                <span className="text-[10px] text-[#71717A]">Closed on 15 Dec 2024</span>
              </div>
              <div className="text-right">
                <span className="font-bold text-[#71717A] block">£115.00</span>
                <span className="text-[10px] text-amber-400">SOLD OUT (2,250)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>BESPOKE WEB EXPERIENCE PLATFORM</span>
        <span className="text-white">BOLXOLVE FRONTEND ENGINEERING</span>
      </div>
    </div>
  );
};

export default ZentraWebInterface;

