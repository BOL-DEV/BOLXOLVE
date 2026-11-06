"use client";

import React, { useState } from "react";
import { X, Mail, Bell, FileText, CheckCircle, AlertTriangle, Printer, ExternalLink } from "lucide-react";
import { AutomationOrder } from "../types";
import { formatNaira } from "../AutomationContext";

interface Props {
  order: AutomationOrder | null;
  onClose: () => void;
}

export const NotificationPreviewsModal: React.FC<Props> = ({ order, onClose }) => {
  const [activeTab, setActiveTab] = useState<"email" | "internal" | "slip">("email");

  if (!order) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Top Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-xs bg-white px-2.5 py-1 rounded border border-slate-300 text-slate-800">
                {order.id}
              </span>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Automated Notifications Preview
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Customer: {order.customerName} &bull; Total: {formatNaira(order.totalAmount)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Disclaimer Banner */}
        <div className="px-6 py-2.5 bg-amber-50 border-b border-amber-200 text-amber-800 text-xs flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="font-medium text-[11px]">
            DEMONSTRATION PREVIEW — Simulated notifications. No real emails or SMS are dispatched.
          </span>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 pt-3 border-b border-slate-200 flex items-center gap-2 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("email")}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "email"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Customer Confirmation Email</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("internal")}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "internal"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Bell className="w-3.5 h-3.5" />
            <span>Internal Fulfillment Alert</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("slip")}
            className={`pb-2.5 px-3 font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === "slip"
                ? "border-emerald-600 text-emerald-700"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Digital Packing Slip</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {/* TAB 1: Customer Confirmation Email */}
          {activeTab === "email" && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 space-y-2 font-mono text-[11px]">
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">From:</span>
                  <span className="text-slate-800 font-medium">orders@fashionstore-demo.com (Simulated)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-1.5">
                  <span className="text-slate-500">To:</span>
                  <span className="text-slate-800 font-medium">{order.customerEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Subject:</span>
                  <span className="text-emerald-700 font-semibold">{order.notifications.customerEmailSubject}</span>
                </div>
              </div>

              {/* Rendered Email Body Mockup */}
              <div className="border border-slate-200 rounded-xl p-5 bg-white space-y-4 shadow-xs font-sans text-slate-700">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="font-bold text-slate-900 text-sm">BOLXOLVE Retail Engine</span>
                  <span className="text-[11px] text-slate-400 font-mono">Auto-Generated Receipt</span>
                </div>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Thank you for your order, {order.customerName.replace(" (Demo Customer)", "")}!</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {order.notifications.customerEmailBody}
                  </p>
                </div>

                {/* Itemized Order Table */}
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 font-mono text-[10px] border-b border-slate-200">
                      <tr>
                        <th className="py-2 px-3">Item Description</th>
                        <th className="py-2 px-3 text-center">Qty</th>
                        <th className="py-2 px-3 text-right">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {order.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="py-2.5 px-3 font-medium text-slate-800">{item.productName}</td>
                          <td className="py-2.5 px-3 text-center font-mono font-bold">{item.quantity}</td>
                          <td className="py-2.5 px-3 text-right font-mono">{formatNaira(item.totalPrice)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-slate-100 font-mono">
                  <span className="text-slate-600">Total Settled:</span>
                  <span className="text-base font-bold text-slate-900">{formatNaira(order.totalAmount)}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Internal Fulfillment Alert */}
          {activeTab === "internal" && (
            <div className="space-y-4">
              <div className="bg-slate-900 text-white rounded-xl p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-300 font-bold">{order.notifications.internalChannel}</span>
                  </div>
                  <span className="text-[10px] text-slate-400">Automated Bot &bull; Just now</span>
                </div>

                <div className="space-y-1.5 font-sans">
                  <p className="font-semibold text-lime-400">{order.notifications.internalAlertTitle}</p>
                  <p className="text-slate-300 text-xs leading-relaxed">{order.notifications.internalAlertBody}</p>
                </div>

                <div className="bg-slate-800/80 rounded-lg p-3 space-y-1.5 border border-slate-700 text-[11px]">
                  <div className="flex justify-between text-slate-300">
                    <span>Customer Reference:</span>
                    <span className="text-white font-mono">{order.customerName}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Priority Queue:</span>
                    <span className="text-emerald-400 font-semibold">{order.notifications.dispatchPriority}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Inventory Action:</span>
                    <span className="text-lime-300">Physical deduction locked &bull; Nominal</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Digital Packing Manifest Slip */}
          {activeTab === "slip" && (
            <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 space-y-4 text-xs">
              <div className="flex items-start justify-between border-b border-slate-200 pb-3">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">DEPOT FULFILLMENT PACKING SLIP</h4>
                  <p className="text-[11px] text-slate-500 font-mono">Manifest ID: {order.notifications.packingSlipId}</p>
                </div>
                <div className="text-right">
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-mono text-[10px] font-bold">
                    READY FOR PACKING
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-1">{order.createdAt}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] font-mono bg-white p-3 rounded-lg border border-slate-200">
                <div>
                  <span className="text-slate-400 block">DESTINATION CUSTOMER:</span>
                  <span className="font-semibold text-slate-800">{order.customerName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">FULFILLMENT DEPOT:</span>
                  <span className="font-semibold text-slate-800">Lagos Central Hub #01</span>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono uppercase text-slate-500 font-bold">Line Items Pick-List:</span>
                <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="p-2.5 border-b last:border-0 border-slate-100 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" defaultChecked className="rounded text-emerald-600 focus:ring-emerald-500" />
                        <span className="font-medium text-slate-800">{item.productName}</span>
                      </div>
                      <span className="font-mono font-bold text-slate-900">{item.quantity} units</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            Event Log ID: EVT-{order.id.replace("ORD-", "")}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Preview</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPreviewsModal;

