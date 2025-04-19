
import { Home, Users, Calendar, FileText, BarChart2, Settings, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Attendance", href: "/attendance", icon: Calendar },
  { name: "Leave", href: "/leave", icon: FileText },
  { name: "Reports", href: "/reports", icon: BarChart2 },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function MainNav() {
  return (
    <nav className="space-y-1">
      {navigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-100 hover:text-gray-900"
        >
          <item.icon className="mr-3 h-5 w-5" />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
