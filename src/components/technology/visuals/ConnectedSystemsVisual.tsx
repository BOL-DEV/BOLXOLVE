"use client";

import React, { useState } from "react";
import { ArrowLeftRight, Check, Zap, CreditCard, Network, Layers, RefreshCw } from "lucide-react";

export const ConnectedSystemsVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number>(0);

  const integrationNodes = [
    {
      id: "api",
      title: "REST & Webhook APIs",
      category: "Data Exchange",
      icon: Network,
      protocol: "JSON / HTTPS",
      description: "Standardized endpoints ensuring secure, structured communication across platforms.",
      status: "Bidirectional Sync",
    },
    {
      id: "payments",
      title: "Payment Gateways",
      category: "Financial Routing",
      icon: CreditCard,
      protocol: "PCI-Compliant / Webhooks",
      description: "Direct integration with authorized gateways for automated transaction settlement.",
      status: "Instant Settlement",
    },
    {
      id: "external",
      title: "Third-Party Services",
      category: "Platform Feeds",
      icon: Layers,
      protocol: "OAuth 2.0 / API Keys",
      description: "Connecting operational software with ERPs, accounting systems, and external tools.",
      status: "Interoperable",
    },
    {
      id: "workflows",
      title: "Automated Workflows",
      category: "Orchestration",
      icon: Zap,
      protocol: "Event Triggers",
      description: "Automated alerts, PDF voucher dispatch, and real-time operational notifications.",
      status: "Event-Driven",
    },
  ];

  const current = integrationNodes[activeNode];

  return (
    <div className="w-full rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl p-5 sm:p-7 space-y-6 select-none">
      {/* Network Header */}
      <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
          <span className="text-white font-medium">CONNECTED_SYSTEMS_NETWORK</span>
        </div>
        <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
          Hub &amp; Nodes
        </span>
      </div>

      {/* Network Nodes Grid */}
      <div className="grid grid-cols-2 gap-2.5">
        {integrationNodes.map((node, index) => {
          const isSelected = activeNode === index;
          const IconComponent = node.icon;
          return (
            <button
              key={node.id}
              type="button"
              onClick={() => setActiveNode(index)}
              className={`p-3.5 rounded-lg border text-left transition-all duration-150 flex flex-col justify-between space-y-2.5 ${
                isSelected
                  ? "bg-[#101522] border-[#BAF247]/50 shadow-[0_4px_16px_rgba(186,242,71,0.08)]"
                  : "bg-[#050915] border-[#1E2638] hover:border-[#2A3449]"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <div
                  className={`w-7 h-7 rounded flex items-center justify-center transition-colors ${
                    isSelected
                      ? "bg-[#BAF247]/10 text-[#BAF247] border border-[#BAF247]/30"
                      : "bg-[#101522] text-[#71717A] border border-[#1E2638]"
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" />
                </div>
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    isSelected ? "bg-[#BAF247]" : "bg-[#1E2638]"
                  }`}
                />
              </div>

              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#71717A] block">
                  {node.category}
                </span>
                <span className="text-xs font-bold text-white block truncate">
                  {node.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Node Detail & Central Hub Conduits */}
      <div className="p-4 rounded-lg bg-[#050915] border border-[#1E2638] space-y-3 font-mono">
        <div className="flex items-center justify-between border-b border-[#1E2638] pb-2 text-[10px]">
          <span className="text-[#71717A] uppercase tracking-wider">Active Conduits:</span>
          <span className="text-[#BAF247] font-semibold flex items-center gap-1.5">
            <ArrowLeftRight className="w-3 h-3" />
            {current.status}
          </span>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-white font-bold">
            <span>{current.title}</span>
            <span className="text-[10px] text-[#A1A1AA] font-normal font-mono">
              Protocol: {current.protocol}
            </span>
          </div>
          <p className="text-xs font-sans text-[#A1A1AA] leading-relaxed pt-1">
            {current.description}
          </p>
        </div>

        <div className="pt-2 border-t border-[#1E2638] flex items-center justify-between text-[10px] text-[#71717A]">
          <span>INTEGRATION ARCHITECTURE</span>
          <span className="text-[#BAF247]">Data exchange between business systems</span>
        </div>
      </div>
    </div>
  );
};

export default ConnectedSystemsVisual;
