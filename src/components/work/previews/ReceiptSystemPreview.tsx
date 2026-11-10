"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FileCheck, Receipt, Download, Database, Check } from "lucide-react";

export const ReceiptSystemPreview: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/9] rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_16px_40px_rgba(0,0,0,0.6)] group">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="text-white font-semibold">INVOICE &amp; RECEIPT ENGINE</span>
          <span className="text-[#71717A] hidden sm:inline">TRANSACTION LEDGER</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#BAF247] font-semibold">
          ACTIVE DEPLOYMENT
        </span>
      </div>

      {/* Document Generation & Ledger Visualization */}
      <div className="relative z-10 my-auto py-3 grid grid-cols-12 gap-4 items-center">
        {/* Left: Digital Invoice & Receipt Voucher Mockup */}
        <div className="col-span-12 sm:col-span-6 p-4 rounded-lg bg-[#101522]/90 border border-[#1E2638] space-y-2.5">
          <div className="flex items-center justify-between border-b border-[#1E2638] pb-2">
            <span className="text-[9px] font-mono text-[#BAF247] flex items-center gap-1 font-semibold">
              <Receipt className="w-3 h-3 text-[#BAF247]" /> DIGITAL INVOICE VOUCHER
            </span>
            <span className="text-[9px] font-mono text-[#71717A]">#INV-88102</span>
          </div>

          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex justify-between text-[#A1A1AA]">
              <span>Corporate Software Engineering</span>
              <span className="text-white">&pound;4,200.00</span>
            </div>
            <div className="flex justify-between text-[#A1A1AA]">
              <span>Infrastructure Deployment &amp; SLA</span>
              <span className="text-white">&pound;2,800.00</span>
            </div>
            <div className="flex justify-between text-[#71717A] pt-1 border-t border-[#1E2638]">
              <span>VAT / Tax (20%)</span>
              <span>&pound;1,400.00</span>
            </div>
            <div className="flex justify-between text-white font-bold pt-1 border-t border-[#1E2638]">
              <span className="text-[#BAF247]">TOTAL SETTLED</span>
              <span className="text-[#BAF247]">&pound;8,400.00</span>
            </div>
          </div>
        </div>

        {/* Right: Automated Export Pipeline & Audit Ledger */}
        <div className="col-span-12 sm:col-span-6 space-y-3">
          <div className="p-3.5 rounded-lg bg-[#151B2B] border border-[#BAF247]/30 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-mono uppercase text-[#BAF247] font-semibold flex items-center gap-1">
                <FileCheck className="w-3 h-3 text-[#BAF247]" /> AUTOMATED DISPATCH
              </span>
              <span className="text-[8px] font-mono text-[#71717A]">AUDIT SIGNED</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-mono">
              <div className="p-2 rounded bg-[#050915] border border-[#1E2638] text-white">
                <Download className="w-3 h-3 text-[#BAF247] mx-auto mb-1" />
                <span>PDF EXPORT</span>
              </div>
              <div className="p-2 rounded bg-[#050915] border border-[#1E2638] text-white">
                <Database className="w-3 h-3 text-[#BAF247] mx-auto mb-1" />
                <span>LEDGER DB</span>
              </div>
              <div className="p-2 rounded bg-[#050915] border border-[#1E2638] text-white">
                <Check className="w-3 h-3 text-[#BAF247] mx-auto mb-1" />
                <span>RECONCILED</span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
            <span>AUDIT STATUS: VERIFIED</span>
            <span className="text-[#BAF247]">100% TRACEABLE</span>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#1E2638] text-[9px] font-mono text-[#71717A]">
        <span>IMMUTABLE CHRONOLOGICAL RECORDS</span>
        <span className="text-white font-medium">DISPATCH ENGINE ACTIVE</span>
      </div>
    </div>
  );
};

export default ReceiptSystemPreview;
