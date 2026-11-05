"use client";

import React from "react";
import { Workflow, CheckCircle2, Clock, Terminal, ArrowUpRight, Cpu, FileCheck } from "lucide-react";

export const AutomationPipelineInterface: React.FC = () => {
  return (
    <div className="w-full bg-[#050915] select-none text-white">
      {/* Header */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-white">
          <Workflow className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold">BOLXOLVE AUTOMATION PIPELINE</span>
          <span className="text-[#71717A] hidden sm:inline">// Asynchronous Worker Cluster</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#BAF247]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
          <span>Worker Queue: 0 Backlog</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-4 sm:p-6 bg-[#080D1A] space-y-4">
        {/* KPI Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Worker Speed</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">&lt;0.28s</span>
            <span className="text-[10px] font-mono text-[#BAF247]">PDF vector render</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">24h Task Volume</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">14,290 Jobs</span>
            <span className="text-[10px] font-mono text-[#BAF247]">100% success rate</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">ERP Synchronization</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">Two-Way Live</span>
            <span className="text-[10px] font-mono text-[#71717A]">Webhook auto-retry</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Manual Hours Saved</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">38.5 hrs / wk</span>
            <span className="text-[10px] font-mono text-[#BAF247]">Zero data entry</span>
          </div>
        </div>

        {/* Live Event Stream / Webhook Log */}
        <div className="rounded-xl bg-[#101522] border border-[#1E2638] overflow-hidden text-xs font-mono">
          <div className="px-4 py-2.5 bg-[#0A0F1D] border-b border-[#1E2638] flex items-center justify-between text-[10px] uppercase text-[#71717A]">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#BAF247]" />
              Event Stream &amp; Automated Job Execution Log
            </span>
            <span className="text-[#BAF247]">Real-Time Active</span>
          </div>

          <div className="divide-y divide-[#1E2638]/60">
            <div className="px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                <span className="text-white font-medium">invoice.settled.dispatch</span>
                <span className="text-[10px] text-[#71717A] hidden sm:inline">Vanguard Logistics #INV-0841</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-[#BAF247]">PDF Compiled &amp; Sent (212ms)</span>
                <span className="text-[#71717A]">14:32:01 UTC</span>
              </div>
            </div>

            <div className="px-4 py-2.5 flex items-center justify-between bg-[#050915]/30">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                <span className="text-white font-medium">tax.ledger.reconcile</span>
                <span className="text-[10px] text-[#71717A] hidden sm:inline">HMRC VAT 20% Automated Ledger Allocation</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-[#BAF247]">Audit Stamp Signed (68ms)</span>
                <span className="text-[#71717A]">14:31:58 UTC</span>
              </div>
            </div>

            <div className="px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                <span className="text-white font-medium">erp.accounting.sync</span>
                <span className="text-[10px] text-[#71717A] hidden sm:inline">QuickBooks / Xero Enterprise API Sync</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-[#BAF247]">Ledger Synchronized (145ms)</span>
                <span className="text-[#71717A]">14:31:44 UTC</span>
              </div>
            </div>

            <div className="px-4 py-2.5 flex items-center justify-between bg-[#050915]/30">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
                <span className="text-white font-medium">crm.client.timeline_update</span>
                <span className="text-[10px] text-[#71717A] hidden sm:inline">Meridian Digital Media Account Ledger</span>
              </div>
              <div className="flex items-center gap-3 text-[10px]">
                <span className="text-[#BAF247]">Record Appended (94ms)</span>
                <span className="text-[#71717A]">14:28:10 UTC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>EVENT-DRIVEN ASYNC PIPELINES</span>
        <span className="text-white">ZERO MANUAL RECONCILIATION</span>
      </div>
    </div>
  );
};

export default AutomationPipelineInterface;

