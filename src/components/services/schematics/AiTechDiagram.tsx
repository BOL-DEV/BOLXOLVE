"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export const AiTechDiagram: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] max-w-[560px] mx-auto rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-6 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      {/* Header Bar */}
      <div className="relative z-10 flex items-center justify-between pb-3 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247] animate-pulse" />
          <span className="text-white font-medium">COGNITIVE INFERENCE CLUSTER</span>
        </div>
        <div className="text-[#BAF247]">
          STATUS: INFERENCE NOMINAL
        </div>
      </div>

      {/* Neural Graph Assembly */}
      <div className="relative z-10 my-auto py-3 space-y-4">
        {/* Core Topology Grid */}
        <div className="grid grid-cols-12 gap-3 items-center">
          {/* Vector Embeddings Input */}
          <div className="col-span-4 p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1.5">
            <span className="text-[8px] font-mono text-[#71717A] uppercase block">STAGE 01</span>
            <span className="text-xs font-semibold text-white block">Vector Embedding</span>
            <div className="space-y-1 pt-1">
              <div className="w-full h-1.5 rounded-full bg-[#1E2638]" />
              <div className="w-3/4 h-1.5 rounded-full bg-[#BAF247]/50" />
              <div className="w-1/2 h-1.5 rounded-full bg-[#1E2638]" />
            </div>
            <span className="text-[8px] font-mono text-[#A1A1AA] block pt-1">High-Dimensional</span>
          </div>

          {/* Central Neural Node Processor */}
          <div className="col-span-4 p-3 rounded-lg bg-[#151B2B] border border-[#BAF247]/40 shadow-[0_4px_20px_rgba(186,242,71,0.15)] text-center flex flex-col items-center justify-center relative">
            <span className="text-[8px] font-mono uppercase text-[#BAF247] font-semibold block mb-1">
              MODEL ENGINE
            </span>
            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                    scale: [1, 1.06, 1],
                    boxShadow: [
                      "0 0 10px rgba(186,242,71,0.2)",
                      "0 0 20px rgba(186,242,71,0.4)",
                      "0 0 10px rgba(186,242,71,0.2)",
                    ],
                  }
              }
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              className="w-12 h-12 rounded-full bg-[#050915] border-2 border-[#BAF247] flex items-center justify-center my-1"
            >
              <span className="text-[10px] font-mono font-bold text-[#BAF247]">AI</span>
            </motion.div>
            <span className="text-[9px] font-mono text-white font-medium mt-1">Autonomous Agent</span>
          </div>

          {/* Structured Output & Action Node */}
          <div className="col-span-4 p-2.5 rounded-lg bg-[#101522] border border-[#1E2638] space-y-1.5">
            <span className="text-[8px] font-mono text-[#BAF247] uppercase block">STAGE 03</span>
            <span className="text-xs font-semibold text-white block">Execution Output</span>
            <div className="p-1 rounded bg-[#050915] border border-[#1E2638] text-[8px] font-mono text-[#BAF247]">
              &gt; ACTION_RESOLVED
            </div>
            <span className="text-[8px] font-mono text-[#A1A1AA] block">Deterministic Result</span>
          </div>
        </div>

        {/* Real-World Capability Matrix Readout */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-2 rounded bg-[#101522]/90 border border-[#1E2638] flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#A1A1AA]">Latency / Query:</span>
            <span className="text-[10px] font-mono font-bold text-white">&lt; 85ms</span>
          </div>
          <div className="p-2 rounded bg-[#101522]/90 border border-[#1E2638] flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#A1A1AA]">Data Privacy:</span>
            <span className="text-[10px] font-mono font-bold text-[#BAF247]">Enterprise Zero-Retention</span>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>LLMS &bull; RAG &bull; CUSTOM MODELS &bull; INTEGRATED PIPELINES</span>
        <span className="text-white">COGNITIVE ACTIVE</span>
      </div>
    </div>
  );
};

export default AiTechDiagram;

