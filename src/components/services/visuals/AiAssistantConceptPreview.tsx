"use client";

import React, { useState } from "react";
import { Sparkles, FileText, Send, CheckCircle2, Search, ArrowRight } from "lucide-react";

export const AiAssistantConceptPreview: React.FC = () => {
  const [activeQuery, setActiveQuery] = useState<number>(0);

  const DEMO_QUERIES = [
    {
      question: "Summarise our sales this month and highlight any outstanding supplier invoices.",
      answer:
        "Based on authorised records for this month:\n• Total sales: £18,400 across 34 customer orders.\n• 2 supplier invoices are due for review this week (Total: £3,120).\n• Most requested category: Masonry and timber supplies.",
      source: "Authorised Business Data & Accounts Ledger",
    },
    {
      question: "Extract key figures from the uploaded supplier delivery invoice #INV-492.",
      answer:
        "Extracted details from invoice document:\n• Supplier: Northern Timber Co.\n• Invoice Date: 02 November\n• Subtotal: £2,450.00 | VAT: £490.00 | Total Due: £2,940.00\n• Payment Term: 30 days.",
      source: "Automated Document Reading & Data Extraction",
    },
  ];

  return (
    <div className="w-full bg-[#050915] select-none text-white font-sans">
      {/* Top Concept Bar */}
      <div className="px-4 py-2.5 bg-[#090D1A] border-b border-[#1E2638] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#BAF247]" />
          <span className="text-white font-medium">DEMONSTRATION CONCEPT</span>
          <span className="text-[#71717A]">&bull; Intelligent Business Assistant</span>
        </div>
        <span className="text-[11px] text-[#A1A1AA]">
          Document Extraction &amp; Q&amp;A
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-4 sm:p-5 space-y-4 bg-[#070B16]">
        {/* Sample Prompt Selector */}
        <div className="space-y-1.5 text-xs font-mono">
          <span className="text-[10px] uppercase text-[#71717A] tracking-wider block">
            Select a Practical Question to Test:
          </span>
          <div className="flex flex-wrap gap-2">
            {DEMO_QUERIES.map((q, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveQuery(idx)}
                className={`px-3 py-1.5 rounded text-xs transition-colors border text-left ${
                  activeQuery === idx
                    ? "bg-[#1E2638] border-[#BAF247]/50 text-[#BAF247] font-semibold"
                    : "bg-[#0A0F1D] border-[#1E2638] text-[#71717A] hover:text-white"
                }`}
              >
                Sample Task {idx + 1}: {idx === 0 ? "Sales Summary" : "Invoice Extraction"}
              </button>
            ))}
          </div>
        </div>

        {/* Chat / Assistant Interaction Box */}
        <div className="p-4 rounded-lg bg-[#0E1322] border border-[#1E2638] space-y-3 text-xs">
          {/* User Question */}
          <div className="p-3 rounded bg-[#151B2B] border border-[#1E2638] space-y-1">
            <span className="text-[10px] font-mono uppercase text-[#BAF247] block font-semibold">
              Business Owner Prompt:
            </span>
            <p className="text-white font-medium">&ldquo;{DEMO_QUERIES[activeQuery].question}&rdquo;</p>
          </div>

          {/* Assistant Answer */}
          <div className="p-3 rounded bg-[#070B16] border border-[#BAF247]/30 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-[#BAF247] font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#BAF247]" />
                Assistant Response:
              </span>
              <span className="text-[#71717A]">{DEMO_QUERIES[activeQuery].source}</span>
            </div>
            <p className="text-[#D4D4D8] font-mono leading-relaxed whitespace-pre-line text-[11px]">
              {DEMO_QUERIES[activeQuery].answer}
            </p>
          </div>
        </div>

        {/* Note on Data Security */}
        <div className="px-3 py-2 rounded bg-[#0E1322] border border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
          <span>PROTECTED USAGE: ACCESSIBLE ONLY BY AUTHORISED COMPANY STAFF</span>
          <span className="text-[#BAF247]">PRIVATE DATA IS NEVER PUBLIC</span>
        </div>
      </div>

      {/* Concept Footer Bar */}
      <div className="px-4 py-2 bg-[#090D1A] border-t border-[#1E2638] flex items-center justify-between text-[10px] font-mono text-[#71717A]">
        <span>SERVICE 05 &bull; AI &amp; INTELLIGENT SOLUTIONS</span>
        <span className="text-white">PRACTICAL ASSISTANCE FOR ROUTINE TASKS</span>
      </div>
    </div>
  );
};

export default AiAssistantConceptPreview;

