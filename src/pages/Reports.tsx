
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const reports = [
  {
    id: 1,
    name: "Employee Attendance Report",
    description: "Monthly attendance summary for all employees",
    lastGenerated: "2025-04-19",
  },
  {
    id: 2,
    name: "Leave Analytics",
    description: "Leave patterns and statistics",
    lastGenerated: "2025-04-18",
  },
  {
    id: 3,
    name: "Payroll Summary",
    description: "Monthly payroll disbursement report",
    lastGenerated: "2025-04-15",
  },
];

export default function Reports() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Reports</h1>
      </div>

      <div className="grid gap-6">
        {reports.map((report) => (
          <Card key={report.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div className="space-y-1">
                <CardTitle className="text-lg flex items-center gap-2">
                  <BarChart2 className="h-5 w-5" />
                  {report.name}
                </CardTitle>
                <p className="text-sm text-gray-500">{report.description}</p>
              </div>
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-500">
                Last generated: {report.lastGenerated}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
