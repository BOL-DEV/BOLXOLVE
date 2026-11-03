"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Mic, CheckSquare, FileText } from "lucide-react";

export const BolmeetPreview: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-5 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)] group">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247] animate-pulse" />
          <span className="text-white font-semibold">BOLMEET AI // WORKSPACE</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#71717A]">
          SYSTEM BLUEPRINT
        </span>
      </div>

      {/* Interactive Meeting Workspace Mockup */}
      <div className="relative z-10 my-auto py-2 space-y-2.5">
        {/* Real-Time Audio Transcription Feed */}
        <div className="p-3 rounded-lg bg-[#101522]/90 border border-[#1E2638] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono text-[#71717A] flex items-center gap-1.5">
              <Mic className="w-3 h-3 text-[#BAF247]" /> LIVE TRANSCRIPTION
            </span>
            {/* Animated Audio Equalizer Waveform */}
            <div className="flex items-center space-x-1">
              {[8, 14, 20, 10, 16, 22, 12, 18, 9].map((height, i) => (
                <motion.span
                  key={i}
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                        scaleY: [0.4, 1.2, 0.4],
                      }
                  }
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    delay: i * 0.1,
                    ease: "easeInOut",
                  }}
                  style={{ height: `${height}px` }}
                  className="w-1 bg-[#BAF247] rounded-full inline-block origin-bottom"
                />
              ))}
            </div>
          </div>

          <p className="text-[11px] font-sans text-white leading-relaxed">
            &ldquo;...agreed on the cloud infrastructure migration schedule. We will deploy the container cluster next Tuesday.&rdquo;
          </p>
        </div>

        {/* AI Synthesis & Actionable Task Extraction Card */}
        <div className="p-3 rounded-lg bg-[#151B2B] border border-[#BAF247]/30 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-mono uppercase tracking-wider text-[#BAF247] font-semibold flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#BAF247]" /> SYNTHESIS ENGINE
            </span>
            <span className="text-[9px] font-mono text-[#A1A1AA]">2 ACTIONS DETECTED</span>
          </div>

          <div className="space-y-1.5 text-[10px] font-mono">
            <div className="flex items-center space-x-2 text-white bg-[#050915] p-1.5 rounded border border-[#1E2638]">
              <CheckSquare className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
              <span className="truncate">Deploy container cluster to production region</span>
            </div>
            <div className="flex items-center space-x-2 text-white bg-[#050915] p-1.5 rounded border border-[#1E2638]">
              <CheckSquare className="w-3.5 h-3.5 text-[#BAF247] shrink-0" />
              <span className="truncate">Distribute executive summary to engineering leads</span>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>WHISPER &bull; LLM EXTRACTION &bull; WEBRTC</span>
        <span className="text-[#BAF247]">REAL-TIME LATENCY: 85ms</span>
      </div>
    </div>
  );
};

export default BolmeetPreview;

