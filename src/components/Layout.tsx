
import { UserButton } from "./UserButton";
import { MainNav } from "./MainNav";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarHeader,
  SidebarTrigger 
} from "./ui/sidebar";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex bg-[#f8f9fb]">
        <Sidebar className="border-r border-gray-200">
          <SidebarHeader className="border-b h-[60px] flex items-center px-4 bg-[#1A1F2C]">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 text-white h-8 w-8 rounded flex items-center justify-center font-semibold">
                P
              </div>
              <h1 className="text-lg font-semibold text-white">PeopleCore</h1>
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-[#1A1F2C]">
            <MainNav />
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 flex flex-col min-h-screen">
          <header className="h-[60px] bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-30">
            <div className="flex-1 flex items-center gap-6">
              <SidebarTrigger className="text-gray-500 hover:text-gray-700" />
              <div className="max-w-md w-full relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search..." 
                  className="pl-9 bg-gray-50 border-0 w-full"
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
