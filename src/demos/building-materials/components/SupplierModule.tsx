"use client";

import React, { useState } from "react";
import {
  Truck,
  Plus,
  Phone,
  Mail,
  Package,
  Calendar,
  X,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { useBuildingMaterialsDemo } from "../DemoContext";

export const SupplierModule: React.FC = () => {
  const { state, addSupplier } = useBuildingMaterialsDemo();

  const [isAddSupplierOpen, setIsAddSupplierOpen] = useState(false);
  const [newCompany, setNewCompany] = useState("");
  const [newContact, setNewContact] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMaterials, setNewMaterials] = useState("");
  const [newTerms, setNewTerms] = useState("30 Days Net");

  const handleSaveSupplier = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.trim() || !newMaterials.trim()) return;

    addSupplier({
      companyName: `${newCompany.trim()} (Demo Supplier)`,
      contactPerson: newContact.trim() || "Account Representative",
      phone: newPhone.trim() || "+234 800 000 0000 (Demo)",
      email: newEmail.trim() || "supply.demo@example.com",
      suppliedMaterials: newMaterials.trim(),
      paymentTerms: newTerms,
      recentSupplyDate: "Recent Demo Log",
      status: "Active",
    });

    setNewCompany("");
    setNewContact("");
    setNewPhone("");
    setNewEmail("");
    setNewMaterials("");
    setIsAddSupplierOpen(false);
  };

  return (
    <div className="space-y-6">
      {/* Header and Add Button */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900">Building Materials Suppliers &amp; Mills</h2>
          <p className="text-xs text-slate-500">
            Manufacturing plants, steel rolling mills, and wholesale distributors
          </p>
        </div>
        <button
          type="button"
          onClick={() => setIsAddSupplierOpen(true)}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Demo Supplier</span>
        </button>
      </div>

      {/* Supplier Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {state.suppliers.map((sup) => (
          <div
            key={sup.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between space-y-4 hover:border-slate-300 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <span className="text-xs font-mono font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                  {sup.id}
                </span>
                <span
                  className={`inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded ${
                    sup.status === "Active"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-amber-50 text-amber-700 border border-amber-200"
                  }`}
                >
                  {sup.status === "Active" ? (
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  ) : (
                    <Clock className="w-3 h-3 text-amber-600" />
                  )}
                  {sup.status}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {sup.companyName.replace(" (Demo Supplier)", "")}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">Contact: {sup.contactPerson}</p>
              </div>

              <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
                <div className="flex items-start gap-1.5 text-slate-700">
                  <Package className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-[11px]">{sup.suppliedMaterials}</span>
                </div>
              </div>

              <div className="space-y-1 pt-1 text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{sup.phone}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{sup.email}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-mono">
              <div>
                <span className="text-[10px] text-slate-400 uppercase block font-sans">Payment Terms</span>
                <span>{sup.paymentTerms}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-400 uppercase block font-sans">Recent Batch</span>
                <span className="text-slate-700">{sup.recentSupplyDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Supplier Modal */}
      {isAddSupplierOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Add Material Supplier</h3>
                <p className="text-xs text-slate-500">Register a new manufacturing supplier into the system</p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddSupplierOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSupplier} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Company / Mill Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Niger Delta Steelworks Ltd"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Contact Representative</label>
                <input
                  type="text"
                  placeholder="e.g. Engr. Bolaji Johnson"
                  value={newContact}
                  onChange={(e) => setNewContact(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">Supplied Materials *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mild steel rods, Binding wires &amp; mesh"
                  value={newMaterials}
                  onChange={(e) => setNewMaterials(e.target.value)}
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
                  <label className="block font-medium text-slate-700 mb-1">Payment Terms</label>
                  <select
                    value={newTerms}
                    onChange={(e) => setNewTerms(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 bg-white"
                  >
                    <option value="Payment on Delivery">Payment on Delivery</option>
                    <option value="14 Days Net">14 Days Net</option>
                    <option value="30 Days Net">30 Days Net</option>
                    <option value="60 Days Trade Facility">60 Days Trade Facility</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddSupplierOpen(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
                >
                  Save Supplier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupplierModule;

