"use client";

import React, { useState } from "react";
import {
  History,
  CheckCircle2,
  Clock,
  Eye,
  Mail,
  Receipt,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useAutomationDemo, formatNaira } from "../AutomationContext";
import { AutomationOrder } from "../types";
import NotificationPreviewsModal from "./NotificationPreviewsModal";

export const OrderHistoryTable: React.FC = () => {
  const { state } = useAutomationDemo();
  const [inspectOrder, setInspectOrder] = useState<AutomationOrder | null>(null);

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 text-slate-700" />
            <h3 className="font-bold text-slate-900 text-sm">Demonstration Order History</h3>
          </div>
          <p className="text-xs text-slate-500">
            {state.orders.length} orders processed with automated notifications &amp; stock locks
          </p>
        </div>

        <span className="text-[11px] font-mono bg-slate-100 text-slate-700 px-2.5 py-1 rounded">
          Sync Status: Consistent Sample Dataset
        </span>
      </div>

      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 text-slate-600 font-mono text-[11px] border-b border-slate-200">
            <tr>
              <th className="py-2.5 px-4">Order ID</th>
              <th className="py-2.5 px-4">Timestamp</th>
              <th className="py-2.5 px-4">Customer</th>
              <th className="py-2.5 px-4">Items Summary</th>
              <th className="py-2.5 px-4 text-right">Total (₦)</th>
              <th className="py-2.5 px-4 text-center">Lifecycle Status</th>
              <th className="py-2.5 px-4 text-right">Notifications</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-sans">
            {state.orders.map((ord) => (
              <tr key={ord.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="py-3 px-4 font-mono font-bold text-slate-900">
                  {ord.id}
                </td>
                <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">
                  {ord.createdAt}
                </td>
                <td className="py-3 px-4">
                  <span className="font-medium text-slate-900 block truncate max-w-[160px]">
                    {ord.customerName.replace(" (Demo Customer)", "")}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono truncate block max-w-[160px]">
                    {ord.customerEmail}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600 max-w-[200px]">
                  <span className="truncate block font-mono text-[11px]">
                    {ord.items.map((it) => `${it.quantity}x ${it.productName}`).join(", ")}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    {ord.paymentStatus}
                  </span>
                </td>
                <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">
                  {formatNaira(ord.totalAmount)}
                </td>
                <td className="py-3 px-4 text-center">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    {ord.orderStatus}
                  </span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button
                    type="button"
                    onClick={() => setInspectOrder(ord)}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>Inspect Previews</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notifications Modal */}
      <NotificationPreviewsModal
        order={inspectOrder}
        onClose={() => setInspectOrder(null)}
      />
    </div>
  );
};

export default OrderHistoryTable;

