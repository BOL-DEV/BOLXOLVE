"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Package,
  AlertTriangle,
  Users,
  Plus,
  Receipt,
  ArrowRight,
  ShieldAlert,
  Bell,
  X,
  Clock,
  Sparkles,
} from "lucide-react";
import { useBuildingMaterialsDemo, formatNaira } from "../DemoContext";
import { Transaction } from "../types";
import TransactionReceiptModal from "./TransactionReceiptModal";

interface Props {
  onNavigateTab: (tab: string) => void;
  onOpenNewSale: () => void;
  onOpenAddProduct: () => void;
}

export const DashboardModule: React.FC<Props> = ({
  onNavigateTab,
  onOpenNewSale,
  onOpenAddProduct,
}) => {
  const {
    state,
    totalSales,
    orderCount,
    inventoryValue,
    inventoryCostValue,
    lowStockCount,
    lowStockProducts,
    recentTransactions,
    dismissNotification,
  } = useBuildingMaterialsDemo();

  const [selectedTxn, setSelectedTxn] = useState<Transaction | null>(null);

  return (
    <div className="space-y-6">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1: Total Sales */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
              <span>Total Revenue (Sales)</span>
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <TrendingUp className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              {formatNaira(totalSales)}
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">{orderCount} completed transactions</span>
            <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
              Live In-Memory
            </span>
          </div>
        </div>

        {/* Metric 2: Inventory Value */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
              <span>Inventory Retail Value</span>
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <Package className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              {formatNaira(inventoryValue)}
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">{state.products.length} catalog items</span>
            <span className="text-slate-600 text-[11px]" title="Cost acquisition value">
              Cost: {formatNaira(inventoryCostValue)}
            </span>
          </div>
        </div>

        {/* Metric 3: Low Stock Alerts */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
              <span>Low-Stock Alerts</span>
              <span className={`p-1.5 rounded-lg ${lowStockCount > 0 ? "bg-amber-50 text-amber-600" : "bg-emerald-50 text-emerald-600"}`}>
                <AlertTriangle className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              {lowStockCount}{" "}
              <span className="text-sm font-normal text-slate-500">
                {lowStockCount === 1 ? "product" : "products"}
              </span>
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">Threshold triggered</span>
            <button
              type="button"
              onClick={() => onNavigateTab("inventory")}
              className="text-amber-700 hover:text-amber-800 font-medium text-[11px] underline"
            >
              Review Stock &rarr;
            </button>
          </div>
        </div>

        {/* Metric 4: Trade Accounts */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs font-medium text-slate-500 mb-1">
              <span>Contractors &amp; Clients</span>
              <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
                <Users className="w-4 h-4" />
              </span>
            </div>
            <p className="text-2xl font-bold text-slate-900 tracking-tight">
              {state.customers.length}
            </p>
          </div>
          <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
            <span className="text-slate-500">{state.suppliers.length} active suppliers</span>
            <button
              type="button"
              onClick={() => onNavigateTab("customers")}
              className="text-indigo-600 hover:text-indigo-800 font-medium text-[11px] underline"
            >
              View Accounts &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Quick Action Banner */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-4 sm:p-5 text-white flex flex-wrap items-center justify-between gap-4 shadow-md">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-lime-400" />
            <h2 className="text-sm font-semibold tracking-wide text-white">
              Operational Actions &bull; Demonstration Mode
            </h2>
          </div>
          <p className="text-xs text-slate-300">
            Create sales orders with real-time stock deduction, add demonstration materials, or simulate inventory restock.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onOpenNewSale}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Create Sales Order</span>
          </button>
          <button
            type="button"
            onClick={onOpenAddProduct}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white text-xs font-medium transition-colors border border-slate-600"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Catalog Product</span>
          </button>
          <button
            type="button"
            onClick={() => onNavigateTab("inventory")}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-slate-200 text-xs font-medium transition-colors"
          >
            <span>Adjust Inventory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Two-Column Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column (2/3): Recent Sales & Orders */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Recent Sales Orders</h3>
                <p className="text-xs text-slate-500">Live order stream showing itemized breakdown &amp; payments</p>
              </div>
              <button
                type="button"
                onClick={() => onNavigateTab("sales")}
                className="text-xs text-slate-700 hover:text-emerald-700 font-medium inline-flex items-center gap-1"
              >
                <span>View All Sales</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-600 font-mono text-[11px] border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Order ID</th>
                    <th className="py-2.5 px-4">Customer &amp; Site</th>
                    <th className="py-2.5 px-4">Materials</th>
                    <th className="py-2.5 px-4 text-right">Total (₦)</th>
                    <th className="py-2.5 px-4 text-center">Status</th>
                    <th className="py-2.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-sans">
                  {recentTransactions.slice(0, 5).map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-800">
                        {txn.id}
                        <span className="block text-[10px] font-normal text-slate-400 font-sans">
                          {txn.date.split(",")[0]}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-medium text-slate-900 block truncate max-w-[160px]">
                          {txn.customerName.replace(" (Demo Customer)", "")}
                        </span>
                        <span className="text-[11px] text-slate-500 truncate max-w-[180px] block">
                          {txn.customerCompany}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-600 max-w-[180px]">
                        <span className="truncate block font-mono text-[11px]">
                          {txn.items.map((it) => `${it.quantity}x ${it.productName.split(" (")[0]}`).join(", ")}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {txn.paymentMethod}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-semibold text-slate-900">
                        {formatNaira(txn.totalAmount)}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${
                            txn.status === "Completed"
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
                          onClick={() => setSelectedTxn(txn)}
                          className="inline-flex items-center gap-1 text-[11px] px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium transition-colors"
                        >
                          <Receipt className="w-3 h-3 text-slate-500" />
                          <span>Voucher</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock Watchlist */}
          {lowStockProducts.length > 0 && (
            <div className="bg-amber-50/70 rounded-xl border border-amber-200 p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                    Depot Low-Stock Watchlist
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => onNavigateTab("inventory")}
                  className="text-xs text-amber-800 hover:text-amber-900 font-medium underline"
                >
                  Manage Inventory &rarr;
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {lowStockProducts.map((p) => (
                  <div
                    key={p.id}
                    className="p-2.5 bg-white rounded-lg border border-amber-200 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-semibold text-slate-800 block">{p.name}</span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        Threshold: {p.minThreshold} {p.unit}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-amber-600 font-bold block">{p.stock} in stock</span>
                      <span className="text-[10px] text-slate-400">Reorder needed</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column (1/3): Notifications & System Activity */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Bell className="w-4 h-4 text-slate-600" />
                <h3 className="font-bold text-slate-900 text-sm">Business Notifications</h3>
              </div>
              <span className="text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded text-slate-600">
                {state.notifications.length} events
              </span>
            </div>

            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {state.notifications.length === 0 ? (
                <p className="text-xs text-slate-400 py-4 text-center">No active notifications</p>
              ) : (
                state.notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 rounded-lg border text-xs relative group transition-colors ${
                      notif.type === "warning"
                        ? "bg-amber-50/60 border-amber-200 text-amber-900"
                        : notif.type === "success"
                        ? "bg-emerald-50/60 border-emerald-200 text-emerald-900"
                        : "bg-slate-50 border-slate-200 text-slate-800"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => dismissNotification(notif.id)}
                      className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 p-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Dismiss"
                    >
                      <X className="w-3 h-3" />
                    </button>
                    <div className="flex items-start gap-2">
                      <div className="pt-0.5">
                        {notif.type === "warning" ? (
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                        ) : notif.type === "success" ? (
                          <Receipt className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Clock className="w-3.5 h-3.5 text-slate-500" />
                        )}
                      </div>
                      <div className="space-y-0.5 pr-4">
                        <span className="font-semibold block leading-tight">{notif.title}</span>
                        <p className="text-[11px] text-slate-600 leading-relaxed">{notif.message}</p>
                        <span className="text-[10px] text-slate-400 block pt-1 font-mono">
                          {notif.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Depot Info Card */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 text-xs text-slate-600 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold block">
              System Architecture Note
            </span>
            <p className="text-[11px] leading-relaxed">
              Every sales order recorded automatically recalculates revenue, deducts from physical stock levels, increments customer expenditure, and triggers restocking alerts when minimum thresholds are breached.
            </p>
          </div>
        </div>
      </div>

      {/* Transaction Receipt Modal */}
      <TransactionReceiptModal
        transaction={selectedTxn}
        onClose={() => setSelectedTxn(null)}
      />
    </div>
  );
};

export default DashboardModule;

