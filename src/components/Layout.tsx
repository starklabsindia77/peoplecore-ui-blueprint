
import { UserButton } from "./UserButton";
import { MainNav } from "./MainNav";
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader } from "./ui/sidebar";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-gray-50/50">
        <Sidebar>
          <SidebarHeader className="border-b border-border/50 h-[60px] flex items-center px-6">
            <h1 className="text-xl font-semibold text-primary">PeopleCore</h1>
          </SidebarHeader>
          <SidebarContent>
            <MainNav />
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-[60px] border-b bg-white flex items-center justify-between px-6 sticky top-0 z-30">
            <nav className="flex items-center gap-6">
              <h2 className="text-lg font-medium">Dashboard</h2>
            </nav>
            <div className="flex items-center gap-4">
              <UserButton />
            </div>
          </header>
          
          <main className="flex-1 p-6">
            <div className="mx-auto max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
