"use client";

import React, { useState } from "react";
import {
  Users,
  Plus,
  Phone,
  Mail,
  MapPin,
  Building,
  Receipt,
  X,
  History,
  ShoppingBag,
  CheckCircle2,
} from "lucide-react";
import { useBuildingMaterialsDemo, formatNaira } from "../DemoContext";
import { Customer, Transaction } from "../types";
import TransactionReceiptModal from "./TransactionReceiptModal";

export const CustomerModule: React.FC = () => {
  const { state, addCustomer } = useBuildingMaterialsDemo();

  const [selectedCustomerForHistory, setSelectedCustomerForHistory] = useState<Customer | null>(null);
  const [selectedTxn, setSelectedTxn] = useState<Transaction | null>(null);

  // Add customer modal state
  const [isAddCustomerOpen, setIsAddCustomerOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newCompany, setNewCompany] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newAddress, setNewAddress] = useState("");

  const handleSaveCustomer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newCompany.trim()) return;

    addCustomer({
      name: `${newName.trim()} (Demo Customer)`,
      companyOrSite: newCompany.trim(),
      phone: newPhone.trim() || "+234 800 000 0000 (Demo)",
      email: newEmail.trim() || "trade.demo@example.com",
      address: newAddress.trim() || "Lagos, Nigeria",
    });

    setNewName("");
    setNewCompany("");
    setNewPhone("");
    setNewEmail("");
    setNewAddress("");
    setIsAddCustomerOpen(false);
  };

  // Get orders for selected customer
  const customerOrders = selectedCustomerForHistory
    ? state.transactions.filter((t) => t.customerId === selectedCustomerForHistory.id)
    : [];

  return (
    <div className="space-y-6">
      {/* Header and Add Button */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Contractor &amp; Customer Accounts</h2>
          <p className="text-xs text-slate-500">
            Registered builders, commercial contractors, and retail trade accounts
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAddCustomerOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Demo Contractor</span>
        </button>
      </div>

      {/* Customer Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.customers.map((cust) => {
          const custOrders = state.transactions.filter((t) => t.customerId === cust.id);

          return (
            <div
              key={cust.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs font-mono">
                    {cust.id}
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                    {custOrders.length} {custOrders.length === 1 ? "Order" : "Orders"}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {cust.name.replace(" (Demo Customer)", "")}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium truncate">{cust.companyOrSite}</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{cust.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{cust.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{cust.address}</span>
                  </div>
                </div>
              </div>

              {/* Bottom spend and action */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-mono block">
                    Total Purchases
                  </span>
                  <span className="font-mono font-bold text-slate-900 text-xs">
                    {formatNaira(cust.totalSpent)}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCustomerForHistory(cust)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs transition-colors"
                >
                  <History className="w-3 h-3 text-slate-500" />
                  <span>Order History</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* MODAL 1: Customer Order History Drawer/Modal */}
      {selectedCustomerForHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
            <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {selectedCustomerForHistory.name.replace(" (Demo Customer)", "")}
                </h3>
                <p className="text-xs text-slate-500">
                  {selectedCustomerForHistory.companyOrSite} &bull; Total Orders: {customerOrders.length}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedCustomerForHistory(null)}
                className="text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              {customerOrders.length === 0 ? (
                <div className="py-8 text-center text-slate-400 text-xs">
                  <ShoppingBag className="w-8 h-8 mx-auto text-slate-300 mb-2" />
                  <p>No orders recorded for this customer yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {customerOrders.map((ord) => (
                    <div
                      key={ord.id}
                      className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-slate-900">{ord.id}</span>
                          <span className="text-[11px] text-slate-500 font-mono">{ord.date}</span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {ord.paymentMethod}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-600 mt-1 font-mono">
                          {ord.items.map((it) => `${it.quantity}x ${it.productName}`).join(", ")}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-slate-900 text-sm">
                          {formatNaira(ord.totalAmount)}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedTxn(ord)}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-medium text-[11px] transition-colors"
                        >
                          <Receipt className="w-3 h-3 text-slate-500" />
                          <span>Voucher</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-between items-center text-xs">
              <span className="font-mono text-slate-500">
                Lifetime Spend: {formatNaira(selectedCustomerForHistory.totalSpent)}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCustomerForHistory(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: Add Demo Customer Form */}
      {isAddCustomerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Register Trade Contractor</h3>
                <p className="text-xs text-slate-500">Add a new customer account to the demonstration system</p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddCustomerOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveCustomer} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Contact Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Engr. Kayode Adeleke"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Company / Project Site *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Apex Civil Foundations (Ibeju-Lekki)"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+234 800..."
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="site@example.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Site Address</label>
                <input
                  type="text"
                  placeholder="Plot 8, Lekki Expressway, Lagos"
                  value={newAddress}
                  onChange={(e) => setNewAddress(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddCustomerOpen(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
                >
                  Save Contractor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Transaction Receipt Modal */}
      <TransactionReceiptModal
        transaction={selectedTxn}
        onClose={() => setSelectedTxn(null)}
      />
    </div>
  );
};

export default CustomerModule;

