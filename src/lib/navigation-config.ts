import { Home, Users, Calendar, FileText, BarChart2, Settings, Building, Shield, CreditCard, CheckCircle2, Bell, BookOpen, Briefcase, HeartPulse } from "lucide-react";
import { UserRole } from "./auth-types";

const baseNavigation = {
  platform_admin: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Companies", href: "/companies", icon: Building },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Subscriptions", href: "/subscriptions", icon: CreditCard },
    { name: "Permissions", href: "/permissions", icon: Shield },
    { name: "Settings", href: "/settings", icon: Settings },
  ],
  company_admin: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Departments", href: "/departments", icon: Briefcase },
    { name: "Attendance", href: "/attendance", icon: CheckCircle2 },
    { name: "Leave Management", href: "/leave", icon: Calendar },
    { name: "Payroll", href: "/payroll", icon: CreditCard },
    { name: "Training", href: "/training", icon: BookOpen },
    { name: "Health & Safety", href: "/health-safety", icon: HeartPulse },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Notifications", href: "/notifications", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ],
  company_hr: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Attendance", href: "/attendance", icon: CheckCircle2 },
    { name: "Leave", href: "/leave", icon: Calendar },
    { name: "Training", href: "/training", icon: BookOpen },
    { name: "Health & Safety", href: "/health-safety", icon: HeartPulse },
  ],
  company_employee: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Attendance", href: "/attendance", icon: Calendar },
    { name: "Leave", href: "/leave", icon: FileText },
  ],
};

export const getNavigationByRole = (role: UserRole) => {
  return baseNavigation[role] || [];
};
