"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  SlidersHorizontal,
  AlertTriangle,
  CheckCircle2,
  Edit2,
  PackageCheck,
  RefreshCw,
  X,
  Layers,
  ArrowUpDown,
} from "lucide-react";
import { useBuildingMaterialsDemo, formatNaira } from "../DemoContext";
import { Product, ProductCategory } from "../types";

const CATEGORIES: ("All" | ProductCategory)[] = [
  "All",
  "Cement",
  "Reinforcement Bars",
  "Roofing Sheets",
  "Paint & Finishes",
  "Plumbing Materials",
  "Electrical Supplies",
  "Blocks & Masonry",
];

interface Props {
  isAddProductOpen: boolean;
  setIsAddProductOpen: (open: boolean) => void;
}

export const InventoryModule: React.FC<Props> = ({
  isAddProductOpen,
  setIsAddProductOpen,
}) => {
  const { state, adjustStock, addProduct, updateProduct } = useBuildingMaterialsDemo();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | ProductCategory>("All");
  const [showLowStockOnly, setShowLowStockOnly] = useState(false);

  // Modal states
  const [adjustModalProduct, setAdjustModalProduct] = useState<Product | null>(null);
  const [adjustQtyInput, setAdjustQtyInput] = useState<number>(0);
  const [adjustReasonInput, setAdjustReasonInput] = useState<string>("Manual warehouse recount");

  const [editModalProduct, setEditModalProduct] = useState<Product | null>(null);
  const [editPriceInput, setEditPriceInput] = useState<number>(0);
  const [editCostInput, setEditCostInput] = useState<number>(0);
  const [editThresholdInput, setEditThresholdInput] = useState<number>(0);

  // New product form states
  const [newProdName, setNewProdName] = useState("");
  const [newProdCategory, setNewProdCategory] = useState<ProductCategory>("Cement");
  const [newProdUnit, setNewProdUnit] = useState("50kg bag");
  const [newProdCost, setNewProdCost] = useState(5000);
  const [newProdPrice, setNewProdPrice] = useState(6500);
  const [newProdStock, setNewProdStock] = useState(100);
  const [newProdThreshold, setNewProdThreshold] = useState(25);

  // Filter products
  const filteredProducts = state.products.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const matchesLowStock = !showLowStockOnly || p.stock <= p.minThreshold;

    return matchesSearch && matchesCategory && matchesLowStock;
  });

  const handleOpenAdjust = (p: Product) => {
    setAdjustModalProduct(p);
    setAdjustQtyInput(p.stock);
    setAdjustReasonInput("Physical depot delivery check");
  };

  const handleSaveAdjust = (e: React.FormEvent) => {
    e.preventDefault();
    if (adjustModalProduct) {
      adjustStock(adjustModalProduct.id, adjustQtyInput, adjustReasonInput);
      setAdjustModalProduct(null);
    }
  };

  const handleOpenEdit = (p: Product) => {
    setEditModalProduct(p);
    setEditPriceInput(p.sellingPrice);
    setEditCostInput(p.costPrice);
    setEditThresholdInput(p.minThreshold);
  };

  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editModalProduct) {
      updateProduct(editModalProduct.id, {
        sellingPrice: Number(editPriceInput) || editModalProduct.sellingPrice,
        costPrice: Number(editCostInput) || editModalProduct.costPrice,
        minThreshold: Number(editThresholdInput) || editModalProduct.minThreshold,
      });
      setEditModalProduct(null);
    }
  };

  const handleSaveNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProdName.trim()) return;

    addProduct({
      name: newProdName.trim(),
      category: newProdCategory,
      unit: newProdUnit.trim(),
      costPrice: Number(newProdCost),
      sellingPrice: Number(newProdPrice),
      stock: Number(newProdStock),
      minThreshold: Number(newProdThreshold),
    });

    // Reset and close
    setNewProdName("");
    setIsAddProductOpen(false);
  };

  return (
    <div className="space-y-5">
      {/* Search and Filter Top Controls */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="relative flex-1 min-w-[240px] max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by material name or SKU (e.g. Dangote, PRD, TMT)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="flex items-center gap-2 text-xs text-slate-600 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showLowStockOnly}
                onChange={(e) => setShowLowStockOnly(e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
              <span className="font-medium">Show Low Stock Only</span>
            </label>

            <button
              type="button"
              onClick={() => setIsAddProductOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-medium transition-colors shadow-sm"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Demo Material</span>
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] font-mono uppercase text-slate-400 mr-1 flex items-center gap-1">
            <Layers className="w-3 h-3" />
            Category:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-full text-xs whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white font-medium shadow-xs"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Inventory Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-5 py-3.5 bg-slate-50/70 border-b border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
          <span>
            Displaying {filteredProducts.length} of {state.products.length} material catalog items
          </span>
          <span>Currency: Nigerian Naira (₦)</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-600 font-mono text-[11px] border-b border-slate-200">
              <tr>
                <th className="py-2.5 px-4">SKU / ID</th>
                <th className="py-2.5 px-4">Material Description</th>
                <th className="py-2.5 px-4">Category</th>
                <th className="py-2.5 px-4 text-right">Cost Price (₦)</th>
                <th className="py-2.5 px-4 text-right">Selling Price (₦)</th>
                <th className="py-2.5 px-4 text-center">In Stock</th>
                <th className="py-2.5 px-4 text-center">Status</th>
                <th className="py-2.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-sans">
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-400">
                    No products found matching your search and category filter.
                  </td>
                </tr>
              ) : (
                filteredProducts.map((prod) => {
                  const isLow = prod.stock <= prod.minThreshold;
                  const marginPct = Math.round(
                    ((prod.sellingPrice - prod.costPrice) / prod.costPrice) * 100
                  );

                  return (
                    <tr key={prod.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-mono font-semibold text-slate-700">
                        {prod.sku}
                        <span className="block text-[10px] text-slate-400 font-normal">{prod.id}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-900 block">{prod.name}</span>
                        <span className="text-[11px] text-slate-500 font-mono">Unit: {prod.unit}</span>
                      </td>
                      <td className="py-3 px-4 text-slate-600">
                        <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[11px]">
                          {prod.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right font-mono text-slate-600">
                        {formatNaira(prod.costPrice)}
                      </td>
                      <td className="py-3 px-4 text-right font-mono font-semibold text-slate-900">
                        {formatNaira(prod.sellingPrice)}
                        <span className="block text-[10px] text-emerald-600 font-sans">
                          +{marginPct}% margin
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`font-mono font-bold text-sm ${
                            isLow ? "text-amber-600" : "text-slate-800"
                          }`}
                        >
                          {prod.stock}
                        </span>
                        <span className="block text-[10px] text-slate-400 font-mono">
                          Min: {prod.minThreshold}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {isLow ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-50 text-amber-700 border border-amber-200">
                            <AlertTriangle className="w-3 h-3 text-amber-600" />
                            Low Stock
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            Healthy
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right space-x-1 whitespace-nowrap">
                        <button
                          type="button"
                          onClick={() => handleOpenAdjust(prod)}
                          className="px-2.5 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] transition-colors"
                          title="Adjust stock quantity"
                        >
                          Adjust Qty
                        </button>
                        <button
                          type="button"
                          onClick={() => handleOpenEdit(prod)}
                          className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                          title="Edit Pricing & Threshold"
                        >
                          <Edit2 className="w-3 h-3" />
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL 1: Adjust Stock Quantity */}
      {adjustModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Adjust Inventory Count</h3>
                <p className="text-xs text-slate-500">{adjustModalProduct.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setAdjustModalProduct(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveAdjust} className="space-y-4 text-xs">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 flex justify-between items-center font-mono">
                <span className="text-slate-600">Current Depot Stock:</span>
                <span className="font-bold text-slate-900 text-sm">
                  {adjustModalProduct.stock} {adjustModalProduct.unit}
                </span>
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  New Physical Stock Count ({adjustModalProduct.unit})
                </label>
                <input
                  type="number"
                  min="0"
                  required
                  value={adjustQtyInput}
                  onChange={(e) => setAdjustQtyInput(Number(e.target.value))}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 font-mono text-sm focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Reason for Adjustment
                </label>
                <input
                  type="text"
                  value={adjustReasonInput}
                  onChange={(e) => setAdjustReasonInput(e.target.value)}
                  className="w-full p-2 border border-slate-300 rounded-lg text-slate-900"
                  placeholder="e.g. Inward delivery from supplier, breakage write-off..."
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setAdjustModalProduct(null)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
                >
                  Save Stock Adjustment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 2: Edit Product Pricing & Threshold */}
      {editModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-md p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Edit Material Parameters</h3>
                <p className="text-xs text-slate-500">{editModalProduct.name}</p>
              </div>
              <button
                type="button"
                onClick={() => setEditModalProduct(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSaveEdit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Cost Acquisition Price (₦)
                </label>
                <input
                  type="number"
                  min="0"
                  value={editCostInput}
                  onChange={(e) => setEditCostInput(Number(e.target.value))}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Retail Selling Price (₦)
                </label>
                <input
                  type="number"
                  min="0"
                  value={editPriceInput}
                  onChange={(e) => setEditPriceInput(Number(e.target.value))}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono font-bold text-slate-900"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Low-Stock Warning Threshold ({editModalProduct.unit})
                </label>
                <input
                  type="number"
                  min="1"
                  value={editThresholdInput}
                  onChange={(e) => setEditThresholdInput(Number(e.target.value))}
                  className="w-full p-2 border border-slate-300 rounded-lg font-mono"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setEditModalProduct(null)}
                  className="px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium"
                >
                  Update Material
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL 3: Add Demo Material */}
      {isAddProductOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">Add Demonstration Material</h3>
                <p className="text-xs text-slate-500">Insert a new construction material into the live catalog</p>
              </div>
              <button
                type="button"
                onClick={() => setIsAddProductOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveNewProduct} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-medium text-slate-700 mb-1">Material Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. White Marine Plywood (18mm, 8x4ft)"
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Category</label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value as ProductCategory)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 bg-white"
                  >
                    {CATEGORIES.filter((c) => c !== "All").map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Unit of Measure</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sheet, 50kg bag, 12m bar..."
                    value={newProdUnit}
                    onChange={(e) => setNewProdUnit(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-lg text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Cost Price (₦)</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newProdCost}
                    onChange={(e) => setNewProdCost(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-300 rounded-lg font-mono text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Selling Price (₦) *</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-300 rounded-lg font-mono font-bold text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">Initial Depot Stock</label>
                  <input
                    type="number"
                    min="0"
                    required
                    value={newProdStock}
                    onChange={(e) => setNewProdStock(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-300 rounded-lg font-mono text-slate-900"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">Low-Stock Alert Level</label>
                  <input
                    type="number"
                    min="1"
                    required
                    value={newProdThreshold}
                    onChange={(e) => setNewProdThreshold(Number(e.target.value))}
                    className="w-full p-2.5 border border-slate-300 rounded-lg font-mono text-slate-900"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsAddProductOpen(false)}
                  className="px-3.5 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-sm"
                >
                  Add to Catalog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryModule;

