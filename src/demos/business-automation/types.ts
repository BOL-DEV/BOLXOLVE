export interface AutomationProduct {
  id: string;
  sku: string;
  name: string;
  category: "Apparel" | "Footwear" | "Accessories" | "Lifestyle";
  price: number;
  stock: number;
  reserved: number;
}

export interface AutomationLineItem {
  productId: string;
  productName: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export type StepExecutionStatus = "idle" | "running" | "completed";

export interface WorkflowStepDefinition {
  id: number;
  name: string;
  node: "Customer Ingestion" | "Order Database" | "Customer Gateway" | "Internal Ops Alert" | "Inventory Ledger" | "Fulfilment Queue";
  title: string;
  description: string;
  simulatedTimeMs: number;
}

export interface OrderNotificationRecord {
  customerEmailSubject: string;
  customerEmailRecipient: string;
  customerEmailBody: string;
  internalChannel: string;
  internalAlertTitle: string;
  internalAlertBody: string;
  packingSlipId: string;
  dispatchPriority: "Standard Dispatch" | "Priority Express";
}

export interface AutomationOrder {
  id: string;
  customerName: string;
  customerEmail: string;
  items: AutomationLineItem[];
  subtotal: number;
  shippingFee: number;
  totalAmount: number;
  paymentStatus: "Confirmed Online Payment" | "Cash on Delivery";
  orderStatus: "Order Received" | "Recorded & Confirmed" | "Ready for Fulfilment" | "Dispatched";
  createdAt: string;
  timestamp: number;
  stepsCompleted: number[];
  notifications: OrderNotificationRecord;
}

export interface WorkflowAuditLog {
  id: string;
  orderId: string;
  stepNumber: number;
  stepTitle: string;
  timestamp: string;
  details: string;
  latencyMs: number;
}

export interface AutomationDemoState {
  products: AutomationProduct[];
  orders: AutomationOrder[];
  auditLogs: WorkflowAuditLog[];
}

