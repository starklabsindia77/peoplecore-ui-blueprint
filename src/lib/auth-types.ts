
export type UserRole = "platform_admin" | "company_admin" | "company_hr" | "company_employee";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}
