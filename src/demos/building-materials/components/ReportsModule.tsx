"use client";

import React from "react";
import {
  BarChart3,
  TrendingUp,
  PieChart,
  Layers,
  CreditCard,
  DollarSign,
  Package,
} from "lucide-react";
import { useBuildingMaterialsDemo, formatNaira } from "../DemoContext";

export const ReportsModule: React.FC = () => {
  const {
    state,
    totalSales,
    orderCount,
    inventoryValue,
    inventoryCostValue,
  } = useBuildingMaterialsDemo();

  // 1. Category breakdown of inventory value
  const categoryMap: { [cat: string]: { count: number; retailValue: number; costValue: number } } = {};
  state.products.forEach((p) => {
    if (!categoryMap[p.category]) {
      categoryMap[p.category] = { count: 0, retailValue: 0, costValue: 0 };
    }
    categoryMap[p.category].count += 1;
    categoryMap[p.category].retailValue += p.stock * p.sellingPrice;
    categoryMap[p.category].costValue += p.stock * p.costPrice;
  });

  const categoriesSummary = Object.entries(categoryMap).map(([category, data]) => ({
    category,
    ...data,
    percentageOfInventory:
      inventoryValue > 0 ? Math.round((data.retailValue / inventoryValue) * 100) : 0,
  }));

  // 2. Best-selling products calculation from actual transactions
  const productSalesMap: {
    [prodId: string]: { name: string; unit: string; totalQty: number; totalRevenue: number };
  } = {};

  state.transactions.forEach((txn) => {
    txn.items.forEach((item) => {
      if (!productSalesMap[item.productId]) {
        productSalesMap[item.productId] = {
          name: item.productName,
          unit: item.unit,
          totalQty: 0,
          totalRevenue: 0,
        };
      }
      productSalesMap[item.productId].totalQty += item.quantity;
      productSalesMap[item.productId].totalRevenue += item.totalPrice;
    });
  });

  const topSellingProducts = Object.values(productSalesMap).sort(
    (a, b) => b.totalRevenue - a.totalRevenue
  );

  // 3. Payment methods distribution
  const paymentMethodMap: { [method: string]: { count: number; total: number } } = {
    "Bank Transfer": { count: 0, total: 0 },
    "POS Card": { count: 0, total: 0 },
    Cash: { count: 0, total: 0 },
  };

  state.transactions.forEach((txn) => {
    if (paymentMethodMap[txn.paymentMethod]) {
      paymentMethodMap[txn.paymentMethod].count += 1;
      paymentMethodMap[txn.paymentMethod].total += txn.totalAmount;
    }
  });

  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-1">
          <span className="text-xs font-medium text-slate-500">Gross Sales Revenue</span>
          <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
            {formatNaira(totalSales)}
          </p>
          <span className="text-xs text-slate-500 block pt-1">
            Across {orderCount} processed commercial invoices
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-1">
          <span className="text-xs font-medium text-slate-500">Total Asset Inventory Value</span>
          <p className="text-2xl font-bold text-slate-900 font-mono tracking-tight">
            {formatNaira(inventoryValue)}
          </p>
          <span className="text-xs text-slate-500 block pt-1">
            Wholesale Cost Basis: {formatNaira(inventoryCostValue)}
          </span>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-1">
          <span className="text-xs font-medium text-slate-500">Estimated Potential Gross Margin</span>
          <p className="text-2xl font-bold text-emerald-700 font-mono tracking-tight">
            {formatNaira(inventoryValue - inventoryCostValue)}
          </p>
          <span className="text-xs text-slate-500 block pt-1">
            {inventoryCostValue > 0
              ? `${Math.round(((inventoryValue - inventoryCostValue) / inventoryCostValue) * 100)}% overall catalog markup`
              : "Calculated dynamically"}
          </span>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column: Best Selling Materials */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <h3 className="font-bold text-slate-900 text-sm">Best-Selling Materials</h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">By Recorded Revenue</span>
          </div>

          <div className="space-y-3">
            {topSellingProducts.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">No sales recorded yet.</p>
            ) : (
              topSellingProducts.map((item, index) => {
                const pct = totalSales > 0 ? Math.round((item.totalRevenue / totalSales) * 100) : 0;

                return (
                  <div key={index} className="space-y-1 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-slate-800">
                        {index + 1}. {item.name}
                      </span>
                      <span className="font-mono font-bold text-slate-900">
                        {formatNaira(item.totalRevenue)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                      <span>
                        {item.totalQty} {item.unit} sold
                      </span>
                      <span>&bull;</span>
                      <span>{pct}% of total sales</span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className="bg-emerald-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${Math.min(100, Math.max(5, pct))}%` }}
                      />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Column: Inventory Value by Category */}
        <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">Inventory Capital Allocation</h3>
            </div>
            <span className="text-xs text-slate-500 font-mono">By Material Category</span>
          </div>

          <div className="space-y-3">
            {categoriesSummary.map((cat, idx) => (
              <div key={idx} className="space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-slate-800">
                    {cat.category} ({cat.count} items)
                  </span>
                  <span className="font-mono font-bold text-slate-900">
                    {formatNaira(cat.retailValue)}
                  </span>
                </div>

                <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-slate-800 h-1.5 rounded-full transition-all duration-300"
                    style={{ width: `${Math.min(100, Math.max(4, cat.percentageOfInventory))}%` }}
                  />
                </div>

                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>Cost basis: {formatNaira(cat.costValue)}</span>
                  <span>{cat.percentageOfInventory}% of depot capital</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Method Distribution */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-indigo-600" />
            <h3 className="font-bold text-slate-900 text-sm">Payment Channel Breakdown</h3>
          </div>
          <span className="text-xs text-slate-500 font-mono">Audit Log Reconciliation</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
          {Object.entries(paymentMethodMap).map(([method, data]) => {
            const sharePct = totalSales > 0 ? Math.round((data.total / totalSales) * 100) : 0;

            return (
              <div key={method} className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1">
                <div className="flex justify-between items-center font-sans font-medium text-slate-700">
                  <span>{method}</span>
                  <span className="text-[11px] text-slate-500">{data.count} transactions</span>
                </div>
                <div className="text-base font-bold text-slate-900 pt-1">
                  {formatNaira(data.total)}
                </div>
                <div className="text-[11px] text-slate-500 font-sans">
                  {sharePct}% of total settled revenue
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportsModule;

