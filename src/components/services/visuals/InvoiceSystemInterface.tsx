"use client";

import React, { useState } from "react";
import {
  Receipt,
  FileCheck,
  Download,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Calendar,
  Layers,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface InvoiceRecord {
  id: string;
  client: string;
  service: string;
  date: string;
  amount: string;
  subtotal: string;
  tax: string;
  status: "settled" | "pending";
  hash: string;
  items: { description: string; amount: string }[];
}

const INVOICE_DATA: InvoiceRecord[] = [
  {
    id: "INV-2025-0841",
    client: "Vanguard Global Logistics Ltd",
    service: "Fleet Routing Architecture & VPC",
    date: "14 Jan 2025",
    amount: "£18,450.00",
    subtotal: "£15,375.00",
    tax: "£3,075.00",
    status: "settled",
    hash: "sha256:7f8b9a21e4b9...c841",
    items: [
      { description: "Core Routing Microservices (Go/PostgreSQL)", amount: "£10,500.00" },
      { description: "Cloud Infrastructure Setup & VPC Isolation", amount: "£4,875.00" },
    ],
  },
  {
    id: "INV-2025-0840",
    client: "Meridian Digital Media Corp",
    service: "Database Replication & Edge API",
    date: "12 Jan 2025",
    amount: "£9,800.00",
    subtotal: "£8,166.67",
    tax: "£1,633.33",
    status: "settled",
    hash: "sha256:99a4c102bf37...d912",
    items: [
      { description: "PostgreSQL Multi-Region Replication", amount: "£5,200.00" },
      { description: "Cloudflare Edge Worker API Caching", amount: "£2,966.67" },
    ],
  },
  {
    id: "INV-2025-0839",
    client: "Kensington Advisory LLP",
    service: "Automated Document Dispatch Pipeline",
    date: "09 Jan 2025",
    amount: "£6,250.00",
    subtotal: "£5,208.33",
    tax: "£1,041.67",
    status: "pending",
    hash: "sha256:33bc88ef1102...f089",
    items: [
      { description: "Headless Chromium PDF Worker Queue", amount: "£3,800.00" },
      { description: "Transactional Email Dispatch & Webhooks", amount: "£1,408.33" },
    ],
  },
  {
    id: "INV-2025-0838",
    client: "Crestview Financial Partners",
    service: "Enterprise Systems Integration & RBAC",
    date: "07 Jan 2025",
    amount: "£14,100.00",
    subtotal: "£11,750.00",
    tax: "£2,350.00",
    status: "settled",
    hash: "sha256:44aa9812cc09...b772",
    items: [
      { description: "Role-Based Access Control Architecture", amount: "£7,500.00" },
      { description: "Accounting ERP Two-Way Sync Bridge", amount: "£4,250.00" },
    ],
  },
];

export const InvoiceSystemInterface: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<"all" | "settled" | "pending">("all");
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string>("INV-2025-0841");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredInvoices = INVOICE_DATA.filter((inv) => {
    if (activeFilter === "settled" && inv.status !== "settled") return false;
    if (activeFilter === "pending" && inv.status !== "pending") return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        inv.id.toLowerCase().includes(q) ||
        inv.client.toLowerCase().includes(q) ||
        inv.service.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const selectedInvoice =
    INVOICE_DATA.find((inv) => inv.id === selectedInvoiceId) || INVOICE_DATA[0];

  return (
    <div className="w-full rounded-2xl bg-[#050915] border border-[#1E2638] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] select-none">
      {/* =========================================================================
          1. APPLICATION HEADER BAR
         ========================================================================= */}
      <div className="px-4 py-3 sm:px-6 bg-[#0B0F1C] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
        {/* Left: Window Identity & Breadcrumb */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E2638]" />
          </div>
          <span className="text-[#1E2638] font-mono">|</span>
          <div className="flex items-center gap-2">
            <Receipt className="w-3.5 h-3.5 text-[#BAF247]" />
            <span className="text-white font-semibold">BOLXOLVE INVOICE ENGINE</span>
            <span className="text-[#71717A] hidden sm:inline">// Apex Logistics Ltd</span>
          </div>
        </div>

        {/* Right: System Telemetry */}
        <div className="flex items-center gap-3 text-[11px] text-[#71717A]">
          <span className="inline-flex items-center gap-1.5 text-[#BAF247]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BAF247] animate-pulse" />
            ACID Ledger Synchronized
          </span>
          <span className="hidden md:inline text-[#1E2638]">|</span>
          <span className="hidden md:inline">Q1 Fiscal Cycle</span>
        </div>
      </div>

      {/* =========================================================================
          2. REVENUE & TRANSACTION SUMMARY CARDS
         ========================================================================= */}
      <div className="p-4 sm:p-6 bg-[#080D1A] border-b border-[#1E2638]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 1: Total Billed */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Total Billed (MTD)</span>
              <span className="text-[#BAF247] font-semibold">+14.2%</span>
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
              £142,850.00
            </div>
            <div className="text-[10px] font-mono text-[#71717A]">
              Across 388 commercial invoices
            </div>
          </div>

          {/* Card 2: Settled Volume */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Settled Revenue</span>
              <CheckCircle2 className="w-3 h-3 text-[#BAF247]" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
              £130,430.00
            </div>
            <div className="text-[10px] font-mono text-[#BAF247]">
              384 cleared receipts (91.3%)
            </div>
          </div>

          {/* Card 3: Pending Receivables */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>Pending Clearance</span>
              <Clock className="w-3 h-3 text-[#A8E035]" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
              £12,420.00
            </div>
            <div className="text-[10px] font-mono text-[#71717A]">
              4 corporate wires in transit
            </div>
          </div>

          {/* Card 4: Tax / VAT */}
          <div className="p-3 sm:p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono uppercase text-[#71717A]">
              <span>VAT Liability (20%)</span>
              <ShieldCheck className="w-3 h-3 text-[#BAF247]" />
            </div>
            <div className="text-lg sm:text-xl font-bold font-mono text-white tracking-tight">
              £23,808.33
            </div>
            <div className="text-[10px] font-mono text-[#71717A]">
              Auto-calculated &amp; audited
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          3. BUSINESS MANAGEMENT CONTROLS & ACTION BAR
         ========================================================================= */}
      <div className="px-4 py-3 sm:px-6 bg-[#050915] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-3">
        {/* Status Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-lg bg-[#101522] border border-[#1E2638] text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={cn(
              "px-2.5 py-1 rounded transition-colors",
              activeFilter === "all"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            )}
          >
            All Records (388)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("settled")}
            className={cn(
              "px-2.5 py-1 rounded transition-colors",
              activeFilter === "settled"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            )}
          >
            Settled (384)
          </button>
          <button
            type="button"
            onClick={() => setActiveFilter("pending")}
            className={cn(
              "px-2.5 py-1 rounded transition-colors",
              activeFilter === "pending"
                ? "bg-[#1E2638] text-[#BAF247] font-semibold"
                : "text-[#71717A] hover:text-white"
            )}
          >
            Pending Wire (4)
          </button>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-2 grow sm:grow-0 justify-end">
          <div className="relative w-full sm:w-48">
            <Search className="w-3.5 h-3.5 text-[#71717A] absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search invoices..."
              className="w-full bg-[#101522] border border-[#1E2638] rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-[#71717A] focus:outline-none focus:border-[#BAF247]/60 font-mono"
            />
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <span className="px-2.5 py-1.5 rounded-lg bg-[#101522] border border-[#1E2638] text-[11px] font-mono text-[#A1A1AA] flex items-center gap-1.5">
              <Download className="w-3 h-3 text-[#BAF247]" />
              Export CSV
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. INVOICE RECORDS TABLE & LIVE VOUCHER STAGE (SPLIT VIEW)
         ========================================================================= */}
      <div className="grid grid-cols-1 xl:grid-cols-12 divide-y xl:divide-y-0 xl:divide-x divide-[#1E2638]">
        {/* Table Viewport (7 Cols on wide) */}
        <div className="xl:col-span-7 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#1E2638] bg-[#0A0F1D] text-[10px] font-mono text-[#71717A] uppercase tracking-wider">
                <th className="py-2.5 px-4 font-medium">Invoice ID</th>
                <th className="py-2.5 px-3 font-medium">Client Organisation</th>
                <th className="py-2.5 px-3 font-medium text-right">Amount</th>
                <th className="py-2.5 px-3 font-medium text-center">Status</th>
                <th className="py-2.5 px-4 font-medium text-right">Voucher</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E2638]/70 font-mono">
              {filteredInvoices.map((inv) => {
                const isSelected = inv.id === selectedInvoice.id;
                return (
                  <tr
                    key={inv.id}
                    onClick={() => setSelectedInvoiceId(inv.id)}
                    className={cn(
                      "cursor-pointer transition-colors group",
                      isSelected
                        ? "bg-[#151B2B]"
                        : "hover:bg-[#101522]/70 bg-transparent"
                    )}
                  >
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={cn(
                            "w-1.5 h-1.5 rounded-full shrink-0",
                            isSelected ? "bg-[#BAF247]" : "bg-[#1E2638] group-hover:bg-[#71717A]"
                          )}
                        />
                        <span className="font-semibold text-white group-hover:text-[#BAF247] transition-colors">
                          {inv.id}
                        </span>
                      </div>
                      <span className="text-[10px] text-[#71717A] block pl-3.5">
                        {inv.date}
                      </span>
                    </td>

                    <td className="py-3 px-3">
                      <span className="text-white font-medium block truncate max-w-[180px]">
                        {inv.client}
                      </span>
                      <span className="text-[10px] text-[#71717A] block truncate max-w-[180px]">
                        {inv.service}
                      </span>
                    </td>

                    <td className="py-3 px-3 text-right">
                      <span className="font-semibold text-white block">
                        {inv.amount}
                      </span>
                      <span className="text-[10px] text-[#71717A]">
                        incl. VAT
                      </span>
                    </td>

                    <td className="py-3 px-3 text-center">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold",
                          inv.status === "settled"
                            ? "bg-[#BAF247]/10 text-[#BAF247] border border-[#BAF247]/30"
                            : "bg-amber-400/10 text-amber-300 border border-amber-400/30"
                        )}
                      >
                        {inv.status === "settled" ? "Settled" : "Pending Wire"}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#A1A1AA] group-hover:text-[#BAF247] transition-colors">
                        View
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {filteredInvoices.length === 0 && (
            <div className="py-8 text-center text-xs font-mono text-[#71717A]">
              No invoices matched your filter criteria.
            </div>
          )}
        </div>

        {/* Live Voucher Inspection Sub-Stage (5 Cols on wide) */}
        <div className="xl:col-span-5 p-4 sm:p-5 bg-[#080D1A] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#1E2638] text-xs font-mono">
            <span className="text-[11px] uppercase tracking-wider text-[#BAF247] font-semibold flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-[#BAF247]" />
              Audit Voucher Inspection
            </span>
            <span className="text-[10px] text-[#71717A]">
              {selectedInvoice.id}
            </span>
          </div>

          {/* Voucher Summary Card */}
          <div className="p-4 rounded-xl bg-[#101522] border border-[#1E2638] space-y-3 text-xs font-mono">
            <div>
              <span className="text-[10px] uppercase text-[#71717A] tracking-wider block">
                Billed Entity
              </span>
              <span className="text-white font-semibold text-sm">
                {selectedInvoice.client}
              </span>
            </div>

            <div className="space-y-1.5 pt-2 border-t border-[#1E2638]/70">
              <span className="text-[10px] uppercase text-[#71717A] tracking-wider block mb-1">
                Line Items
              </span>
              {selectedInvoice.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-[#A1A1AA] text-[11px]">
                  <span className="truncate pr-2">{item.description}</span>
                  <span className="text-white shrink-0">{item.amount}</span>
                </div>
              ))}
            </div>

            <div className="space-y-1 pt-2 border-t border-[#1E2638] text-[11px]">
              <div className="flex justify-between text-[#71717A]">
                <span>Net Subtotal:</span>
                <span className="text-white">{selectedInvoice.subtotal}</span>
              </div>
              <div className="flex justify-between text-[#71717A]">
                <span>VAT (20.0%):</span>
                <span className="text-white">{selectedInvoice.tax}</span>
              </div>
              <div className="flex justify-between text-white font-bold pt-1.5 border-t border-[#1E2638] text-sm">
                <span className="text-[#BAF247]">Total Settled:</span>
                <span className="text-[#BAF247]">{selectedInvoice.amount}</span>
              </div>
            </div>

            {/* Cryptographic Verification Seal */}
            <div className="pt-2 border-t border-[#1E2638]/70 space-y-1 text-[9px] text-[#71717A]">
              <div className="flex items-center justify-between">
                <span>AUDIT HASH:</span>
                <span className="text-white">{selectedInvoice.hash}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>SECURITY PROTOCOL:</span>
                <span className="text-[#BAF247]">ED25519 IMMUTABLE SIGNED</span>
              </div>
            </div>
          </div>

          {/* Quick Action Footer */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#71717A]">
            <span>Generated in 0.28s</span>
            <span className="text-white font-medium flex items-center gap-1 hover:text-[#BAF247] cursor-pointer">
              <Download className="w-3 h-3 text-[#BAF247]" /> Download Official PDF
            </span>
          </div>
        </div>
      </div>

      {/* =========================================================================
          5. BOTTOM STATUS BAR
         ========================================================================= */}
      <div className="px-4 py-2.5 sm:px-6 bg-[#0B0F1C] border-t border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-[#71717A]">
        <span>CHRONOLOGICAL TRANSACTION LEDGER // 100% RECONCILED</span>
        <span className="text-white">BOLXOLVE ENTERPRISE CORE ENGINE</span>
      </div>
    </div>
  );
};

export default InvoiceSystemInterface;
