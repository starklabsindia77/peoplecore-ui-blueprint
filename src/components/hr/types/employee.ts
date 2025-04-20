
export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  status: "active" | "inactive" | "onboarding";
  joinDate: string;
}
