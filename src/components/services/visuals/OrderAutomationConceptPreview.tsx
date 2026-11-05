"use client";

import React, { useState } from "react";
import { Workflow, CheckCircle2, Mail, Bell, RefreshCw, FileText, ArrowRight } from "lucide-react";

export const OrderAutomationConceptPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STEPS = [
    {
      title: "1. Order Placed by Customer",
      desc: "Customer completes payment online for Order #ORD-4021.",
      action: "Order recorded in central database immediately.",
      icon: CheckCircle2,
    },
    {
      title: "2. Automatic Email Notification",
      desc: "System sends branded confirmation receipt and tracking link.",
      action: "Customer receives email without manual staff effort.",
      icon: Mail,
    },
    {
      title: "3. Business Alert & Stock Update",
      desc: "Warehouse alerted, stock reduced by item count automatically.",
      action: "Inventory levels stay accurate in real time.",
      icon: Bell,
    },
    {
      title: "4. Preparation for Dispatch",
      desc: "Dispatch team receives ready-to-print packing note.",
      action: "Order queued for packing without delay.",
      icon: FileText,
    },
  ];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">// Order &amp; Notification Automation Flow</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Connected Business Tools
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Step Indicator Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
          {STEPS.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-lg text-left transition-colors border ${
                activeStep === idx
                  ? "bg-[#101522] border-[#BAF247]/50 text-white"
                  : "bg-[#0A0F1D] border-[#1E2638] text-[#71717A] hover:text-[#A1A1AA]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] ${activeStep === idx ? "text-[#BAF247] font-bold" : "text-[#71717A]"}`}>
                  STEP 0{idx + 1}
                </span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${activeStep >= idx ? "text-[#BAF247]" : "text-[#1E2638]"}`} />
              </div>
              <span className="text-[11px] font-medium block truncate">{s.title.replace(/^\d+\.\s*/, "")}</span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Inspection */}
        <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3">
          <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-xs font-mono">
            <span className="text-[#BAF247] font-semibold flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-[#BAF247]" />
              {STEPS[activeStep].title}
            </span>
            <span className="text-[10px] text-[#71717A]">
              Automated in &lt;1 second
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">What Happens</span>
              <p className="text-white font-medium leading-relaxed">{STEPS[activeStep].desc}</p>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#BAF247] block">Business Benefit</span>
              <p className="text-[#A1A1AA] leading-relaxed">{STEPS[activeStep].action}</p>
            </div>
          </div>
        </div>

        {/* Operational Outcome Strip */}
        <div className="p-3 rounded-lg bg-[#0E1322] border border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#71717A]">
          <span className="text-white">Outcome: Zero repeated manual copy-pasting for orders and emails.</span>
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev + 1) % STEPS.length)}
            className="text-[11px] text-[#BAF247] hover:underline flex items-center gap-1"
          >
            <span>Next automation step</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 04 // BUSINESS AUTOMATION &amp; INTEGRATIONS</span>
        <span className="text-white">REPETITIVE WORK AUTOMATED</span>
      </div>
    </div>
  );
};

export default OrderAutomationConceptPreview;

