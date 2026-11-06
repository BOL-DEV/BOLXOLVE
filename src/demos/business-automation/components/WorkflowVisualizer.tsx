"use client";

import React from "react";
import {
  Workflow,
  CheckCircle2,
  Clock,
  Database,
  Mail,
  Bell,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { WORKFLOW_STEPS } from "../initialData";
import { useAutomationDemo } from "../AutomationContext";

export const WorkflowVisualizer: React.FC = () => {
  const { execution } = useAutomationDemo();
  const { currentStepId, isRunning, stepMessage, activeOrderId } = execution;

  const nodeIcons = [
    Layers,       // Step 1: Customer Ingestion
    Database,     // Step 2: Order Database
    Mail,         // Step 3: Customer Gateway
    Bell,         // Step 4: Internal Ops
    Package,      // Step 5: Inventory Ledger
    ShieldCheck,  // Step 6: Fulfilment Queue
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-5">
      {/* Visualizer Top Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-slate-900 text-[#BAF247]">
            <Workflow className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm">Automated Event Pipeline</h3>
            <p className="text-xs text-slate-500">
              6-stage synchronous execution lifecycle across connected systems
            </p>
          </div>
        </div>

        {/* Live Execution Status Badge */}
        <div className="flex items-center gap-2">
          {isRunning ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-semibold animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Automating {activeOrderId}...
            </span>
          ) : currentStepId === 7 ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Pipeline Complete &bull; Verified
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200 text-xs font-medium">
              <Clock className="w-3.5 h-3.5" />
              Pipeline Ready &bull; Idle
            </span>
          )}
        </div>
      </div>

      {/* Real-time Status Message Bar */}
      <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-700 truncate">
          <span className="text-emerald-700 font-bold shrink-0">&gt;</span>
          <span className="truncate">{stepMessage}</span>
        </div>
        <span className="text-[11px] text-slate-400 shrink-0">
          Latency: &lt;500ms / node
        </span>
      </div>

      {/* 6 Steps Progression Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3">
        {WORKFLOW_STEPS.map((step, idx) => {
          const StepIcon = nodeIcons[idx] || Workflow;
          const isStepCompleted = currentStepId > step.id || currentStepId === 7;
          const isStepActive = currentStepId === step.id && isRunning;
          const isStepPending = currentStepId < step.id && currentStepId !== 7;

          return (
            <div
              key={step.id}
              className={`rounded-xl border p-3.5 transition-all duration-300 flex flex-col justify-between space-y-3 relative ${
                isStepActive
                  ? "bg-emerald-50/70 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                  : isStepCompleted
                  ? "bg-slate-50/80 border-slate-300 text-slate-800"
                  : "bg-white border-slate-200 text-slate-400 opacity-70"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  STEP 0{step.id}
                </span>
                {isStepCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : isStepActive ? (
                  <span className="w-3 h-3 rounded-full bg-emerald-600 animate-ping" />
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                )}
              </div>

              {/* Node Icon & Name */}
              <div className="space-y-1">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                    isStepActive
                      ? "bg-emerald-600 text-white"
                      : isStepCompleted
                      ? "bg-slate-900 text-[#BAF247]"
                      : "bg-slate-100 text-slate-400"
                  }`}
                >
                  <StepIcon className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-xs text-slate-900 leading-tight pt-1">
                  {step.name}
                </h4>
                <span className="text-[10px] font-mono text-slate-500 block truncate">
                  {step.node}
                </span>
              </div>

              {/* Action Description */}
              <p className="text-[11px] text-slate-600 leading-snug line-clamp-3">
                {step.description}
              </p>

              {/* Status footer */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono">
                <span
                  className={
                    isStepActive
                      ? "text-emerald-700 font-bold"
                      : isStepCompleted
                      ? "text-slate-600"
                      : "text-slate-400"
                  }
                >
                  {isStepActive ? "Executing..." : isStepCompleted ? "Completed" : "Queued"}
                </span>
                <span className="text-slate-400">~{step.simulatedTimeMs}ms</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Architectural Systems Relationship Strip */}
      <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <span className="text-slate-400 text-[11px]">System Topology:</span>
        <div className="flex flex-wrap items-center gap-2 text-[11px]">
          <span className="text-white font-medium">Customer Order</span>
          <ArrowRight className="w-3 h-3 text-[#BAF247]" />
          <span className="text-white font-medium">Order Processing</span>
          <ArrowRight className="w-3 h-3 text-[#BAF247]" />
          <span className="text-white font-medium">Inventory Ledger</span>
          <ArrowRight className="w-3 h-3 text-[#BAF247]" />
          <span className="text-white font-medium">Automated Notifications</span>
          <ArrowRight className="w-3 h-3 text-[#BAF247]" />
          <span className="text-white font-medium">Fulfilment Dispatch</span>
        </div>
      </div>
    </div>
  );
};

export default WorkflowVisualizer;

