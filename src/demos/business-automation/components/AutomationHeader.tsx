"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, RotateCcw, AlertCircle, Workflow, CheckCircle2 } from "lucide-react";
import { useAutomationDemo } from "../AutomationContext";

export const AutomationHeader: React.FC = () => {
  const { resetDemoData } = useAutomationDemo();

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      {/* Top Demonstration Notice Bar */}
      <div className="bg-slate-900 text-white px-4 py-2 text-xs flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-lime-400/20 text-lime-300 border border-lime-400/30 text-[11px] font-semibold">
            <AlertCircle className="w-3.5 h-3.5" />
            Interactive workflow demonstration — simulated data
          </span>
          <span className="text-slate-400 hidden sm:inline">
            Automated e-commerce order processing &bull; Multi-system event synchronization
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href="/#automation"
            className="inline-flex items-center gap-1.5 text-lime-400 hover:text-lime-300 font-medium transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to BOLXOLVE Website</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Reset all demonstration orders and workflow history to initial state?")) {
                resetDemoData();
              }
            }}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            title="Reset demonstration data"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
        </div>
      </div>

      {/* Main Operational Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-slate-900 text-[#BAF247] flex items-center justify-center shadow-sm">
            <Workflow className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 leading-tight">
                Automated Order Processing Engine
              </h1>
              <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-lime-50 text-lime-800 border border-lime-200">
                Service 04 &bull; Automation
              </span>
            </div>
            <p className="text-xs text-slate-500">
              E-Commerce Order Lifecycle &bull; Automated Notifications, Inventory &amp; Fulfilment Dispatch
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Zero Manual Touchpoints</span>
          </div>
          <Link
            href="/#contact"
            className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs transition-colors shadow-sm"
          >
            Inquire About Automation &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
};

export default AutomationHeader;

