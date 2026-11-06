"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Zap, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import AutomationHeader from "./components/AutomationHeader";
import WorkflowVisualizer from "./components/WorkflowVisualizer";
import OrderCreationForm from "./components/OrderCreationForm";
import OrderHistoryTable from "./components/OrderHistoryTable";
import InventoryOverview from "./components/InventoryOverview";
import WorkflowExecutionLog from "./components/WorkflowExecutionLog";
import { useAutomationDemo } from "./AutomationContext";

export const AutomationApp: React.FC = () => {
  const { totalAutomatedOrders, totalTimeSavedMinutes, activeCatalogStock } = useAutomationDemo();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col">
      {/* Header */}
      <AutomationHeader />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Top 3 KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500">Automated Orders Processed</span>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {totalAutomatedOrders}
              </p>
              <span className="text-[11px] text-emerald-700 font-medium block">
                100% Zero Manual Keying
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500">Staff Time Preserved</span>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {Math.round(totalTimeSavedMinutes / 60 * 10) / 10} hrs
              </p>
              <span className="text-[11px] text-slate-500 block">
                ~8 mins saved per simulated order
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs font-medium text-slate-500">Monitored Stock Units</span>
              <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
                {activeCatalogStock} units
              </p>
              <span className="text-[11px] text-slate-500 block">
                Live multi-channel deduction ledger
              </span>
            </div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Workflow Visualizer (6 Steps Flow) */}
        <WorkflowVisualizer />

        {/* Main Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column (2 Cols): Order Creation + History Table */}
          <div className="lg:col-span-2 space-y-6">
            <OrderCreationForm />
            <OrderHistoryTable />
          </div>

          {/* Right Column (1 Col): Real-Time Inventory Ledger + Audit Log */}
          <div className="space-y-6">
            <InventoryOverview />
            <WorkflowExecutionLog />
          </div>
        </div>
      </main>

      {/* Demo Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-6 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-800">
              Interactive Workflow Demonstration &bull; BOLXOLVE LTD
            </p>
            <p className="text-[11px] text-slate-500">
              Illustrating how multi-step business routines (order logging, email receipts, staff alerts, stock adjustment, packing manifests) can be completely automated.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/#automation"
              className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Business Automation Service</span>
            </Link>
            <Link
              href="/#contact"
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
            >
              Consult on Automation Workflows
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AutomationApp;

