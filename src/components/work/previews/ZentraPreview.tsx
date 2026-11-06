"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, Ticket } from "lucide-react";

export const ZentraPreview: React.FC = () => {
  return (
    <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl transition-all duration-300 hover:border-[#BAF247]/40 group">
      {/* Top Header Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2">
          <Ticket className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">zentra.bolxolve.com</span>
          <span className="text-[#71717A] hidden sm:inline">&bull; White-Label Event Management</span>
        </div>
        <a
          href="https://zentra.bolxolve.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-[10px] text-[#BAF247] hover:underline flex items-center gap-1 font-semibold"
        >
          <span>Live Platform</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Screenshot Viewport */}
      <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden">
        <Image
          src="/showcase/zentra-screenshot.jpg"
          alt="ZENTRA live event management and ticketing platform screenshot"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
        />
      </div>

      {/* Caption Strip */}
      <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-xs">
        <span className="font-bold text-white tracking-tight">
          ZENTRA &bull; Dynamic Ticketing &amp; Holographic QR Verification
        </span>
        <span className="text-[11px] text-[#BAF247] font-mono">
          Production Platform
        </span>
      </div>
    </div>
  );
};

export default ZentraPreview;
