"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShoppingBag, Globe, CreditCard } from "lucide-react";

export const ArgyrPreview: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-[16/11] rounded-xl bg-[#050915] border border-[#1E2638] overflow-hidden p-4 sm:p-5 flex flex-col justify-between select-none shadow-[0_12px_32px_rgba(0,0,0,0.6)] group">
      {/* Background Matrix */}
      <div className="absolute inset-0 bg-tech-grid opacity-25 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pb-2.5 border-b border-[#1E2638] text-[10px] font-mono">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
          <span className="text-white font-semibold">ARGYR &bull; WORLDWIDE STOREFRONT</span>
        </div>
        <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-[#71717A]">
          COMMERCE BLUEPRINT
        </span>
      </div>

      {/* Product Discovery & Checkout Mockup */}
      <div className="relative z-10 my-auto py-2 space-y-2.5">
        <div className="grid grid-cols-12 gap-3 p-3 rounded-lg bg-[#101522]/90 border border-[#1E2638] items-center">
          {/* Left: Footwear Silhouette Wireframe Container */}
          <div className="col-span-5 h-28 rounded-md bg-[#050915] border border-[#1E2638] flex flex-col items-center justify-center p-2 relative overflow-hidden">
            {/* Elegant stylized shoe contour lines */}
            <svg
              viewBox="0 0 100 60"
              className="w-20 h-14 text-[#BAF247]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                d="M10 45 C20 45, 30 40, 45 40 C60 40, 75 35, 85 20 C88 15, 92 18, 90 25 C88 32, 85 45, 80 48 C70 50, 20 50, 10 48 Z"
                strokeDasharray="1 1"
              />
              <path d="M10 48 L85 48" strokeWidth="2" />
            </svg>
            <span className="text-[8px] font-mono text-[#71717A] mt-1">PRODUCT NO. 01</span>
          </div>

          {/* Right: Specifications & Bag Trigger */}
          <div className="col-span-7 space-y-2">
            <div>
              <span className="text-[8px] font-mono uppercase text-[#71717A] block">
                FOOTWEAR COLLECTION
              </span>
              <h5 className="text-xs font-bold text-white tracking-tight">
                Vanguard High-Top Prototype
              </h5>
            </div>

            {/* Size Matrix */}
            <div className="flex items-center space-x-1 text-[9px] font-mono">
              <span className="w-5 h-5 rounded bg-[#050915] border border-[#1E2638] flex items-center justify-center text-[#71717A]">
                41
              </span>
              <span className="w-5 h-5 rounded bg-[#151B2B] border border-[#BAF247] flex items-center justify-center text-white font-bold">
                42
              </span>
              <span className="w-5 h-5 rounded bg-[#050915] border border-[#1E2638] flex items-center justify-center text-[#71717A]">
                43
              </span>
              <span className="w-5 h-5 rounded bg-[#050915] border border-[#1E2638] flex items-center justify-center text-[#71717A]">
                44
              </span>
            </div>

            {/* Instant Cart Button */}
            <div className="w-full h-6 rounded bg-[#BAF247] flex items-center justify-between px-2 text-[9px] font-mono font-bold text-[#050915]">
              <span className="flex items-center gap-1">
                <ShoppingBag className="w-3 h-3 text-[#050915]" /> ADD TO BAG
              </span>
              <span>&pound;220</span>
            </div>
          </div>
        </div>

        {/* Global Multi-Currency Payment Rail Strip */}
        <div className="p-2 rounded bg-[#101522]/80 border border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#A1A1AA]">
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-[#BAF247]" /> CURRENCIES: USD &bull; EUR &bull; GBP &bull; JPY
          </span>
          <span className="text-[#BAF247] flex items-center gap-1">
            <CreditCard className="w-3 h-3" /> STRIPE CONNECT
          </span>
        </div>
      </div>

      {/* Telemetry Footer */}
      <div className="relative z-10 pt-2 border-t border-[#1E2638] flex items-center justify-between text-[9px] font-mono text-[#71717A]">
        <span>HEADLESS COMMERCE &bull; GLOBAL CHECKOUT</span>
        <span className="text-[#BAF247]">FAST-LOAD READY</span>
      </div>
    </div>
  );
};

export default ArgyrPreview;

