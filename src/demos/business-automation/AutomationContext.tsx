"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useRef } from "react";
import {
  AutomationDemoState,
  AutomationProduct,
  AutomationOrder,
  WorkflowAuditLog,
  AutomationLineItem,
  OrderNotificationRecord,
} from "./types";
import { INITIAL_AUTOMATION_STATE, WORKFLOW_STEPS } from "./initialData";

const STORAGE_KEY = "bolxolve_automation_demo_v1";

export const formatNaira = (amount: number): string => {
  return "₦" + Math.round(amount).toLocaleString("en-NG");
};

export interface CreateOrderInput {
  customerName: string;
  customerEmail: string;
  items: { productId: string; quantity: number }[];
  paymentStatus: "Confirmed Online Payment" | "Cash on Delivery";
}

interface ActiveExecutionState {
  isRunning: boolean;
  currentStepId: number; // 0 = not started, 1 to 6 = in progress, 7 = finished
  activeOrderId: string | null;
  activeOrder: AutomationOrder | null;
  stepMessage: string;
}

interface AutomationContextType {
  state: AutomationDemoState;
  isHydrated: boolean;
  execution: ActiveExecutionState;
  triggerWorkflow: (input: CreateOrderInput) => Promise<{ success: boolean; orderId?: string; error?: string }>;
  resetDemoData: () => void;
  // Computed metrics
  totalAutomatedOrders: number;
  totalTimeSavedMinutes: number;
  activeCatalogStock: number;
}

const AutomationContext = createContext<AutomationContextType | undefined>(undefined);

