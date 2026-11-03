"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AutomationDiagram: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247] animate-ping" />
          <span className="text-white font-medium">INTELLIGENT WORKFLOW PIPELINE</span>
        </div>
        <div className="text-[#BAF247]">
          EXECUTION TIME: 4ms
        </div>
      </div>

      {/* Workflow DAG Graph */}
      <div className="relative z-10 my-auto py-3 space-y-4">
        {/* Trigger Row */}
        <div className="flex items-center justify-between">
          <div className="p-2.5 rounded-lg bg-[#151B2B] border border-[#BAF247]/40 shadow-[0_2px_12px_rgba(186,242,71,0.15)] flex items-center space-x-2.5">
            <div className="w-2 h-2 rounded-full bg-[#BAF247]" />
            <div>
              <span className="text-[8px] font-mono text-[#BAF247] uppercase block">TRIGGER INBOUND</span>
              <span className="text-xs font-bold text-white">Webhook Event</span>
            </div>
          </div>

          {/* Flow Connector Arrow */}
          <div className="grow mx-3 h-[1px] bg-gradient-to-r from-[#BAF247] via-[#1E2638] to-[#BAF247] relative">
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }
              }
              transition={{
                repeat: Infinity,
                duration: 2.2,
                ease: "easeInOut",
              }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-1.5 rounded-full bg-[#BAF247] shadow-[0_0_8px_#BAF247]"
            />
          </div>

          {/* Logic Evaluation Gate */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] flex items-center space-x-2 text-right">
            <div>
              <span className="text-[8px] font-mono text-[#71717A] uppercase block">LOGIC GATE</span>
              <span className="text-xs font-semibold text-white">Transform &amp; Route</span>
            </div>
            <div className="w-6 h-6 rounded bg-[#050915] border border-[#1E2638] flex items-center justify-center text-[10px] font-mono text-[#BAF247]">
              &fnof;
            </div>
          </div>
        </div>

        {/* Fan-Out Dispatch Lines */}
        <div className="grid grid-cols-3 gap-2 pt-2">
          {/* Branch 1 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-[#BAF247]">ACTION 01</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
            </div>
            <span className="text-[11px] font-semibold text-white block">CRM Sync</span>
            <span className="text-[8px] font-mono text-[#71717A] block">REST Endpoint</span>
          </div>

          {/* Branch 2 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-[#BAF247]">ACTION 02</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
            </div>
            <span className="text-[11px] font-semibold text-white block">Ops Alert</span>
            <span className="text-[8px] font-mono text-[#71717A] block">Slack / Teams</span>
          </div>

          {/* Branch 3 */}
          <div className="p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono text-[#BAF247]">ACTION 03</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247]" />
            </div>
            <span className="text-[11px] font-semibold text-white block">Data Ledger</span>
            <span className="text-[8px] font-mono text-[#71717A] block">Audit Saved</span>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>REDUNDANCY: MULTI-REGION RETRY QUEUES</span>
        <span className="text-[#BAF247]">100% REPEATABLE</span>
      </div>
    </div>
  );
};

export default AutomationDiagram;

