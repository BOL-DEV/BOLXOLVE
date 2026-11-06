"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Product, Customer, Supplier, Transaction, BusinessNotification, DemoState, SaleLineItem } from "./types";
import { INITIAL_DEMO_STATE } from "./initialData";

const STORAGE_KEY = "bolxolve_building_materials_demo_v1";

export const formatNaira = (amount: number): string => {
  return "₦" + Math.round(amount).toLocaleString("en-NG");
};

interface CreateSaleInput {
  customerId: string;
  items: { productId: string; quantity: number }[];
  paymentMethod: "Bank Transfer" | "POS Card" | "Cash";
  notes?: string;
}

interface DemoContextType {
  state: DemoState;
  isHydrated: boolean;
  // Computed values
  totalSales: number;
  orderCount: number;
  inventoryValue: number;
  inventoryCostValue: number;
  lowStockCount: number;
  lowStockProducts: Product[];
  recentTransactions: Transaction[];
  // Actions
  createTransaction: (input: CreateSaleInput) => { success: boolean; error?: string; transactionId?: string };
  adjustStock: (productId: string, newStock: number, note?: string) => void;
  addProduct: (product: Omit<Product, "id" | "sku"> & { sku?: string }) => void;
  updateProduct: (productId: string, updates: Partial<Product>) => void;
  addCustomer: (customer: Omit<Customer, "id" | "totalOrders" | "totalSpent">) => void;
  addSupplier: (supplier: Omit<Supplier, "id">) => void;
  dismissNotification: (id: string) => void;
  resetDemoData: () => void;
}

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<DemoState>(INITIAL_DEMO_STATE);
  const [isHydrated, setIsHydrated] = useState(false);

  // Hydrate from localStorage safely on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.products) && Array.isArray(parsed.transactions)) {
          setState(parsed);
        }
      }
    } catch {
      // Fallback to initial state if parse fails
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage whenever state changes after hydration
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // Storage quota or privacy mode error handling
      }
    }
  }, [state, isHydrated]);

  // Derived calculations (guaranteed internal consistency)
  const totalSales = state.transactions.reduce((acc, t) => acc + t.totalAmount, 0);
  const orderCount = state.transactions.length;
  const inventoryValue = state.products.reduce((acc, p) => acc + p.stock * p.sellingPrice, 0);
  const inventoryCostValue = state.products.reduce((acc, p) => acc + p.stock * p.costPrice, 0);
  const lowStockProducts = state.products.filter((p) => p.stock <= p.minThreshold);
  const lowStockCount = lowStockProducts.length;
  const recentTransactions = [...state.transactions].sort((a, b) => b.timestamp - a.timestamp);

  const resetDemoData = () => {
    setState(INITIAL_DEMO_STATE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const adjustStock = (productId: string, newStock: number, note?: string) => {
    const safeStock = Math.max(0, Math.floor(newStock));
    let affectedProduct: Product | undefined;

    setState((prev) => {
      const updatedProducts = prev.products.map((p) => {
        if (p.id === productId) {
          affectedProduct = { ...p, stock: safeStock };
          return affectedProduct;
        }
        return p;
      });

      const newNotifications = [...prev.notifications];

      if (affectedProduct && affectedProduct.stock <= affectedProduct.minThreshold) {
        newNotifications.unshift({
          id: `NOTIF-${Date.now()}`,
          type: "warning",
          title: `Low Stock: ${affectedProduct.name}`,
          message: `Stock adjusted to ${affectedProduct.stock} ${affectedProduct.unit} (Threshold: ${affectedProduct.minThreshold}). Reorder needed.`,
          date: "Just now",
        });
      } else if (affectedProduct && note) {
        newNotifications.unshift({
          id: `NOTIF-${Date.now()}`,
          type: "info",
          title: `Stock Adjustment: ${affectedProduct.name}`,
          message: `Stock updated to ${affectedProduct.stock} ${affectedProduct.unit} (${note}).`,
          date: "Just now",
        });
      }

      return {
        ...prev,
        products: updatedProducts,
        notifications: newNotifications,
      };
    });
  };

  const addProduct = (input: Omit<Product, "id" | "sku"> & { sku?: string }) => {
    setState((prev) => {
      const nextNum = prev.products.length + 1;
      const id = `PRD-${String(nextNum).padStart(3, "0")}`;
      const sku = input.sku || `MAT-${String(nextNum).padStart(3, "0")}`;

      const newProduct: Product = {
        id,
        sku,
        name: input.name,
        category: input.category,
        unit: input.unit,
        costPrice: Number(input.costPrice) || 0,
        sellingPrice: Number(input.sellingPrice) || 0,
        stock: Number(input.stock) || 0,
        minThreshold: Number(input.minThreshold) || 10,
      };

      const newNotification: BusinessNotification = {
        id: `NOTIF-${Date.now()}`,
        type: "info",
        title: `Product Added: ${newProduct.name}`,
        message: `Catalog updated with SKU ${newProduct.sku} at ${formatNaira(newProduct.sellingPrice)} per ${newProduct.unit}.`,
        date: "Just now",
      };

      return {
        ...prev,
        products: [newProduct, ...prev.products],
        notifications: [newNotification, ...prev.notifications],
      };
    });
  };

  const updateProduct = (productId: string, updates: Partial<Product>) => {
    setState((prev) => ({
      ...prev,
      products: prev.products.map((p) => (p.id === productId ? { ...p, ...updates } : p)),
    }));
  };

  const addCustomer = (customerInput: Omit<Customer, "id" | "totalOrders" | "totalSpent">) => {
    setState((prev) => {
      const nextId = `CUST-${String(prev.customers.length + 1).padStart(3, "0")}`;
      const newCustomer: Customer = {
        id: nextId,
        ...customerInput,
        totalOrders: 0,
        totalSpent: 0,
      };

      return {
        ...prev,
        customers: [newCustomer, ...prev.customers],
      };
    });
  };

  const addSupplier = (supplierInput: Omit<Supplier, "id">) => {
    setState((prev) => {
      const nextId = `SUP-${String(prev.suppliers.length + 1).padStart(3, "0")}`;
      const newSupplier: Supplier = {
        id: nextId,
        ...supplierInput,
      };

      return {
        ...prev,
        suppliers: [newSupplier, ...prev.suppliers],
      };
    });
  };

  const dismissNotification = (id: string) => {
    setState((prev) => ({
      ...prev,
      notifications: prev.notifications.filter((n) => n.id !== id),
    }));
  };

  const createTransaction = (input: CreateSaleInput): { success: boolean; error?: string; transactionId?: string } => {
    const customer = state.customers.find((c) => c.id === input.customerId);
    if (!customer) {
      return { success: false, error: "Please select a valid customer." };
    }

    if (!input.items || input.items.length === 0) {
      return { success: false, error: "Please add at least one item to the sales order." };
    }

    // Verify stock availability
    for (const item of input.items) {
      const prod = state.products.find((p) => p.id === item.productId);
      if (!prod) {
        return { success: false, error: `Product ${item.productId} not found.` };
      }
      if (item.quantity <= 0) {
        return { success: false, error: `Invalid quantity for ${prod.name}.` };
      }
      if (item.quantity > prod.stock) {
        return {
          success: false,
          error: `Insufficient stock for "${prod.name}". Available: ${prod.stock} ${prod.unit}, Requested: ${item.quantity}.`,
        };
      }
    }

    // Build line items
    const lineItems: SaleLineItem[] = input.items.map((it) => {
      const prod = state.products.find((p) => p.id === it.productId)!;
      return {
        productId: prod.id,
        productName: prod.name,
        unit: prod.unit,
        quantity: it.quantity,
        unitPrice: prod.sellingPrice,
        totalPrice: prod.sellingPrice * it.quantity,
      };
    });

    const totalAmount = lineItems.reduce((acc, item) => acc + item.totalPrice, 0);

    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    const nextTxnNum = state.transactions.length + 1;
    const txnId = `TXN-2026-${String(nextTxnNum).padStart(3, "0")}`;

    const newTransaction: Transaction = {
      id: txnId,
      customerId: customer.id,
      customerName: customer.name,
      customerCompany: customer.companyOrSite,
      date: formattedDate,
      timestamp: now.getTime(),
      items: lineItems,
      subtotal: totalAmount,
      totalAmount,
      paymentMethod: input.paymentMethod,
      status: "Completed",
      notes: input.notes || "Recorded via Demonstration POS Counter.",
    };

    setState((prev) => {
      // Deduct inventory quantities
      const updatedProducts = prev.products.map((p) => {
        const lineItem = lineItems.find((li) => li.productId === p.id);
        if (lineItem) {
          return {
            ...p,
            stock: Math.max(0, p.stock - lineItem.quantity),
          };
        }
        return p;
      });

      // Update customer total spend & orders
      const updatedCustomers = prev.customers.map((c) => {
        if (c.id === customer.id) {
          return {
            ...c,
            totalOrders: c.totalOrders + 1,
            totalSpent: c.totalSpent + totalAmount,
          };
        }
        return c;
      });

      // Check newly low-stock items
      const newNotifications: BusinessNotification[] = [
        {
          id: `NOTIF-${Date.now()}`,
          type: "success",
          title: `New Sale: ${txnId}`,
          message: `${formatNaira(totalAmount)} paid by ${customer.name} via ${input.paymentMethod}. Inventory auto-deducted.`,
          date: "Just now",
        },
      ];

      updatedProducts.forEach((p) => {
        const line = lineItems.find((li) => li.productId === p.id);
        if (line && p.stock <= p.minThreshold) {
          newNotifications.push({
            id: `NOTIF-${Date.now()}-${p.id}`,
            type: "warning",
            title: `Low Stock Alert: ${p.name}`,
            message: `Current stock has fallen to ${p.stock} ${p.unit} (Threshold: ${p.minThreshold}). Reorder recommended.`,
            date: "Just now",
          });
        }
      });

      return {
        ...prev,
        products: updatedProducts,
        customers: updatedCustomers,
        transactions: [newTransaction, ...prev.transactions],
        notifications: [...newNotifications, ...prev.notifications],
      };
    });

    return { success: true, transactionId: txnId };
  };

  return (
    <DemoContext.Provider
      value={{
        state,
        isHydrated,
        totalSales,
        orderCount,
        inventoryValue,
        inventoryCostValue,
        lowStockCount,
        lowStockProducts,
        recentTransactions,
        createTransaction,
        adjustStock,
        addProduct,
        updateProduct,
        addCustomer,
        addSupplier,
        dismissNotification,
        resetDemoData,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};

export const useBuildingMaterialsDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useBuildingMaterialsDemo must be used within a DemoProvider");
  }
  return context;
};

