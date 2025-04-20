import { Building, BarChart2, FileText, CreditCard, Shield, Users } from "lucide-react";
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
    name: "Companies Overview",
    description: "Detailed analysis of company growth and activity",
    lastGenerated: "2025-04-19",
    icon: Building,
    category: "companies"
  },
  {
    id: 2,
    name: "Revenue Analytics",
    description: "Platform revenue and financial performance metrics",
    lastGenerated: "2025-04-18",
    icon: BarChart2,
    category: "revenue"
  },
  {
    id: 3,
    name: "Subscription Trends",
    description: "Analysis of subscription plans and upgrades",
    lastGenerated: "2025-04-15",
    icon: CreditCard,
    category: "revenue"
  },
  {
    id: 4,
    name: "User Access Audit",
    description: "Platform access and permissions audit log",
    lastGenerated: "2025-04-17",
    icon: Shield,
    category: "security"
  },
  {
    id: 5,
    name: "Platform Usage",
    description: "Platform feature usage and engagement metrics",
    lastGenerated: "2025-04-16",
    icon: Users,
    category: "companies"
  }
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
