export type ProductCategory =
  | "Cement"
  | "Reinforcement Bars"
  | "Roofing Sheets"
  | "Paint & Finishes"
  | "Plumbing Materials"
  | "Electrical Supplies"
  | "Blocks & Masonry";

export interface Product {
  id: string;
  sku: string;
  name: string;
  category: ProductCategory;
  unit: string;
  costPrice: number;
  sellingPrice: number;
  stock: number;
  minThreshold: number;
}

export interface Customer {
  id: string;
  name: string;
  companyOrSite: string;
  phone: string;
  email: string;
  address: string;
  totalOrders: number;
  totalSpent: number;
}

export interface Supplier {
  id: string;
  companyName: string;
  contactPerson: string;
  phone: string;
  email: string;
  suppliedMaterials: string;
  paymentTerms: string;
  recentSupplyDate: string;
  status: "Active" | "Pending Delivery";
}

export interface SaleLineItem {
  productId: string;
  productName: string;
  unit: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
}

export interface Transaction {
  id: string;
  customerId: string;
  customerName: string;
  customerCompany: string;
  date: string;
  timestamp: number;
  items: SaleLineItem[];
  subtotal: number;
  totalAmount: number;
  paymentMethod: "Bank Transfer" | "POS Card" | "Cash";
  status: "Completed" | "Pending Dispatch";
  notes?: string;
}

export interface BusinessNotification {
  id: string;
  type: "warning" | "info" | "success";
  title: string;
  message: string;
  date: string;
}

export interface DemoState {
  products: Product[];
  customers: Customer[];
  suppliers: Supplier[];
  transactions: Transaction[];
  notifications: BusinessNotification[];
}

