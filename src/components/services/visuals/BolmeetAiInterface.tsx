"use client";

import React from "react";
import { Sparkles, Mic, FileText, CheckSquare, BrainCircuit, Activity } from "lucide-react";

export const BolmeetAiInterface: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-[#050915] border border-[#1E2638] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none">
      {/* Header */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-white">
          <BrainCircuit className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold">BOLMEET AI WORKSPACE</span>
          <span className="text-[#71717A] hidden sm:inline">// Real-Time Meeting Synthesis</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#BAF247]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
          <span>Whisper-Large Neural Engine Active</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-4 sm:p-6 bg-[#080D1A] space-y-4">
        {/* Live Audio & Model State */}
        <div className="p-4 rounded-xl bg-[#101522] border border-[#1E2638] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#BAF247]/10 border border-[#BAF247]/30 flex items-center justify-center text-[#BAF247]">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#BAF247]">
                <span>Executive Architecture Review</span>
                <span>&bull;</span>
                <span>Active 38m 12s</span>
              </div>
              <span className="text-sm font-bold text-white block">
                Enterprise Infrastructure Modernization Session
              </span>
            </div>
          </div>

          {/* Simulated Waveform */}
          <div className="flex items-center gap-1 h-6 shrink-0">
            {[4, 12, 18, 10, 24, 16, 8, 20, 14, 6, 22, 12, 18, 8, 14].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}px` }}
                className="w-1 rounded-full bg-[#BAF247]"
              />
            ))}
          </div>
        </div>

        {/* Two-Column Stage: Transcript vs AI Extracted Tasks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-xs font-mono">
          {/* Left: Live Transcript */}
          <div className="md:col-span-7 p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3">
            <span className="text-[10px] uppercase tracking-wider text-[#71717A] block pb-1 border-b border-[#1E2638]">
              Live Diarized Transcript
            </span>

            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#BAF247] font-semibold">Alex M. (Lead Architect)</span>
                  <span className="text-[10px] text-[#71717A]">11:24 AM</span>
                </div>
                <p className="text-[#D4D4D8] text-[11px] leading-relaxed">
                  &ldquo;The multi-tenant database partitioning ensures tenant data never crosses VPC boundaries. We must lock down the migration script before Tuesday.&rdquo;
                </p>
              </div>

              <div className="space-y-1 pt-2 border-t border-[#1E2638]/60">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-white font-semibold">Sarah K. (VP Product)</span>
                  <span className="text-[10px] text-[#71717A]">11:25 AM</span>
                </div>
                <p className="text-[#D4D4D8] text-[11px] leading-relaxed">
                  &ldquo;Agreed. Let&apos;s also enforce automated PDF dispatch on settlement so accounting doesn&apos;t need to manually verify invoices.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Right: AI-Synthesized Action Items */}
          <div className="md:col-span-5 p-4 rounded-xl bg-[#151B2B] border border-[#1E2638] space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider text-[#BAF247] font-semibold flex items-center gap-1.5 pb-1 border-b border-[#1E2638]">
                <Sparkles className="w-3 h-3 text-[#BAF247]" />
                Auto-Extracted Action Items
              </span>

              <div className="space-y-2">
                <div className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-medium">Verify VPC isolation script</span>
                    <span className="text-[10px] text-[#BAF247]">Alex M.</span>
                  </div>
                  <span className="text-[10px] text-[#71717A] block">Due: Tuesday 17:00 UTC</span>
                </div>

                <div className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] space-y-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-white font-medium">Enable auto-dispatch pipeline</span>
                    <span className="text-[10px] text-[#BAF247]">Engineering</span>
                  </div>
                  <span className="text-[10px] text-[#71717A] block">Linked to Invoice Engine</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2638] flex items-center justify-between text-[10px] text-[#71717A]">
              <span>CONFIDENCE: 98.4%</span>
              <span className="text-[#BAF247]">LATENCY: 180ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>EDGE-HOSTED INTELLIGENT WORKSPACE</span>
        <span className="text-white">BOLXOLVE AI INTEGRATION</span>
      </div>
    </div>
  );
};

export default BolmeetAiInterface;
