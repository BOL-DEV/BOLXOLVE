"use client";

import React from "react";
import { Package, CheckCircle2, AlertTriangle, ArrowUpDown } from "lucide-react";
import { useAutomationDemo, formatNaira } from "../AutomationContext";

export const InventoryOverview: React.FC = () => {
  const { state } = useAutomationDemo();

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-slate-700" />
          <h3 className="font-bold text-slate-900 text-sm">Real-Time Inventory Ledger</h3>
        </div>
        <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
          Auto-Decremented
        </span>
      </div>

      <p className="text-xs text-slate-500">
        When an order completes Step 5, available units are immediately decremented in this central ledger to prevent overselling.
      </p>

      <div className="space-y-2.5">
        {state.products.map((p) => {
          const isLow = p.stock <= 15;

          return (
            <div
              key={p.id}
              className="p-3 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-slate-400 font-bold">{p.sku}</span>
                  <span className="font-semibold text-slate-900">{p.name}</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">
                  Unit Price: {formatNaira(p.price)} &bull; {p.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <span
                    className={`font-mono font-bold text-sm block ${
                      isLow ? "text-amber-600" : "text-slate-800"
                    }`}
                  >
                    {p.stock} in stock
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Physical depot units</span>
                </div>

                {isLow ? (
                  <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 text-[10px] font-medium flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3 text-amber-600" />
                    Low
                  </span>
                ) : (
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Optimal
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InventoryOverview;

