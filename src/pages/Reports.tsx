
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/auth-context";
import { ReportsGrid } from "@/components/reports/ReportsGrid";
import { platformAdminReports, companyReports } from "@/data/reports-data";

export default function Reports() {
  const { user } = useAuth();
  const isPlatformAdmin = user?.role === "platform_admin";
  const reports = isPlatformAdmin ? platformAdminReports : companyReports;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="text-sm text-gray-500 mt-1">
            {isPlatformAdmin 
              ? "Generate and download platform analytics reports"
              : "Generate and download company reports"
            }
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-white border">
          <TabsTrigger value="all">All Reports</TabsTrigger>
          {isPlatformAdmin ? (
            <>
              <TabsTrigger value="companies">Company Reports</TabsTrigger>
              <TabsTrigger value="revenue">Revenue Reports</TabsTrigger>
            </>
          ) : (
            <>
              <TabsTrigger value="employees">Employee Reports</TabsTrigger>
              <TabsTrigger value="payroll">Payroll Reports</TabsTrigger>
            </>
          )}
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <ReportsGrid reports={reports} />
        </TabsContent>

        {isPlatformAdmin ? (
          <>
            <TabsContent value="companies" className="mt-6">
              <ReportsGrid reports={reports} category="companies" />
            </TabsContent>
            <TabsContent value="revenue" className="mt-6">
              <ReportsGrid reports={reports} category="revenue" />
            </TabsContent>
          </>
        ) : (
          <>
            <TabsContent value="employees" className="mt-6">
              <ReportsGrid reports={reports} category="employees" />
            </TabsContent>
            <TabsContent value="payroll" className="mt-6">
              <ReportsGrid reports={reports} category="payroll" />
            </TabsContent>
          </>
        )}
      </Tabs>
    </div>
  );
}
