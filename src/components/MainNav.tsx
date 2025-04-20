
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/auth-context";
import { getNavigationByRole } from "@/lib/navigation-config";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarSeparator,
  SidebarGroupLabel,
} from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar/sidebar-context";

export function MainNav() {
  const location = useLocation();
  const { state } = useSidebar();
  const { user } = useAuth();

  const navigation = user ? getNavigationByRole(user.role) : [];
  
  // Split navigation into main and organization sections
  const mainNavigation = navigation.slice(0, 6);
  const orgNavigation = navigation.slice(6);

  return (
    <>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {mainNavigation.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={location.pathname === item.href}
                  className="hover:bg-white/5 text-gray-300 group h-10"
                  tooltip={state === "collapsed" ? item.name : undefined}
                >
                  <Link to={item.href}>
                    <item.icon className="h-5 w-5 transition-transform group-hover:scale-105" />
                    <span className="font-normal text-sm ml-3">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      {orgNavigation.length > 0 && (
        <>
          <SidebarSeparator className="my-3 bg-gray-700/30" />
          <SidebarGroup>
            <SidebarGroupLabel className="text-xs font-medium text-gray-500 px-4 mb-2 group-data-[collapsible=icon]:opacity-0">
              Organization
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {orgNavigation.map((item) => (
                  <SidebarMenuItem key={item.name}>
                    <SidebarMenuButton
                      asChild
                      isActive={location.pathname === item.href}
                      className="hover:bg-white/5 text-gray-300 group h-10"
                      tooltip={state === "collapsed" ? item.name : undefined}
                    >
                      <Link to={item.href}>
                        <item.icon className="h-5 w-5 transition-transform group-hover:scale-105" />
                        <span className="font-normal text-sm ml-3">{item.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </>
      )}
    </>
  );
}
