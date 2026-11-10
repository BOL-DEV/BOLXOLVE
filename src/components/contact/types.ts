export interface ContactFormData {
  fullName: string;
  email: string;
  business: string;
  service: string;
  projectDetails: string;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  service?: string;
  projectDetails?: string;
}

export const SERVICE_OPTIONS = [
  "Website & Digital Experience",
  "E-commerce Solution",
  "Custom Software / Business System",
  "Business Automation",
  "AI Integration",
  "Education Technology",
  "Existing Product Enquiry",
  "Something Else",
] as const;

export const CONTACT_DETAILS = {
  email: "contact@bolxolve.com",
  phone: "07087035189",
  website: "https://bolxolve.com",
} as const;

