
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";
import { getNavigationByRole } from "@/lib/navigation-config";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
} from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar/sidebar-context";

export function MainNav() {
  const location = useLocation();
  const { state } = useSidebar();
  const { user } = useAuth();

  const navigation = user ? getNavigationByRole(user.role) : [];

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                isActive={location.pathname === item.href}
                className="hover:bg-white/10 text-gray-300"
                tooltip={state === "collapsed" ? item.name : undefined}
              >
                <Link to={item.href}>
                  <item.icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
