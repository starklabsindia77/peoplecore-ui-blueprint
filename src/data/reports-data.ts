
import { Building, BarChart2, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Report {
  id: number;
  name: string;
  description: string;
  lastGenerated: string;
  icon: LucideIcon;
  category: string;
}

export const platformAdminReports: Report[] = [
  {
    id: 1,
    name: "Companies Growth Report",
    description: "Monthly new companies and subscription analytics",
    lastGenerated: "2025-04-19",
    icon: Building,
    category: "companies"
  },
  {
    id: 2,
    name: "Revenue Analytics",
    description: "Platform revenue and financial metrics",
    lastGenerated: "2025-04-18",
    icon: BarChart2,
    category: "revenue"
  },
  {
    id: 3,
    name: "Subscription Summary",
    description: "Active and expired subscriptions overview",
    lastGenerated: "2025-04-15",
    icon: FileText,
    category: "revenue"
  },
];

export const companyReports: Report[] = [
  {
    id: 1,
    name: "Employee Attendance Report",
    description: "Monthly attendance summary for all employees",
    lastGenerated: "2025-04-19",
    icon: Building,
    category: "employees"
  },
  {
    id: 2,
    name: "Leave Analytics",
    description: "Leave patterns and statistics",
    lastGenerated: "2025-04-18",
    icon: BarChart2,
    category: "employees"
  },
  {
    id: 3,
    name: "Payroll Summary",
    description: "Monthly payroll disbursement report",
    lastGenerated: "2025-04-15",
    icon: FileText,
    category: "payroll"
  },
];
