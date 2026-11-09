"use client";

import React, { useState } from "react";
import { Layers, Database, ShieldCheck, Code2, Server, ArrowUpRight, Check } from "lucide-react";

export const ScalableArchitectureVisual: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number>(0);

  const layers = [
    {
      id: "presentation",
      name: "Layer 03 // Presentation & Client Tier",
      icon: Code2,
      focus: "Responsive User Experience & Accessibility",
      traits: ["Component-Driven Layouts", "Optimistic State Updates", "Progressive Performance"],
      description:
        "Clean separation between visual presentation and business logic, allowing interfaces to evolve without disrupting underlying operations.",
    },
    {
      id: "services",
      name: "Layer 02 // Application Logic & Workflows",
      icon: Server,
      focus: "Modular Business Services & Validations",
      traits: ["Isolated Service Boundaries", "Strict Schema Validation", "Role-Based Access"],
      description:
        "Discrete business service controllers designed so new operational features can be integrated without rewriting established workflows.",
    },
    {
      id: "data",
      name: "Layer 01 // Data Layer & Infrastructure",
      icon: Database,
      focus: "Relational Integrity & Reliable Storage",
      traits: ["ACID-Compliant Schemas", "Structured Database Migrations", "Point-in-Time Recovery"],
      description:
        "Structured data architectures designed with strict relational constraints and indexed queries to ensure long-term data consistency.",
    },
  ];

  return (
    <div className="w-full rounded-xl bg-[#080D1A] border border-[#1E2638] overflow-hidden shadow-2xl p-5 sm:p-7 space-y-6 select-none">
      {/* Architecture Header */}
      <div className="flex items-center justify-between border-b border-[#1E2638] pb-3 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#BAF247]" />
          <span className="text-white font-medium">LAYERED_ARCHITECTURE_BLUEPRINT</span>
        </div>
        <span className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
          System Longevity
        </span>
      </div>

      {/* Layered Stack Display */}
      <div className="space-y-2.5">
        {layers.map((layer, index) => {
          const isSelected = activeLayer === index;
          const IconComponent = layer.icon;
          return (
            <div
              key={layer.id}
              onClick={() => setActiveLayer(index)}
              className={`p-3.5 sm:p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? "bg-[#101522] border-[#BAF247]/50 shadow-[0_4px_20px_rgba(186,242,71,0.06)]"
                  : "bg-[#050915] border-[#1E2638] hover:border-[#2A3449]"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded flex items-center justify-center shrink-0 transition-colors ${
                      isSelected
                        ? "bg-[#BAF247]/10 text-[#BAF247] border border-[#BAF247]/30"
                        : "bg-[#101522] text-[#71717A] border border-[#1E2638]"
                    }`}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#71717A] block">
                      {layer.name}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {layer.focus}
                    </h4>
                  </div>
                </div>

                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded shrink-0 hidden sm:inline-block ${
                    isSelected ? "bg-[#BAF247]/10 text-[#BAF247]" : "bg-[#101522] text-[#71717A]"
                  }`}
                >
                  {isSelected ? "Active Layer" : "Inspect"}
                </span>
              </div>

              {isSelected && (
                <div className="mt-3 pt-3 border-t border-[#1E2638] space-y-2">
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {layer.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1 text-[10px] font-mono text-[#D4D4D8]">
                    {layer.traits.map((trait) => (
                      <span
                        key={trait}
                        className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#050915] border border-[#1E2638]"
                      >
                        <Check className="w-3 h-3 text-[#BAF247]" />
                        <span>{trait}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Longevity Principle Strip */}
      <div className="p-3 rounded-lg bg-[#050915] border border-[#1E2638] flex items-center justify-between text-[11px] font-mono text-[#71717A]">
        <span>ARCHITECTURAL PRINCIPLE:</span>
        <span className="text-[#BAF247]">Maintainable foundations that adapt as needs change</span>
      </div>
    </div>
  );
};

export default ScalableArchitectureVisual;
