"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Package, Truck, ArrowRight, BarChart3, Layers, ExternalLink } from "lucide-react";

export const BuildingMaterialsConceptPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"stock" | "orders" | "suppliers">("stock");

  const INVENTORY = [
    { item: "Elephant Portland Cement (50kg)", category: "Cement", stock: 420, threshold: 100, price: "₦8,500", status: "Healthy" },
    { item: "High-Yield TMT Rebar 12mm (12m)", category: "Reinforcement", stock: 180, threshold: 50, price: "₦13,500", status: "Healthy" },
    { item: "Dulux Trade Emulsion Paint (20L)", category: "Paint & Finishes", stock: 18, threshold: 30, price: "₦34,500", status: "Low Stock" },
    { item: "6-inch Solid Vibrated Blocks", category: "Blocks & Masonry", stock: 1450, threshold: 500, price: "₦480", status: "Healthy" },
  ];

  const ORDERS = [
    { id: "TXN-2025-001", customer: "Engr. Tunde Adeleke", items: "100 Bags Cement, 40 Rebar", total: "₦1,390,000", status: "Completed" },
    { id: "TXN-2025-002", customer: "Alhaji Musa Danjuma", items: "500 Blocks, 50 Bags Cement", total: "₦675,000", status: "Completed" },
  ];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Layers className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">SYSTEM BLUEPRINT</span>
          <span className="text-[#71717A]">Building Materials Operations System</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Single System for Stock, Sales &amp; Staff
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Module Switcher */}
        <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-1">
            <button
              type="button"
              onClick={() => setActiveTab("stock")}
              className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                activeTab === "stock"
                  ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              <Package className="w-3.5 h-3.5" />
              <span>Products &amp; Stock Levels</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("orders")}
              className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                activeTab === "orders"
                  ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Sales &amp; Orders</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("suppliers")}
              className={`px-3 py-1 rounded text-xs transition-colors flex items-center gap-1.5 ${
                activeTab === "suppliers"
                  ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                  : "text-[#71717A] hover:text-white"
              }`}
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Suppliers &amp; Staff</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Products & Stock */}
        {activeTab === "stock" && (
          <div className="rounded-lg bg-[#0E1322] border border-[#1E2638] overflow-x-auto text-xs">
            <table className="w-full min-w-[540px] text-left border-collapse">
              <thead>
                <tr className="border-b border-[#1E2638] bg-[#0A0F1D] text-[10px] font-mono text-[#71717A] uppercase">
                  <th className="py-2 px-3">Product Name</th>
                  <th className="py-2 px-3">Category</th>
                  <th className="py-2 px-3 text-right">Selling Price</th>
                  <th className="py-2 px-3 text-right">In Stock</th>
                  <th className="py-2 px-3 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1E2638]/70 font-mono">
                {INVENTORY.map((row, i) => (
                  <tr key={i} className="hover:bg-[#151B2B]/40">
                    <td className="py-2.5 px-3 font-medium text-white">{row.item}</td>
                    <td className="py-2.5 px-3 text-[#A1A1AA]">{row.category}</td>
                    <td className="py-2.5 px-3 text-right text-[#BAF247]">{row.price}</td>
                    <td className="py-2.5 px-3 text-right text-white font-bold">{row.stock} units</td>
                    <td className="py-2.5 px-3 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] ${
                          row.status === "Healthy"
                            ? "bg-[#BAF247]/10 text-[#BAF247]"
                            : "bg-amber-400/10 text-amber-300"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Sales & Orders */}
        {activeTab === "orders" && (
          <div className="rounded-lg bg-[#0E1322] border border-[#1E2638] p-3 space-y-3 text-xs font-mono">
            {ORDERS.map((ord) => (
              <div key={ord.id} className="p-3 rounded bg-[#070B16] border border-[#1E2638] flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#BAF247] font-bold">{ord.id}</span>
                    <span className="text-white font-medium">{ord.customer}</span>
                  </div>
                  <span className="text-[11px] text-[#71717A] block mt-0.5">{ord.items}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-white block">{ord.total}</span>
                  <span className="text-[10px] text-[#A1A1AA]">{ord.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Suppliers & Staff */}
        {activeTab === "suppliers" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-2">
              <span className="text-[10px] uppercase text-[#BAF247] tracking-wider block font-bold">
                Assigned Suppliers
              </span>
              <div className="space-y-1.5 text-[11px] text-[#D4D4D8]">
                <div className="flex justify-between border-b border-[#1E2638] pb-1">
                  <span>West Coast Cement Mills</span>
                  <span className="text-[#A1A1AA]">Active supplier</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2638] pb-1">
                  <span>Apex Steel &amp; Rebar Rolling</span>
                  <span className="text-[#A1A1AA]">Active supplier</span>
                </div>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-2">
              <span className="text-[10px] uppercase text-[#BAF247] tracking-wider block font-bold">
                Role Permissions &amp; Audit
              </span>
              <div className="space-y-1.5 text-[11px] text-[#D4D4D8]">
                <div className="flex justify-between border-b border-[#1E2638] pb-1">
                  <span>Depot Operators (4)</span>
                  <span className="text-[#A1A1AA]">Stock &amp; Dispatch</span>
                </div>
                <div className="flex justify-between border-b border-[#1E2638] pb-1">
                  <span>Sales &amp; Invoicing (2)</span>
                  <span className="text-[#A1A1AA]">POS &amp; Accounts</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 02  CUSTOM SOFTWARE &amp; BUSINESS SYSTEMS</span>
        <span className="text-[#A1A1AA]">PRODUCTION ARCHITECTURE</span>
      </div>
    </div>
  );
};

export default BuildingMaterialsConceptPreview;
