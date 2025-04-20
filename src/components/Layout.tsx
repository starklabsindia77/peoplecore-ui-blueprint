
import { UserButton } from "./UserButton";
import { MainNav } from "./MainNav";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger,
  SidebarRail,
  SidebarGroup,
  SidebarSeparator
} from "./ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen w-full flex">
        <Sidebar>
          <SidebarHeader className="h-14 flex items-center px-4 bg-[#1a1f2c]">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 text-white h-8 w-8 rounded-md flex items-center justify-center font-medium text-sm">
                G
              </div>
              <h1 className="text-base font-medium text-gray-100">Gemini Hire</h1>
            </div>
            <SidebarTrigger 
              className="ml-auto text-gray-400 hover:text-white transition-colors" 
            />
          </SidebarHeader>
          <SidebarContent className="bg-[#1a1f2c]">
            <SidebarGroup>
              <MainNav />
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail className="bg-[#1a1f2c] border-r border-gray-800/50" />
        </Sidebar>
        
        <div className="flex-1 flex flex-col min-h-screen bg-[#f8f9fb]">
          <header className="h-14 bg-white border-b flex items-center justify-between px-6 sticky top-0 z-30 shadow-sm">
            <div className="flex-1 flex items-center gap-6">
              <div className="max-w-md w-full relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search..." 
                  className="pl-9 bg-gray-50/50 border-0 w-full focus:ring-2 focus:ring-blue-500/10"
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
