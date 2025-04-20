
import { UserButton } from "./UserButton";
import { MainNav } from "./MainNav";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger,
  SidebarRail,
  SidebarGroup
} from "./ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full flex bg-background">
        <Sidebar>
          <SidebarHeader className="h-14 flex items-center px-4 bg-sidebar-background border-b border-border">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <div className="bg-primary text-primary-foreground h-8 w-8 rounded-md flex items-center justify-center font-medium text-sm">
                  E
                </div>
                <h1 className="text-base font-medium text-foreground group-data-[collapsible=icon]:hidden">
                  Empora
                </h1>
              </div>
              <SidebarTrigger className="text-foreground/70 hover:text-foreground transition-colors" />
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-sidebar-background">
            <SidebarGroup>
              <MainNav />
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail className="bg-sidebar-background border-r border-border" />
        </Sidebar>
        
        <div className="flex-1 flex flex-col min-h-screen bg-background">
          <header className="h-14 bg-card border-b flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
            <div className="flex-1 flex items-center gap-6">
              <div className="max-w-md w-full relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search..." 
                  className="pl-9 bg-muted border-0 w-full focus:ring-2 focus:ring-ring/20"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UserButton />
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-7xl space-y-6">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
