"use client";

import React from "react";
import Image from "next/image";

export const ZentraPreview: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#BAF247]/40 group">
      {/* Screenshot Viewport */}
      <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden">
        <Image
          src="/showcase/zentra-screenshot.jpg"
          alt="ZENTRA live event management and ticketing platform screenshot"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </div>

      {/* Caption Strip */}
      <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-xs">
        <span className="font-bold text-white tracking-tight">
          ZENTRA  Dynamic Ticketing &amp; Holographic QR Verification
        </span>
        <span className="text-[11px] text-[#BAF247] font-mono">
          Production Platform
        </span>
      </div>
    </div>
  );
};

export default ZentraPreview;
