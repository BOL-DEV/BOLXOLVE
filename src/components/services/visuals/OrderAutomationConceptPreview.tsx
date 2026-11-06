"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Workflow,
  CheckCircle2,
  Mail,
  Bell,
  RefreshCw,
  Package,
  Layers,
  Database,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

export const OrderAutomationConceptPreview: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const STEPS = [
    {
      stepNum: "01",
      title: "1. Order Received",
      desc: "Checkout webhook captures customer payload and payment authorization token.",
      action: "Order ingestion starts automatically without manual clerk entry.",
      icon: Layers,
    },
    {
      stepNum: "02",
      title: "2. System Records Order",
      desc: "Central database creates relational order entity and assigns tracking reference ID.",
      action: "Permanent transaction lock committed in central database.",
      icon: Database,
    },
    {
      stepNum: "03",
      title: "3. Customer Confirmation",
      desc: "Automated branded confirmation email and receipt with tracking link is generated.",
      action: "Customer receives instant reassurance with zero staff involvement.",
      icon: Mail,
    },
    {
      stepNum: "04",
      title: "4. Business Alert Sent",
      desc: "Fulfillment team receives operational alert on packing dashboard with pick list.",
      action: "Warehouse depot begins fulfillment without waiting for batch printouts.",
      icon: Bell,
    },
    {
      stepNum: "05",
      title: "5. Inventory Updated",
      desc: "Stock quantities are decremented across all sales channels in real time.",
      action: "Prevents overselling and maintains live accurate ledger counts.",
      icon: Package,
    },
    {
      stepNum: "06",
      title: "6. Ready for Fulfilment",
      desc: "Order status marked 'Ready for Processing' and digital packing slip queued.",
      action: "Parcel ready for pickup and final dispatch.",
      icon: ShieldCheck,
    },
  ];

  const ActiveIcon = STEPS[activeStep].icon;

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Workflow className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">// 6-Stage Automated Order Pipeline</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Multi-System Event Synchronization
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Step Indicator Flow (6 Steps) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs font-mono">
          {STEPS.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-lg text-left transition-colors border ${
                activeStep === idx
                  ? "bg-[#101522] border-[#BAF247]/50 text-white shadow-xs"
                  : "bg-[#0A0F1D] border-[#1E2638] text-[#71717A] hover:text-[#A1A1AA]"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] ${activeStep === idx ? "text-[#BAF247] font-bold" : "text-[#71717A]"}`}>
                  STEP {s.stepNum}
                </span>
                <CheckCircle2 className={`w-3.5 h-3.5 ${activeStep >= idx ? "text-[#BAF247]" : "text-[#1E2638]"}`} />
              </div>
              <span className="text-[11px] font-medium block truncate">
                {s.title.replace(/^\d+\.\s*/, "")}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Detailed Inspection */}
        <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3">
          <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-xs font-mono">
            <span className="text-[#BAF247] font-semibold flex items-center gap-2">
              <ActiveIcon className="w-3.5 h-3.5 text-[#BAF247]" />
              {STEPS[activeStep].title}
            </span>
            <span className="text-[10px] text-[#71717A]">
              Automated in &lt;500ms
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

        {/* Interactive Demo Callout Banner */}
        <div className="p-3 bg-gradient-to-r from-[#0E1322] to-[#121A2F] border border-[#BAF247]/30 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs">
          <div>
            <span className="font-semibold text-white block">
              Interactive Workflow Demonstration — Simulated Data
            </span>
            <span className="text-[11px] text-[#A1A1AA]">
              Submit test orders, watch the 6-stage automated sequence execute, inspect notification previews and audit logs.
            </span>
          </div>
          <Link
            href="/demos/business-automation"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#BAF247] hover:bg-[#cbf95c] text-[#050915] font-semibold text-xs transition-colors shrink-0"
          >
            <span>Launch Interactive Simulator</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 04 // BUSINESS AUTOMATION &amp; INTEGRATIONS</span>
        <span className="text-[#BAF247]">FULL WORKFLOW SIMULATOR AVAILABLE</span>
      </div>
    </div>
  );
};

export default OrderAutomationConceptPreview;
