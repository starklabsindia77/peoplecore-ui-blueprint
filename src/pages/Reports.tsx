
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Download, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const reports = [
  {
    id: 1,
    name: "Employee Attendance Report",
    description: "Monthly attendance summary for all employees",
    lastGenerated: "2025-04-19",
    icon: Users,
    category: "employees"
  },
  {
    id: 2,
    name: "Leave Analytics",
    description: "Leave patterns and statistics",
    lastGenerated: "2025-04-18",
    icon: BarChart2,
    category: "employees"
  },
  {
    id: 3,
    name: "Payroll Summary",
    description: "Monthly payroll disbursement report",
    lastGenerated: "2025-04-15",
    icon: FileText,
    category: "payroll"
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
          <p className="text-sm text-gray-500 mt-1">
            Generate and download company reports
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-white border">
          <TabsTrigger value="all">All Reports</TabsTrigger>
          <TabsTrigger value="employees">Employee Reports</TabsTrigger>
          <TabsTrigger value="payroll">Payroll Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report) => {
              const Icon = report.icon;
              return (
                <Card key={report.id} className="bg-white hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div className="flex items-center space-x-2">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Icon className="h-4 w-4 text-blue-600" />
                      </div>
                      <CardTitle className="text-base font-medium">
                        {report.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        Last generated: {report.lastGenerated}
                      </span>
                      <Button variant="outline" size="sm" className="h-8">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="employees" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports
              .filter((report) => report.category === "employees")
              .map((report) => {
                const Icon = report.icon;
                return (
                  <Card key={report.id} className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <CardTitle className="text-base font-medium">
                          {report.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">{report.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Last generated: {report.lastGenerated}
                        </span>
                        <Button variant="outline" size="sm" className="h-8">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>

        <TabsContent value="payroll" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reports
              .filter((report) => report.category === "payroll")
              .map((report) => {
                const Icon = report.icon;
                return (
                  <Card key={report.id} className="bg-white hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <div className="flex items-center space-x-2">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Icon className="h-4 w-4 text-blue-600" />
                        </div>
                        <CardTitle className="text-base font-medium">
                          {report.name}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">{report.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          Last generated: {report.lastGenerated}
                        </span>
                        <Button variant="outline" size="sm" className="h-8">
                          <Download className="mr-2 h-3 w-3" />
                          Download
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
