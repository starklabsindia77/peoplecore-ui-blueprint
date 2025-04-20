
import { useAuth } from "@/contexts/auth-context";
import { HRDashboard } from "@/components/dashboard/HRDashboard";
import { EmployeeDashboard } from "@/components/dashboard/EmployeeDashboard";
import { PlatformAdminDashboard } from "@/components/dashboard/PlatformAdminDashboard";
import { CompanyAdminDashboard } from "@/components/dashboard/CompanyAdminDashboard";

export default function Index() {
  const { user } = useAuth();
  const isPlatformAdmin = user?.role === "platform_admin";
  const isCompanyAdmin = user?.role === "company_admin";
  const isHR = user?.role === "company_hr";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {isPlatformAdmin && "Platform Dashboard"}
            {isCompanyAdmin && "Company Dashboard"}
            {isHR && "HR Dashboard"}
            {!isPlatformAdmin && !isCompanyAdmin && !isHR && "Employee Dashboard"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {isPlatformAdmin 
              ? "Platform management and company overview" 
              : isCompanyAdmin
              ? "Company management and employee overview"
              : isHR
              ? "HR management and employee oversight"
              : "Your personal workspace"}
          </p>
        </div>
      </div>

      {isPlatformAdmin && <PlatformAdminDashboard />}
      {isCompanyAdmin && <CompanyAdminDashboard />}
      {isHR && <HRDashboard />}
      {!isPlatformAdmin && !isCompanyAdmin && !isHR && <EmployeeDashboard />}
    </div>
  );
}
