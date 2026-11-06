"use client";

import React, { useState } from "react";
import {
  ExternalLink,
  QrCode,
  UtensilsCrossed,
  ChefHat,
  Clock,
  CheckCircle2,
  Plus,
  Flame,
  Sparkles,
} from "lucide-react";

interface KitchenTicket {
  id: string;
  table: string;
  timeAgo: string;
  items: { name: string; qty: number }[];
  total: string;
  status: "prep" | "ready" | "served";
}

export const RestaurantSolutionPreview: React.FC = () => {
  const [tickets, setTickets] = useState<KitchenTicket[]>([
    {
      id: "#TK-104",
      table: "Table 04",
      timeAgo: "2m ago",
      items: [
        { name: "Smoky Party Jollof & Plantain", qty: 2 },
        { name: "Grilled Peppered Beef Suya", qty: 1 },
        { name: "Chilled Chapman Punch", qty: 2 },
      ],
      total: "₦18,500",
      status: "prep",
    },
    {
      id: "#TK-103",
      table: "Table 09",
      timeAgo: "8m ago",
      items: [
        { name: "Whole Roasted Catfish Pepper Soup", qty: 1 },
        { name: "Fried Yam Sticks & Sauce", qty: 1 },
      ],
      total: "₦22,000",
      status: "ready",
    },
    {
      id: "#TK-102",
      table: "Table 02",
      timeAgo: "16m ago",
      items: [
        { name: "Seafood Okro Deluxe & Pounded Yam", qty: 1 },
        { name: "Fresh Zobo Mocktail", qty: 2 },
      ],
      total: "₦16,000",
      status: "served",
    },
  ]);

  const [activeTabTable, setActiveTabTable] = useState<string>("Table 04");
  const [orderSentAnimation, setOrderSentAnimation] = useState<boolean>(false);

  const handleSimulateNewOrder = () => {
    const nextNum = tickets.length + 105;
    const newTicket: KitchenTicket = {
      id: `#TK-${nextNum}`,
      table: activeTabTable,
      timeAgo: "Just now",
      items: [
        { name: "Crispy Grilled Chicken & Spiced Rice", qty: 1 },
        { name: "Fresh Passionfruit Mocktail", qty: 1 },
      ],
      total: "₦12,500",
      status: "prep",
    };

    setTickets([newTicket, ...tickets]);
    setOrderSentAnimation(true);
    setTimeout(() => setOrderSentAnimation(false), 3000);
  };

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Bar with Project Name and Blank Link */}
      <div className="px-4 py-3 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <UtensilsCrossed className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="font-semibold text-white">Restaurant QR Ordering &bull; Kitchen Operations Platform</span>
        </div>

        {/* Blank Link as requested */}
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#BAF247]/10 hover:bg-[#BAF247]/20 border border-[#BAF247]/30 text-[#BAF247] font-semibold text-xs transition-colors cursor-pointer"
          title="Interactive Preview"
        >
          <span>Visit Live Site</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Visual Showcase */}
      <div className="p-3 sm:p-4 bg-[#070B16]">
        <div className="rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl">
          {/* Dual Interface Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#1E2638]">
            {/* Left Column (7/12): Live Kitchen & Floor Management Dashboard */}
            <div className="lg:col-span-7 p-4 sm:p-5 space-y-4">
              {/* Dashboard Operational Top Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1E2638] pb-3 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <ChefHat className="w-4 h-4 text-[#BAF247]" />
                  <span className="font-bold text-white text-xs">Live Kitchen Order Display (KDS)</span>
                </div>

                <div className="flex items-center gap-2 text-[10px]">
                  <span className="px-2 py-0.5 rounded bg-[#101522] border border-[#1E2638] text-slate-300">
                    Tables: 8 / 14 Active
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-400 border border-emerald-500/30">
                    Auto-Sync
                  </span>
                </div>
              </div>

              {/* Order Sent Toast Notice */}
              {orderSentAnimation && (
                <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between font-mono animate-in fade-in duration-200">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Table QR scan received! New order sent to kitchen queue.</span>
                  </div>
                  <span className="text-[10px] font-bold">LIVE UPDATE</span>
                </div>
              )}

              {/* Live Kitchen Order Tickets List */}
              <div className="space-y-2.5 max-h-[300px] overflow-y-auto pr-1">
                {tickets.slice(0, 3).map((ticket) => (
                  <div
                    key={ticket.id}
                    className="p-3 rounded-lg bg-[#0D1222] border border-[#1E2638] space-y-2 text-xs transition-colors hover:border-[#BAF247]/30"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 font-mono">
                        <span className="text-white font-bold">{ticket.table}</span>
                        <span className="text-[10px] text-[#71717A]">{ticket.id}</span>
                        <span className="text-[10px] text-[#71717A] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#71717A]" />
                          {ticket.timeAgo}
                        </span>
                      </div>

                      <div>
                        {ticket.status === "prep" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 font-mono">
                            <Flame className="w-3 h-3 text-amber-400" />
                            In Kitchen
                          </span>
                        )}
                        {ticket.status === "ready" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-mono">
                            <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                            Ready to Serve
                          </span>
                        )}
                        {ticket.status === "served" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-400 border border-slate-700 font-mono">
                            Served &bull; Paid
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1 font-mono text-[11px] text-[#D4D4D8] border-t border-[#1E2638]/70 pt-1.5">
                      {ticket.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span>{it.qty}x {it.name}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center text-[11px] font-mono border-t border-[#1E2638]/70 pt-1.5 text-[#71717A]">
                      <span>Table Bill Amount</span>
                      <span className="font-bold text-[#BAF247]">{ticket.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column (5/12): Diner Mobile QR Ordering Simulation */}
            <div className="lg:col-span-5 p-4 sm:p-5 bg-[#0A0E1A] space-y-3.5 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-xs font-mono">
                  <div className="flex items-center gap-1.5 text-white font-medium">
                    <QrCode className="w-3.5 h-3.5 text-[#BAF247]" />
                    <span>Diner Mobile View</span>
                  </div>
                  <span className="text-[10px] text-[#BAF247]">Table QR Scanned</span>
                </div>

                {/* Simulated Smartphone Screen Frame */}
                <div className="rounded-xl bg-[#060913] border border-[#1E2638] p-3.5 space-y-3 text-xs shadow-inner">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-white text-xs">The Copper Pot &bull; Lagos</h5>
                      <span className="text-[10px] font-mono text-[#BAF247]">Table 04 Active Session</span>
                    </div>
                    <div className="w-6 h-6 rounded bg-[#101522] border border-[#1E2638] flex items-center justify-center">
                      <QrCode className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-[#0E1322] border border-[#1E2638] text-[11px] space-y-1.5 font-mono">
                    <span className="text-[10px] uppercase text-[#71717A] block font-bold">Selected from Digital Menu</span>
                    <div className="flex justify-between text-white">
                      <span>1x Grilled Chicken &amp; Spiced Rice</span>
                      <span>₦8,500</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>1x Passionfruit Mocktail</span>
                      <span>₦4,000</span>
                    </div>
                    <div className="flex justify-between border-t border-[#1E2638] pt-1 text-slate-300 font-bold">
                      <span>Total:</span>
                      <span className="text-[#BAF247]">₦12,500</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleSimulateNewOrder}
                    className="w-full py-2 px-3 rounded-lg bg-[#BAF247] hover:bg-[#cbf95c] text-[#050915] font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Send Order to Kitchen</span>
                  </button>
                </div>
              </div>

              {/* Informational Micro-label */}
              <p className="text-[10px] text-[#71717A] text-center font-mono">
                Click button to simulate a diner placing an order from Table 04
              </p>
            </div>
          </div>

          {/* Clean Minimal Caption Strip */}
          <div className="px-4 py-3 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-white text-sm tracking-tight">
                  Savory Table &bull; Restaurant Operations &amp; QR Ordering System
                </h4>
                <span className="text-[11px] text-[#BAF247] font-mono">&bull; Bespoke Operational Software</span>
              </div>
              <p className="text-[11px] text-[#A1A1AA]">
                Diners scan table QR codes to order instantly; kitchen and floor teams receive and track orders in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantSolutionPreview;

