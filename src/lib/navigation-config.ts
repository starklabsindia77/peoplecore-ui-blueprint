
import { Home, Users, Calendar, FileText, BarChart2, Settings } from "lucide-react";
import { UserRole } from "./auth-types";

const baseNavigation = {
  platform_admin: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Companies", href: "/companies", icon: Users },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
  ],
  company_admin: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
  ],
  company_hr: [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Employees", href: "/employees", icon: Users },
    { name: "Attendance", href: "/attendance", icon: Calendar },
    { name: "Leave", href: "/leave", icon: FileText },
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