export const AutomationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AutomationDemoState>(INITIAL_AUTOMATION_STATE);
  const [isHydrated, setIsHydrated] = useState(false);
  const [execution, setExecution] = useState<ActiveExecutionState>({
    isRunning: false,
    currentStepId: 0,
    activeOrderId: null,
    activeOrder: null,
    stepMessage: "Workflow idle. Submit an order to trigger automation.",
  });

  const executionRef = useRef(execution);
  executionRef.current = execution;

  // Hydrate from localStorage safely on client
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && Array.isArray(parsed.products) && Array.isArray(parsed.orders)) {
          setState(parsed);
        }
      }
    } catch {
      // Fallback
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch {
        // Storage full/quota handler
      }
    }
  }, [state, isHydrated]);

  const resetDemoData = () => {
    setState(INITIAL_AUTOMATION_STATE);
    setExecution({
      isRunning: false,
      currentStepId: 0,
      activeOrderId: null,
      activeOrder: null,
      stepMessage: "Demo reset to baseline initial data.",
    });
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore
    }
  };

  const triggerWorkflow = async (
    input: CreateOrderInput
  ): Promise<{ success: boolean; orderId?: string; error?: string }> => {
    if (executionRef.current.isRunning) {
      return { success: false, error: "A workflow is already executing. Please wait for completion." };
    }

    if (!input.customerName.trim() || !input.customerEmail.trim()) {
      return { success: false, error: "Please enter customer name and email." };
    }

    if (!input.items || input.items.length === 0) {
      return { success: false, error: "Please select at least one product." };
    }

    // Verify stock
    for (const it of input.items) {
      const p = state.products.find((prod) => prod.id === it.productId);
      if (!p) return { success: false, error: `Product ${it.productId} not found.` };
      if (it.quantity > p.stock) {
        return {
          success: false,
          error: `Insufficient stock for ${p.name}. Available: ${p.stock}, Requested: ${it.quantity}.`,
        };
      }
    }

    // Prepare line items
    const lineItems: AutomationLineItem[] = input.items.map((it) => {
      const prod = state.products.find((p) => p.id === it.productId)!;
      return {
        productId: prod.id,
        productName: prod.name,
        quantity: it.quantity,
        unitPrice: prod.price,
        totalPrice: prod.price * it.quantity,
      };
    });

    const subtotal = lineItems.reduce((acc, it) => acc + it.totalPrice, 0);
    const orderNum = state.orders.length + 1042;
    const orderId = `ORD-${orderNum}`;
    const now = new Date();
    const formattedDate = `Today, ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

    const notifications: OrderNotificationRecord = {
      customerEmailSubject: `Order Confirmed: #${orderId} — BOLXOLVE Automated Retail Engine`,
      customerEmailRecipient: input.customerEmail,
      customerEmailBody: `Hello ${input.customerName}, your payment of ${formatNaira(
        subtotal
      )} has been verified. Your ${lineItems
        .map((it) => `${it.quantity}x ${it.productName}`)
        .join(", ")} is confirmed and queued for fulfillment. Tracking ref: WFL-${orderNum}-NG.`,
      internalChannel: "#fulfillment-depot-lagos",
      internalAlertTitle: `New Order Dispatched to Packing Station: #${orderId}`,
      internalAlertBody: `${lineItems.length} line items (${lineItems.reduce(
        (a, b) => a + b.quantity,
        0
      )} units total). Automated stock decrement verified.`,
      packingSlipId: `SLIP-2026-${orderNum}`,
      dispatchPriority: "Standard Dispatch",
    };

    const newOrder: AutomationOrder = {
      id: orderId,
      customerName: `${input.customerName.replace(" (Demo Customer)", "")} (Demo Customer)`,
      customerEmail: input.customerEmail,
      items: lineItems,
      subtotal,
      shippingFee: 0,
      totalAmount: subtotal,
      paymentStatus: input.paymentStatus,
      orderStatus: "Order Received",
      createdAt: formattedDate,
      timestamp: now.getTime(),
      stepsCompleted: [],
      notifications,
    };

    // Begin visual execution sequence
    setExecution({
      isRunning: true,
      currentStepId: 1,
      activeOrderId: orderId,
      activeOrder: newOrder,
      stepMessage: "Step 1: Webhook received customer order payload.",
    });

    const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

    const stepLogs: WorkflowAuditLog[] = [];

    // Step 1: Received
    await sleep(450);
    stepLogs.push({
      id: `LOG-${Date.now()}-1`,
      orderId,
      stepNumber: 1,
      stepTitle: "Customer Ingestion Webhook",
      timestamp: new Date().toLocaleTimeString(),
      details: `Captured checkout payload for ${input.customerName}. Payment status: ${input.paymentStatus}.`,
      latencyMs: 95,
    });

    // Step 2: System Records
    setExecution((prev) => ({
      ...prev,
      currentStepId: 2,
      stepMessage: "Step 2: Relational database record committed & ID assigned.",
    }));
    await sleep(500);
    stepLogs.push({
      id: `LOG-${Date.now()}-2`,
      orderId,
      stepNumber: 2,
      stepTitle: "Database Record Committed",
      timestamp: new Date().toLocaleTimeString(),
      details: `Entity ${orderId} registered. Total amount: ${formatNaira(subtotal)}.`,
      latencyMs: 110,
    });

    // Step 3: Customer Confirmation Notification
    setExecution((prev) => ({
      ...prev,
      currentStepId: 3,
      stepMessage: "Step 3: Customer confirmation email & tracking receipt rendered.",
    }));
    await sleep(450);
    stepLogs.push({
      id: `LOG-${Date.now()}-3`,
      orderId,
      stepNumber: 3,
      stepTitle: "Customer Email Dispatch Generated",
      timestamp: new Date().toLocaleTimeString(),
      details: `Notification rendered for ${input.customerEmail}. Subject: Order Confirmed #${orderId}.`,
      latencyMs: 130,
    });

    // Step 4: Business Order Notification
    setExecution((prev) => ({
      ...prev,
      currentStepId: 4,
      stepMessage: "Step 4: Fulfillment team alerted with itemized pick-list.",
    }));
    await sleep(450);
    stepLogs.push({
      id: `LOG-${Date.now()}-4`,
      orderId,
      stepNumber: 4,
      stepTitle: "Internal Ops Alert Broadcasted",
      timestamp: new Date().toLocaleTimeString(),
      details: `Pushed alert to #fulfillment-depot-lagos. Packing slip: SLIP-2026-${orderNum}.`,
      latencyMs: 85,
    });

    // Step 5: Inventory Quantity Updated
    setExecution((prev) => ({
      ...prev,
      currentStepId: 5,
      stepMessage: "Step 5: Inventory quantity deducted in physical stock ledger.",
    }));
    await sleep(450);
    stepLogs.push({
      id: `LOG-${Date.now()}-5`,
      orderId,
      stepNumber: 5,
      stepTitle: "Inventory Ledger Decremented",
      timestamp: new Date().toLocaleTimeString(),
      details: `Stock deducted: ${lineItems.map((li) => `${li.quantity}x ${li.productName}`).join(", ")}.`,
      latencyMs: 105,
    });

    // Step 6: Order Marked Ready for Fulfilment
    setExecution((prev) => ({
      ...prev,
      currentStepId: 6,
      stepMessage: "Step 6: Order status updated to 'Ready for Fulfilment'. Completed in ~2.3s.",
    }));
    await sleep(400);
    stepLogs.push({
      id: `LOG-${Date.now()}-6`,
      orderId,
      stepNumber: 6,
      stepTitle: "Ready for Fulfilment Tagged",
      timestamp: new Date().toLocaleTimeString(),
      details: `All 6 automated stages executed with zero manual touchpoints. Ready for packing.`,
      latencyMs: 60,
    });

    // Finalize state update
    const completedOrder: AutomationOrder = {
      ...newOrder,
      orderStatus: "Ready for Fulfilment",
      stepsCompleted: [1, 2, 3, 4, 5, 6],
    };

    setState((prev) => {
      // Deduct inventory quantities
      const updatedProducts = prev.products.map((p) => {
        const line = lineItems.find((li) => li.productId === p.id);
        if (line) {
          return {
            ...p,
            stock: Math.max(0, p.stock - line.quantity),
          };
        }
        return p;
      });

      return {
        products: updatedProducts,
        orders: [completedOrder, ...prev.orders],
        auditLogs: [...stepLogs.reverse(), ...prev.auditLogs],
      };
    });

    // Execution complete
    setExecution({
      isRunning: false,
      currentStepId: 7, // Completed
      activeOrderId: orderId,
      activeOrder: completedOrder,
      stepMessage: `Automated sequence completed for Order ${orderId}. All 6 stages verified.`,
    });

    return { success: true, orderId };
  };

  const totalAutomatedOrders = state.orders.length;
  // Est: each manual order takes ~6-8 minutes of staff time to verify, email, update stock, and inform depot
  const totalTimeSavedMinutes = totalAutomatedOrders * 8;
  const activeCatalogStock = state.products.reduce((acc, p) => acc + p.stock, 0);

  return (
    <AutomationContext.Provider
      value={{
        state,
        isHydrated,
        execution,
        triggerWorkflow,
        resetDemoData,
        totalAutomatedOrders,
        totalTimeSavedMinutes,
        activeCatalogStock,
      }}
    >
      {children}
    </AutomationContext.Provider>
  );
};

export const useAutomationDemo = () => {
  const context = useContext(AutomationContext);
  if (!context) {
    throw new Error("useAutomationDemo must be used within an AutomationProvider");
  }
  return context;
};

