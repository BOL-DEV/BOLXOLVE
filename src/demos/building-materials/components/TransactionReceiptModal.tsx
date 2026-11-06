"use client";

import React from "react";
import { X, Printer, CheckCircle, Building, AlertTriangle } from "lucide-react";
import { Transaction } from "../types";
import { formatNaira } from "../DemoContext";

interface Props {
  transaction: Transaction | null;
  onClose: () => void;
}

export const TransactionReceiptModal: React.FC<Props> = ({ transaction, onClose }) => {
  if (!transaction) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-700 bg-white px-2.5 py-1 rounded border border-slate-300">
              {transaction.id}
            </span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 flex items-center gap-1">
              <CheckCircle className="w-3.5 h-3.5" />
              {transaction.status}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Receipt Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Header Info */}
          <div className="border-b border-slate-200 pb-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-bold text-base text-slate-900">Apex Building Supplies Ltd</h3>
                <p className="text-xs text-slate-500 mt-0.5">Commercial Building &amp; Materials Distribution Depot</p>
                <p className="text-xs text-slate-500">Plot 12 Industrial Avenue, Oshodi-Isolo, Lagos</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Sales Voucher</span>
                <span className="text-xs text-slate-600 block mt-1">{transaction.date}</span>
                <span className="text-xs font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded inline-block mt-1">
                  Payment: {transaction.paymentMethod}
                </span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-3 p-2 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Demonstration Concept Voucher — Generated using internally consistent sample prototype data.</span>
            </div>
          </div>

          {/* Customer Details */}
          <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <span className="text-slate-400 uppercase font-mono text-[10px] block">Customer / Contractor</span>
              <p className="font-semibold text-slate-900 mt-0.5">{transaction.customerName}</p>
              <p className="text-slate-600">{transaction.customerCompany}</p>
            </div>
            <div>
              <span className="text-slate-400 uppercase font-mono text-[10px] block">Fulfillment Details</span>
              <p className="text-slate-700 mt-0.5">{transaction.notes || "Standard Counter Trade Dispatch"}</p>
            </div>
          </div>

          {/* Line Items Table */}
          <div>
            <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider block mb-2 font-mono">
              Itemized Materials
            </span>
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-600 font-mono text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3">Description</th>
                    <th className="py-2.5 px-3 text-right">Unit Price</th>
                    <th className="py-2.5 px-3 text-center">Qty</th>
                    <th className="py-2.5 px-3 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {transaction.items.map((it, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2.5 px-3">
                        <span className="font-medium text-slate-900 block">{it.productName}</span>
                        <span className="text-[11px] text-slate-500">{it.unit}</span>
                      </td>
                      <td className="py-2.5 px-3 text-right text-slate-600 font-mono">
                        {formatNaira(it.unitPrice)}
                      </td>
                      <td className="py-2.5 px-3 text-center font-bold text-slate-800">
                        {it.quantity}
                      </td>
                      <td className="py-2.5 px-3 text-right font-mono font-semibold text-slate-900">
                        {formatNaira(it.totalPrice)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Total Breakdown */}
          <div className="border-t border-slate-200 pt-4 flex flex-col items-end gap-1">
            <div className="w-full sm:w-64 space-y-1.5 text-xs font-mono">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal:</span>
                <span>{formatNaira(transaction.subtotal)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Sales Tax / VAT:</span>
                <span>Included in price</span>
              </div>
              <div className="flex justify-between text-base font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Total Paid:</span>
                <span className="text-emerald-700">{formatNaira(transaction.totalAmount)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Internal Audit Reference: {transaction.id}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 text-xs font-medium transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Voucher</span>
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

export default TransactionReceiptModal;

