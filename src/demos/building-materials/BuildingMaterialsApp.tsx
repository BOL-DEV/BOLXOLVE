"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  BarChart3,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import DemoHeader from "./components/DemoHeader";
import DashboardModule from "./components/DashboardModule";
import InventoryModule from "./components/InventoryModule";
import SalesModule from "./components/SalesModule";
import CustomerModule from "./components/CustomerModule";
import SupplierModule from "./components/SupplierModule";
import ReportsModule from "./components/ReportsModule";
import { useBuildingMaterialsDemo } from "./DemoContext";

export type DemoTabKey = "dashboard" | "inventory" | "sales" | "customers" | "suppliers" | "reports";

export const BuildingMaterialsApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DemoTabKey>("dashboard");
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [isNewSaleDirectOpen, setIsNewSaleDirectOpen] = useState(false);
  const { lowStockCount } = useBuildingMaterialsDemo();

  const handleOpenNewSale = () => {
    setActiveTab("sales");
    setIsNewSaleDirectOpen(true);
  };

  const handleOpenAddProduct = () => {
    setActiveTab("inventory");
    setIsAddProductOpen(true);
  };

  const navItems = [
    {
      id: "dashboard" as DemoTabKey,
      label: "Dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: "inventory" as DemoTabKey,
      label: "Inventory & Stock",
      icon: Package,
      badge: lowStockCount > 0 ? `${lowStockCount} Alert` : null,
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      id: "sales" as DemoTabKey,
      label: "Sales & POS",
      icon: ShoppingCart,
      badge: null,
    },
    {
      id: "customers" as DemoTabKey,
      label: "Contractors & Clients",
      icon: Users,
      badge: null,
    },
    {
      id: "suppliers" as DemoTabKey,
      label: "Suppliers & Mills",
      icon: Truck,
      badge: null,
    },
    {
      id: "reports" as DemoTabKey,
      label: "Reports & Financials",
      icon: BarChart3,
      badge: null,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 font-sans flex flex-col">
      {/* Clean Operational Demo Header */}
      <DemoHeader />

      {/* Secondary Operational Navigation Bar */}
      <nav className="w-full bg-white border-b border-slate-200 sticky top-[73px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto py-2 no-scrollbar">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveTab(item.id);
                    if (item.id === "sales") setIsNewSaleDirectOpen(false);
                  }}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${isActive
                      ? "bg-slate-900 text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono font-bold ${item.badgeColor || "bg-slate-200 text-slate-800"
                        }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Operational Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === "dashboard" && (
          <DashboardModule
            onNavigateTab={(tab) => setActiveTab(tab as DemoTabKey)}
            onOpenNewSale={handleOpenNewSale}
            onOpenAddProduct={handleOpenAddProduct}
          />
        )}

        {activeTab === "inventory" && (
          <InventoryModule
            isAddProductOpen={isAddProductOpen}
            setIsAddProductOpen={setIsAddProductOpen}
          />
        )}

        {activeTab === "sales" && (
          <SalesModule isNewSaleOpenInitially={isNewSaleDirectOpen} />
        )}

        {activeTab === "customers" && <CustomerModule />}

        {activeTab === "suppliers" && <SupplierModule />}

        {activeTab === "reports" && <ReportsModule />}
      </main>

      {/* Operational Demo Footer */}
      <footer className="w-full bg-white border-t border-slate-200 py-6 text-xs text-slate-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold text-slate-800">
              Interactive Custom Software Demonstration &bull; BOLXOLVE LTD
            </p>
            <p className="text-[11px] text-slate-500">
              Designed to illustrate custom software architecture, inventory control, and transaction workflows for multi-product distribution businesses.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <Link
              href="/#services"
              className="text-emerald-700 hover:text-emerald-800 font-medium inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Services Overview</span>
            </Link>
            <Link
              href="/#contact"
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
            >
              Consult with BOLXOLVE
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BuildingMaterialsApp;

