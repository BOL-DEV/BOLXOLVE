"use client";

import React from "react";
import { ShoppingBag, CreditCard, ShieldCheck, Check, ArrowRight, Zap, RefreshCw } from "lucide-react";

export const EcommerceInterface: React.FC = () => {
  return (
    <div className="w-full bg-[#050915] select-none text-white">
      {/* Header */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2 text-white">
          <ShoppingBag className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold">BOLXOLVE COMMERCE ENGINE</span>
          <span className="text-[#71717A] hidden sm:inline">// High-Throughput Checkout</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-[#BAF247]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
          <span>99.99% Gateway Availability</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="p-4 sm:p-6 bg-[#080D1A] space-y-4">
        {/* KPI Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">24h Volume</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">£84,320.00</span>
            <span className="text-[10px] font-mono text-[#BAF247]">+18.5% throughput</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Checkout Latency</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">1.24s</span>
            <span className="text-[10px] font-mono text-[#BAF247]">Sub-2s edge payment</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Payment Gateway</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">Direct Connect</span>
            <span className="text-[10px] font-mono text-[#71717A]">Zero hold settlement</span>
          </div>
          <div className="p-3 rounded-xl bg-[#101522] border border-[#1E2638]">
            <span className="text-[10px] font-mono uppercase text-[#71717A] block">Conversion Rate</span>
            <span className="text-base font-bold font-mono text-white block mt-0.5">4.82%</span>
            <span className="text-[10px] font-mono text-[#BAF247]">Optimized 1-click UX</span>
          </div>
        </div>

        {/* Realistic Checkout & Settlement Mockup */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Order Basket */}
          <div className="md:col-span-7 p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3 text-xs font-mono">
            <div className="flex items-center justify-between border-b border-[#1E2638] pb-2">
              <span className="text-[11px] font-semibold text-white">Active Order Session #ORD-99124</span>
              <span className="text-[10px] text-[#BAF247] bg-[#BAF247]/10 px-2 py-0.5 rounded border border-[#BAF247]/30">
                Inventory Locked (09:42 remaining)
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center text-[#A1A1AA]">
                <div>
                  <span className="text-white block font-medium">Enterprise Pro License Tier</span>
                  <span className="text-[10px] text-[#71717A]">Annual Subscription • 25 seats</span>
                </div>
                <span className="text-white font-semibold">£3,600.00</span>
              </div>
              <div className="flex justify-between items-center text-[#A1A1AA]">
                <div>
                  <span className="text-white block font-medium">Dedicated Priority SLA Add-on</span>
                  <span className="text-[10px] text-[#71717A]">24/7 Response Architecture</span>
                </div>
                <span className="text-white font-semibold">£1,200.00</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2638] space-y-1 text-[11px]">
              <div className="flex justify-between text-[#71717A]">
                <span>Tax (UK VAT 20%):</span>
                <span className="text-white">£960.00</span>
              </div>
              <div className="flex justify-between font-bold text-white pt-1 border-t border-[#1E2638]">
                <span className="text-[#BAF247]">Total Settled:</span>
                <span className="text-[#BAF247]">£5,760.00</span>
              </div>
            </div>
          </div>

          {/* Payment Routing & Settlement */}
          <div className="md:col-span-5 p-4 rounded-xl bg-[#151B2B] border border-[#1E2638] space-y-3 text-xs font-mono flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-wider text-[#BAF247] font-semibold block">
                Direct Gateway Routing
              </span>
              <div className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-white font-medium">Stripe Connect &bull; Payout</span>
                  <span className="text-[#BAF247]">Instant</span>
                </div>
                <span className="text-[10px] text-[#71717A] block">Settlement ID: ch_3MzQ9k2eZvKYlo2C</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#050915] border border-[#1E2638] space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-white font-medium">Digital Wallets Active</span>
                  <span className="text-white">Apple / Google Pay</span>
                </div>
                <span className="text-[10px] text-[#71717A] block">Zero-friction tokenized checkout</span>
              </div>
            </div>

            <div className="pt-2 border-t border-[#1E2638] flex items-center justify-between text-[10px] text-[#71717A]">
              <span>PCI-DSS LEVEL 1 COMPLIANT</span>
              <span className="text-[#BAF247]">SECURE ROUTE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>ATOMIC INVENTORY &bull; MULTI-CURRENCY ROUTING</span>
        <span className="text-white">BOLXOLVE COMMERCE RUNTIME</span>
      </div>
    </div>
  );
};

export default EcommerceInterface;

