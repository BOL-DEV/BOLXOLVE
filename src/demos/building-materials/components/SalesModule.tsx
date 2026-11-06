"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Trash2,
  CheckCircle,
  AlertCircle,
  Receipt,
  User,
  CreditCard,
  Building,
  ArrowRight,
  Printer,
  History,
} from "lucide-react";
import { useBuildingMaterialsDemo, formatNaira } from "../DemoContext";
import { Transaction } from "../types";
import TransactionReceiptModal from "./TransactionReceiptModal";

interface Props {
  isNewSaleOpenInitially?: boolean;
}

export const SalesModule: React.FC<Props> = ({ isNewSaleOpenInitially = false }) => {
  const {
    state,
    createTransaction,
    recentTransactions,
  } = useBuildingMaterialsDemo();

  const [activeSubTab, setActiveSubTab] = useState<"history" | "new">(
    isNewSaleOpenInitially ? "new" : "new"
  );

  // New Sale Form State
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>(
    state.customers[0]?.id || ""
  );
  const [paymentMethod, setPaymentMethod] = useState<"Bank Transfer" | "POS Card" | "Cash">(
    "Bank Transfer"
  );
  const [notes, setNotes] = useState<string>("");

  // Line items: array of { productId: string, quantity: number }
  const [orderItems, setOrderItems] = useState<{ productId: string; quantity: number }[]>([
    { productId: state.products[0]?.id || "", quantity: 10 },
  ]);

  const [saleError, setSaleError] = useState<string | null>(null);
  const [saleSuccessTxn, setSaleSuccessTxn] = useState<Transaction | null>(null);
  const [viewingTxn, setViewingTxn] = useState<Transaction | null>(null);

  // Add line item row
  const handleAddRow = () => {
    const firstAvailable = state.products.find(
      (p) => !orderItems.some((item) => item.productId === p.id) && p.stock > 0
    ) || state.products[0];

    if (firstAvailable) {
      setOrderItems([...orderItems, { productId: firstAvailable.id, quantity: 1 }]);
    }
  };

  // Remove line item row
  const handleRemoveRow = (index: number) => {
    if (orderItems.length > 1) {
      setOrderItems(orderItems.filter((_, i) => i !== index));
    }
  };

  // Update line item
  const handleUpdateRow = (index: number, field: "productId" | "quantity", value: string | number) => {
    const updated = [...orderItems];
    if (field === "productId") {
      updated[index].productId = String(value);
      // Reset quantity to 1 or default
      updated[index].quantity = 1;
    } else {
      updated[index].quantity = Math.max(1, Number(value) || 1);
    }
    setOrderItems(updated);
    setSaleError(null);
  };

  // Calculate order total
  const calculatedLineItems = orderItems.map((item) => {
    const product = state.products.find((p) => p.id === item.productId);
    const unitPrice = product ? product.sellingPrice : 0;
    const totalPrice = unitPrice * item.quantity;
    return {
      product,
      quantity: item.quantity,
      unitPrice,
      totalPrice,
      isOutOfStock: product ? item.quantity > product.stock : false,
    };
  });

  const orderTotal = calculatedLineItems.reduce((acc, it) => acc + it.totalPrice, 0);
  const hasStockErrors = calculatedLineItems.some((it) => it.isOutOfStock);

  const handleSubmitSale = (e: React.FormEvent) => {
    e.preventDefault();
    setSaleError(null);

    const result = createTransaction({
      customerId: selectedCustomerId,
      items: orderItems,
      paymentMethod,
      notes,
    });

    if (!result.success) {
      setSaleError(result.error || "Unable to complete transaction.");
    } else {
      const generated = state.transactions.find((t) => t.id === result.transactionId) || null;
      // In case state update hasn't propagated to local variable in the same tick:
      if (generated) {
        setSaleSuccessTxn(generated);
      } else {
        // Find by transactionId
        setTimeout(() => {
          const fresh = state.transactions.find((t) => t.id === result.transactionId);
          if (fresh) setSaleSuccessTxn(fresh);
        }, 50);
      }
      // Reset form
      setNotes("");
      setOrderItems([{ productId: state.products[0]?.id || "", quantity: 1 }]);
    }
  };

  return (
    <div className="space-y-6">
      {/* Sub-tab Navigation */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setActiveSubTab("new");
              setSaleSuccessTxn(null);
            }}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${activeSubTab === "new"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Create Sales Order (POS)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveSubTab("history")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 ${activeSubTab === "history"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 hover:bg-slate-200 text-slate-700"
              }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Sales &amp; Transaction History ({state.transactions.length})</span>
          </button>
        </div>

        <span className="text-xs text-slate-500 font-mono hidden sm:inline">
          Depot Terminal POS-01
        </span>
      </div>

      {/* Success Banner if sale just completed */}
      {saleSuccessTxn && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-emerald-900">
                Transaction Completed: {saleSuccessTxn.id}
              </p>
              <p className="text-xs text-emerald-700">
                {formatNaira(saleSuccessTxn.totalAmount)} received via {saleSuccessTxn.paymentMethod}. Stock automatically deducted.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewingTxn(saleSuccessTxn)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-emerald-300 text-emerald-800 text-xs font-medium hover:bg-emerald-100/60 transition-colors"
            >
              <Receipt className="w-3.5 h-3.5" />
              <span>View / Print Receipt</span>
            </button>
            <button
              type="button"
              onClick={() => setSaleSuccessTxn(null)}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium transition-colors"
            >
              Start Another Sale
            </button>
          </div>
        </div>
      )}

      {/* VIEW 1: Create Sales Record */}
      {activeSubTab === "new" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main POS Line Items Form (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Select Material Line Items</h3>
                  <p className="text-xs text-slate-500">Pick products and enter quantity for dispatch</p>
                </div>
                <button
                  type="button"
                  onClick={handleAddRow}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Line Item</span>
                </button>
              </div>

              {/* Error message */}
              {saleError && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>{saleError}</span>
                </div>
              )}

              {/* Dynamic Line items builder */}
              <div className="space-y-3">
                {orderItems.map((item, idx) => {
                  const product = state.products.find((p) => p.id === item.productId);
                  const isStockShortage = product ? item.quantity > product.stock : false;

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border text-xs transition-colors ${isStockShortage
                          ? "border-red-300 bg-red-50/40"
                          : "border-slate-200 bg-slate-50/60"
                        }`}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                        {/* Product Picker (7 cols) */}
                        <div className="sm:col-span-6">
                          <label className="block text-[11px] font-mono text-slate-500 mb-1">
                            Material #{idx + 1}
                          </label>
                          <select
                            value={item.productId}
                            onChange={(e) => handleUpdateRow(idx, "productId", e.target.value)}
                            className="w-full p-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-medium text-xs focus:ring-1 focus:ring-emerald-500"
                          >
                            {state.products.map((p) => (
                              <option key={p.id} value={p.id}>
                                {p.name} — {formatNaira(p.sellingPrice)} ({p.stock} {p.unit} in stock)
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Quantity (3 cols) */}
                        <div className="sm:col-span-3">
                          <div className="flex justify-between items-center mb-1">
                            <label className="block text-[11px] font-mono text-slate-500">
                              Qty ({product?.unit || "units"})
                            </label>
                            {product && (
                              <span
                                className={`text-[10px] font-mono ${isStockShortage ? "text-red-600 font-bold" : "text-slate-400"
                                  }`}
                              >
                                Max: {product.stock}
                              </span>
                            )}
                          </div>
                          <input
                            type="number"
                            min="1"
                            max={product?.stock || 9999}
                            value={item.quantity}
                            onChange={(e) => handleUpdateRow(idx, "quantity", e.target.value)}
                            className={`w-full p-2 bg-white border rounded-lg text-xs font-mono font-bold text-slate-900 ${isStockShortage
                                ? "border-red-400 focus:ring-red-400"
                                : "border-slate-300 focus:ring-emerald-500"
                              }`}
                          />
                        </div>

                        {/* Line Total (2 cols) */}
                        <div className="sm:col-span-2 text-right">
                          <label className="block text-[11px] font-mono text-slate-500 mb-1">
                            Line Total
                          </label>
                          <span className="font-mono font-bold text-slate-900 block text-xs">
                            {product ? formatNaira(product.sellingPrice * item.quantity) : "₦0"}
                          </span>
                        </div>

                        {/* Delete Row (1 col) */}
                        <div className="sm:col-span-1 text-center sm:text-right pt-2 sm:pt-0">
                          {orderItems.length > 1 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveRow(idx)}
                              className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-4 h-4 inline" />
                            </button>
                          )}
                        </div>
                      </div>

                      {isStockShortage && product && (
                        <p className="text-[11px] text-red-600 font-medium mt-2">
                          Warning: Depot only has {product.stock} {product.unit} available. Cannot fulfill {item.quantity}.
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Delivery and Operational Notes */}
              <div className="pt-2">
                <label className="block font-medium text-slate-700 text-xs mb-1">
                  Dispatch / Site Delivery Notes
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dispatched on truck LAG-892-KJ to Epe site phase 2..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-900"
                />
              </div>
            </div>
          </div>

          {/* Right Column (1 col): Customer & Payment Summary */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
              <h3 className="font-bold text-slate-900 text-sm border-b border-slate-100 pb-3">
                Customer &amp; Payment
              </h3>

              {/* Customer Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  Select Contractor / Customer
                </label>
                <select
                  value={selectedCustomerId}
                  onChange={(e) => setSelectedCustomerId(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-xs text-slate-900 bg-white"
                >
                  {state.customers.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name.replace(" (Demo Customer)", "")} ({c.companyOrSite})
                    </option>
                  ))}
                </select>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <CreditCard className="w-3.5 h-3.5 text-slate-500" />
                  Payment Settlement Method
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {(["Bank Transfer", "POS Card", "Cash"] as const).map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`p-2 rounded-lg border text-center transition-colors font-medium text-[11px] ${paymentMethod === method
                          ? "bg-emerald-50 border-emerald-500 text-emerald-800 font-bold"
                          : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Calculation Breakdown */}
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-200 space-y-2 text-xs font-mono">
                <div className="flex justify-between text-slate-600">
                  <span>Selected Items:</span>
                  <span>{orderItems.length} lines</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal:</span>
                  <span>{formatNaira(orderTotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>VAT / Delivery Surcharge:</span>
                  <span>₦0 (Included)</span>
                </div>
                <div className="border-t border-slate-200 pt-2 flex justify-between text-sm font-bold text-slate-900">
                  <span>Grand Total:</span>
                  <span className="text-emerald-700">{formatNaira(orderTotal)}</span>
                </div>
              </div>

              {/* Submit Sale Button */}
              <button
                type="button"
                disabled={hasStockErrors || orderTotal <= 0}
                onClick={handleSubmitSale}
                className={`w-full py-2.5 rounded-lg text-white font-medium text-xs transition-colors shadow-sm flex items-center justify-center gap-2 ${hasStockErrors || orderTotal <= 0
                    ? "bg-slate-300 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-500"
                  }`}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Confirm Sale &amp; Deduct Stock</span>
              </button>

              {hasStockErrors && (
                <p className="text-[11px] text-red-600 text-center font-medium">
                  Please fix quantities exceeding available depot stock before confirming.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: Sales & Transaction History */}
      {activeSubTab === "history" && (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-5 py-3.5 bg-slate-50/70 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>All Sales Records ({state.transactions.length} Total)</span>
            <span>Total Sales Volume: {formatNaira(state.transactions.reduce((a, b) => a + b.totalAmount, 0))}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-600 font-mono text-[11px] border-b border-slate-200">
                <tr>
                  <th className="py-2.5 px-4">Transaction ID</th>
                  <th className="py-2.5 px-4">Date &amp; Time</th>
                  <th className="py-2.5 px-4">Customer &amp; Company</th>
                  <th className="py-2.5 px-4">Items Summary</th>
                  <th className="py-2.5 px-4 text-right">Amount (₦)</th>
                  <th className="py-2.5 px-4 text-center">Payment</th>
                  <th className="py-2.5 px-4 text-center">Status</th>
                  <th className="py-2.5 px-4 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-sans">
                {recentTransactions.map((txn) => (
                  <tr key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-mono font-semibold text-slate-900">
                      {txn.id}
                    </td>
                    <td className="py-3 px-4 text-slate-500 font-mono text-[11px]">
                      {txn.date}
                    </td>
                    <td className="py-3 px-4">
                      <span className="font-medium text-slate-900 block">
                        {txn.customerName.replace(" (Demo Customer)", "")}
                      </span>
                      <span className="text-[11px] text-slate-500 block">{txn.customerCompany}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-600 max-w-[200px]">
                      <span className="truncate block font-mono text-[11px]">
                        {txn.items.map((it) => `${it.quantity}x ${it.productName.split(" (")[0]}`).join(", ")}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right font-mono font-bold text-slate-900">
                      {formatNaira(txn.totalAmount)}
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">
                        {txn.paymentMethod}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span
                        className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${txn.status === "Completed"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-blue-50 text-blue-700 border border-blue-200"
                          }`}
                      >
                        {txn.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <button
                        type="button"
                        onClick={() => setViewingTxn(txn)}
                        className="inline-flex items-center gap-1 text-[11px] px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                      >
                        <Receipt className="w-3.5 h-3.5 text-slate-500" />
                        <span>Voucher</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Transaction Receipt Modal */}
      <TransactionReceiptModal
        transaction={viewingTxn}
        onClose={() => setViewingTxn(null)}
      />
    </div>
  );
};

export default SalesModule;

