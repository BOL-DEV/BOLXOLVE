"use client";

import React, { useState } from "react";
import { Check, ArrowDown, Sparkles, Filter, Target, Cpu } from "lucide-react";
import { useReducedMotion } from "framer-motion";

export const PurposeFlowVisual: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "01",
      phase: "01 // DISCOVERY",
      title: "Business Problem Analysis",
      detail: "Identify the root operational bottleneck before selecting any tool or framework.",
      badge: "Requirements First",
      metrics: ["Direct Stakeholder Needs", "Zero Speculative Scope"],
    },
    {
      id: "02",
      phase: "02 // EVALUATION",
      title: "Pragmatic Architecture Selection",
      detail: "Select technologies solely based on operational fit, team capability, and longevity.",
      badge: "Appropriate Fit",
      metrics: ["No Trend-Chasing", "Documented Rationale"],
    },
    {
      id: "03",
      phase: "03 // DELIVERY",
      title: "Practical Business Outcome",
      detail: "Deliver a clean, maintainable solution that directly solves the operational challenge.",
      badge: "Measured Value",
      metrics: ["Zero Unnecessary Bloat", "Clear Maintainability"],
    },
  ];

  return (
    <div className="w-full rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl p-5 sm:p-7 space-y-6 select-none">
      {/* Blueprint Top Header Bar */}
      <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
          <span className="text-white font-medium">PURPOSE_DRIVEN_DECISION_FLOW</span>
        </div>
        <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider hidden sm:inline">
          System Blueprint
        </span>
      </div>

      {/* Decision Flow Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isSelected = activeStep === index;
          return (
            <div key={step.id} className="relative">
              <div
                onClick={() => setActiveStep(index)}
                className={`p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#101522] border-[#BAF247]/50 shadow-[0_4px_20px_rgba(186,242,71,0.06)]"
                    : "bg-[#050915] border-[#1E2638] hover:border-[#2A3449]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded border transition-colors ${
                        isSelected
                          ? "bg-[#BAF247]/10 text-[#BAF247] border-[#BAF247]/30"
                          : "bg-[#101522] text-[#71717A] border-[#1E2638]"
                      }`}
                    >
                      {step.id}
                    </span>
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                        {step.phase}
                      </span>
                      <h4 className="text-sm font-bold text-white tracking-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-[#A1A1AA] leading-relaxed pt-0.5">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 hidden sm:inline-block ${
                      isSelected
                        ? "bg-[#BAF247]/10 text-[#BAF247]"
                        : "bg-[#101522] text-[#71717A]"
                    }`}
                  >
                    {step.badge}
                  </span>
                </div>

                {/* Sub-metrics on selected step */}
                {isSelected && (
                  <div className="mt-3 pt-3 border-t border-[#1E2638] flex flex-wrap gap-2 text-[11px] font-mono text-[#D4D4D8]">
                    {step.metrics.map((m) => (
                      <span
                        key={m}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#050915] border border-[#1E2638]"
                      >
                        <Check className="w-3 h-3 text-[#BAF247]" />
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Connecting Down Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="w-3 h-3 text-[#1E2638]" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Engineering Rule Strip */}
      <div className="p-3 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
        <span>ENGINEERING FILTER:</span>
        <span className="text-[#BAF247]">Every line of code serves an operational need</span>
      </div>
    </div>
  );
};

export default PurposeFlowVisual;
