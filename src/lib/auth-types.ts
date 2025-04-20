
export type UserRole = "platform_admin" | "company_admin" | "company_hr" | "company_employee";

export interface Company {
  id: string;
  name: string;
  subscriptionStatus: "active" | "trial" | "expired";
  subscriptionPlan: "basic" | "pro" | "enterprise";
  trialEndsAt?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  companyId: string;
  company: Company;
}
