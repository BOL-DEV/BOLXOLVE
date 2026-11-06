"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, UtensilsCrossed } from "lucide-react";

export const RestaurantSolutionPreview: React.FC = () => {
  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Bar with Project Name and Blank Link */}
      <div className="px-4 py-3 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold text-white">
            Savory Table &bull; Restaurant Management &amp; Table QR Ordering
          </span>
        </div>

        {/* Blank Link as requested */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#BAF247]/10 hover:bg-[#BAF247]/20 border border-[#BAF247]/30 text-[#BAF247] font-semibold text-xs transition-colors cursor-pointer"
          title="Live Platform Preview"
        >
          <span>Visit Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Visual Showcase (Pure Screenshot Viewport) */}
      <div className="p-3 sm:p-4 bg-[#070B16]">
        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl">
          {/* Full-bleed Live Screenshot Viewport */}
          <div className="relative w-full aspect-[16/9] bg-[#050915] overflow-hidden group">
            <Image
              src="/showcase/restaurant-dashboard.jpg"
              alt="Savory Table restaurant management and table QR ordering platform screenshot"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
            />
          </div>

          {/* Clean Minimal Caption Strip */}
          <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm tracking-tight">
                  Savory Table &bull; Restaurant Operations &amp; QR Ordering Platform
                </h4>
                <span className="text-[11px] text-[#BAF247] font-mono">&bull; Bespoke Operational Software</span>
              </div>
              <p className="text-[11px] text-[#A1A1AA]">
                Unified platform for table QR ordering, real-time sales tracking, and live floor operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSolutionPreview;
