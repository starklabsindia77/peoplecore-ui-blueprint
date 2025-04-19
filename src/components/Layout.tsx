
import { UserButton } from "./UserButton";
import { MainNav } from "./MainNav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col fixed h-screen bg-white border-r">
          <div className="flex flex-col flex-1">
            <div className="px-4 py-4 border-b">
              <h1 className="text-xl font-semibold text-gray-900">PeopleCore</h1>
            </div>
            <div className="flex-1 flex flex-col pt-5">
              <MainNav />
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 md:pl-64">
          <div className="sticky top-0 z-10 bg-white border-b">
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="text-lg font-medium text-gray-900">Dashboard</h2>
              <UserButton />
            </div>
          </div>
          <main className="flex-1">
            <div className="py-6 px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
