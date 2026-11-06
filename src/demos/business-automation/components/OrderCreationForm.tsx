"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Play,
  Plus,
  Trash2,
  AlertCircle,
  Sparkles,
  User,
  Mail,
  CreditCard,
  CheckCircle,
} from "lucide-react";
import { useAutomationDemo, formatNaira } from "../AutomationContext";

export const OrderCreationForm: React.FC = () => {
  const { state, triggerWorkflow, execution } = useAutomationDemo();
  const { isRunning } = execution;

  const [customerName, setCustomerName] = useState("Khadijah Al-Hassan (Demo Customer)");
  const [customerEmail, setCustomerEmail] = useState("khadijah.demo@example.com");
  const [paymentStatus, setPaymentStatus] = useState<"Confirmed Online Payment" | "Cash on Delivery">(
    "Confirmed Online Payment"
  );

  const [selectedItems, setSelectedItems] = useState<{ productId: string; quantity: number }[]>([
    { productId: state.products[0]?.id || "PRD-FSH-01", quantity: 1 },
    { productId: state.products[1]?.id || "PRD-FSH-02", quantity: 2 },
  ]);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Calculate order totals
  const lineDetails = selectedItems.map((item) => {
    const prod = state.products.find((p) => p.id === item.productId);
    const unitPrice = prod ? prod.price : 0;
    const totalPrice = unitPrice * item.quantity;
    const isExceeding = prod ? item.quantity > prod.stock : false;
    return {
      product: prod,
      quantity: item.quantity,
      unitPrice,
      totalPrice,
      isExceeding,
    };
  });

  const orderTotal = lineDetails.reduce((acc, it) => acc + it.totalPrice, 0);
  const hasShortage = lineDetails.some((it) => it.isExceeding);

  const handleAddItemRow = () => {
    const available = state.products.find(
      (p) => !selectedItems.some((si) => si.productId === p.id) && p.stock > 0
    ) || state.products[0];

    if (available) {
      setSelectedItems([...selectedItems, { productId: available.id, quantity: 1 }]);
    }
  };

  const handleRemoveItemRow = (index: number) => {
    if (selectedItems.length > 1) {
      setSelectedItems(selectedItems.filter((_, i) => i !== index));
    }
  };

  const handleUpdateItem = (index: number, field: "productId" | "quantity", value: string | number) => {
    const updated = [...selectedItems];
    if (field === "productId") {
      updated[index].productId = String(value);
      updated[index].quantity = 1;
    } else {
      updated[index].quantity = Math.max(1, Number(value) || 1);
    }
    setSelectedItems(updated);
    setErrorMsg(null);
  };

  const loadPreset = (presetType: "hoodie" | "executive" | "lifestyle") => {
    if (presetType === "hoodie") {
      setCustomerName("David Adeleke (Demo Customer)");
      setCustomerEmail("david.demo@example.com");
      setSelectedItems([
        { productId: "PRD-FSH-01", quantity: 2 },
        { productId: "PRD-FSH-03", quantity: 1 },
      ]);
    } else if (presetType === "executive") {
      setCustomerName("Chief Folake Williams (Demo Customer)");
      setCustomerEmail("folake.demo@example.com");
      setSelectedItems([
        { productId: "PRD-FSH-02", quantity: 3 },
        { productId: "PRD-FSH-05", quantity: 1 },
      ]);
    } else {
      setCustomerName("Engr. Emeka Nwosu (Demo Customer)");
      setCustomerEmail("emeka.demo@example.com");
      setSelectedItems([
        { productId: "PRD-FSH-04", quantity: 1 },
        { productId: "PRD-FSH-03", quantity: 1 },
      ]);
    }
    setErrorMsg(null);
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const result = await triggerWorkflow({
      customerName,
      customerEmail,
      items: selectedItems,
      paymentStatus,
    });

    if (!result.success) {
      setErrorMsg(result.error || "Unable to trigger workflow.");
    }
  };

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
      {/* Form Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 className="font-bold text-slate-900 text-sm">Create Sample Order (Trigger)</h3>
          <p className="text-xs text-slate-500">
            Submit a simulated customer purchase to witness automated orchestration
          </p>
        </div>

        {/* Preset quick buttons */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <span className="text-slate-400 mr-1">Presets:</span>
          <button
            type="button"
            onClick={() => loadPreset("hoodie")}
            className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            Casual Order
          </button>
          <button
            type="button"
            onClick={() => loadPreset("executive")}
            className="px-2 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            Executive Wardrobe
          </button>
        </div>
      </div>

      {errorMsg && (
        <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <form onSubmit={handleSubmitOrder} className="space-y-4 text-xs">
        {/* Customer Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-medium text-slate-700 mb-1 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-slate-400" />
              Customer Name *
            </label>
            <input
              type="text"
              required
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium"
              placeholder="e.g. Aisha Bello"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-slate-400" />
              Customer Email (Fictional) *
            </label>
            <input
              type="email"
              required
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-mono"
              placeholder="e.g. aisha.demo@example.com"
            />
          </div>
        </div>

        {/* Product Selection Rows */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="block font-medium text-slate-700">
              Selected Products ({selectedItems.length})
            </label>
            <button
              type="button"
              onClick={handleAddItemRow}
              className="inline-flex items-center gap-1 text-[11px] text-emerald-700 hover:text-emerald-800 font-semibold"
            >
              <Plus className="w-3 h-3" />
              <span>Add Another Item</span>
            </button>
          </div>

          <div className="space-y-2">
            {selectedItems.map((item, idx) => {
              const prod = state.products.find((p) => p.id === item.productId);
              const isExceeding = prod ? item.quantity > prod.stock : false;

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border flex flex-wrap sm:flex-nowrap items-center justify-between gap-3 text-xs ${
                    isExceeding ? "bg-red-50/50 border-red-300" : "bg-slate-50 border-slate-200"
                  }`}
                >
                  {/* Product Dropdown */}
                  <div className="flex-1 min-w-[200px]">
                    <select
                      value={item.productId}
                      onChange={(e) => handleUpdateItem(idx, "productId", e.target.value)}
                      className="w-full p-2 bg-white border border-slate-300 rounded-lg text-slate-900 font-medium text-xs"
                    >
                      {state.products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} — {formatNaira(p.price)} ({p.stock} in stock)
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Quantity */}
                  <div className="w-24 shrink-0">
                    <input
                      type="number"
                      min="1"
                      max={prod?.stock || 999}
                      value={item.quantity}
                      onChange={(e) => handleUpdateItem(idx, "quantity", e.target.value)}
                      className="w-full p-2 bg-white border border-slate-300 rounded-lg text-xs font-mono font-bold text-center text-slate-900"
                    />
                  </div>

                  {/* Line Total */}
                  <div className="w-28 text-right font-mono font-bold text-slate-900 text-xs shrink-0">
                    {prod ? formatNaira(prod.price * item.quantity) : "₦0"}
                  </div>

                  {/* Remove Button */}
                  {selectedItems.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveItemRow(idx)}
                      className="text-slate-400 hover:text-red-600 p-1 rounded transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Payment Status & Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center pt-2">
          <div>
            <label className="block font-medium text-slate-700 mb-1 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-slate-400" />
              Checkout Payment Status
            </label>
            <select
              value={paymentStatus}
              onChange={(e) => setPaymentStatus(e.target.value as any)}
              className="w-full p-2.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-xs"
            >
              <option value="Confirmed Online Payment">Confirmed Online Payment (Simulated)</option>
              <option value="Cash on Delivery">Cash on Delivery (Pending Settlement)</option>
            </select>
          </div>

          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex items-center justify-between font-mono">
            <div>
              <span className="text-[11px] text-slate-500 block">Simulated Total</span>
              <span className="text-base font-bold text-slate-900">{formatNaira(orderTotal)}</span>
            </div>
            <span className="text-[11px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
              Live Calculation
            </span>
          </div>
        </div>

        {/* Trigger Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isRunning || hasShortage || orderTotal <= 0}
            className={`w-full py-3 rounded-xl text-white font-medium text-xs transition-all shadow-md flex items-center justify-center gap-2 ${
              isRunning
                ? "bg-slate-700 cursor-wait"
                : hasShortage || orderTotal <= 0
                ? "bg-slate-300 cursor-not-allowed"
                : "bg-emerald-600 hover:bg-emerald-500 hover:shadow-lg"
            }`}
          >
            {isRunning ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Automated Workflow Executing Across 6 Systems...</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Submit Sample Order &amp; Execute 6-Step Workflow &rarr;</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderCreationForm;

