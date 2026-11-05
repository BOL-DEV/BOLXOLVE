"use client";

import React, { useState } from "react";
import { ShoppingBag, CreditCard, Check, Truck, ArrowRight } from "lucide-react";

export const EcommerceConceptPreview: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("Black");
  const [selectedSize, setSelectedSize] = useState<string>("UK 9");
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">// Fashion &amp; Footwear Online Store</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Browse, Select, Pay &amp; Track
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Product Viewport */}
          <div className="md:col-span-7 p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#BAF247] block">
                  Footwear Collection
                </span>
                <h4 className="text-base font-bold text-white mt-0.5">
                  Classic Leather Low-Top Sneaker
                </h4>
                <span className="text-xs text-[#71717A]">
                  Item Ref: #FTW-092 &bull; In Stock
                </span>
              </div>
              <span className="text-lg font-bold font-mono text-[#BAF247]">
                £85.00
              </span>
            </div>

            {/* Colour Selector */}
            <div className="space-y-1.5 pt-2 border-t border-[#1E2638] text-xs">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">
                Select Colour: <span className="text-white font-medium">{selectedColor}</span>
              </span>
              <div className="flex items-center gap-2">
                {["Black", "Stone White", "Dark Olive"].map((col) => (
                  <button
                    key={col}
                    type="button"
                    onClick={() => setSelectedColor(col)}
                    className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                      selectedColor === col
                        ? "bg-[#1E2638] text-[#BAF247] border border-[#BAF247]/40"
                        : "bg-[#070B16] text-[#71717A] border border-[#1E2638]"
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-1.5 pt-1 text-xs">
              <span className="text-[10px] font-mono uppercase text-[#71717A] block">
                Select Size (UK): <span className="text-white font-medium">{selectedSize}</span>
              </span>
              <div className="flex items-center gap-1.5 font-mono text-xs">
                {["UK 7", "UK 8", "UK 9", "UK 10", "UK 11"].map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 py-1 rounded text-center transition-colors ${
                      selectedSize === size
                        ? "bg-[#BAF247] text-[#050915] font-bold"
                        : "bg-[#070B16] text-[#A1A1AA] border border-[#1E2638] hover:text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cart, Checkout & Tracking Status */}
          <div className="md:col-span-5 p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 flex flex-col justify-between text-xs">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#BAF247] font-semibold flex items-center gap-1.5">
                <CreditCard className="w-3.5 h-3.5 text-[#BAF247]" />
                Cart &amp; Online Payment
              </span>

              <div className="p-2.5 rounded bg-[#070B16] border border-[#1E2638] space-y-1 font-mono text-[11px]">
                <div className="flex justify-between text-[#A1A1AA]">
                  <span>Item Subtotal:</span>
                  <span className="text-white">£85.00</span>
                </div>
                <div className="flex justify-between text-[#A1A1AA]">
                  <span>Standard Delivery:</span>
                  <span className="text-[#BAF247]">FREE</span>
                </div>
                <div className="flex justify-between text-white font-bold pt-1 border-t border-[#1E2638]">
                  <span>Total Payable:</span>
                  <span className="text-[#BAF247]">£85.00</span>
                </div>
              </div>

              {orderPlaced ? (
                <div className="p-3 rounded bg-[#BAF247]/10 border border-[#BAF247]/30 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[#BAF247] font-bold">
                    <Check className="w-4 h-4" />
                    <span>Order #FSH-928 Confirmed</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#A1A1AA]">
                    <Truck className="w-3 h-3 text-[#BAF247]" />
                    <span>Status: Preparing for dispatch &bull; Tracked delivery</span>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setOrderPlaced(true)}
                  className="w-full py-2.5 rounded bg-[#BAF247] hover:bg-[#A8E035] text-[#050915] font-bold text-xs font-mono transition-colors flex items-center justify-center gap-2"
                >
                  <span>Complete Online Payment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="pt-2 border-t border-[#1E2638] text-[10px] font-mono text-[#71717A]">
              <span>SAMPLE FUNCTIONALITY: ONLINE SHOPPING &amp; ORDER TRACKING</span>
            </div>
          </div>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 03 // E-COMMERCE SOLUTIONS</span>
        <span className="text-white">ONLINE STORES &amp; PAYMENTS</span>
      </div>
    </div>
  );
};

export default EcommerceConceptPreview;

