
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, Users } from "lucide-react";

const payrollStats = [
  {
    title: "Total Payroll",
    value: "$125,000",
    change: "+2.5%",
    description: "From last month",
  },
  {
    title: "Employees Processed",
    value: "58",
    change: "100%",
    description: "All employees included",
  },
  {
    title: "Average Salary",
    value: "$85,000",
    change: "+5%",
    description: "Annual projection",
  },
];

const recentPayroll = [
  {
    id: "PR-2025-04",
    date: "April 2025",
    employees: 58,
    total: "$125,000",
    status: "Processed",
  },
  {
    id: "PR-2025-03",
    date: "March 2025",
    employees: 56,
    total: "$122,000",
    status: "Completed",
  },
  {
    id: "PR-2025-02",
    date: "February 2025",
    employees: 55,
    total: "$120,000",
    status: "Completed",
  },
];

export default function Payroll() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Payroll Management</h1>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {payrollStats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {stat.title}
              </CardTitle>
              {stat.title.includes("Total") ? (
                <CreditCard className="h-4 w-4 text-gray-500" />
              ) : (
                <Users className="h-4 w-4 text-gray-500" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">
                <span className="text-green-500">{stat.change}</span>{" "}
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Payroll History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Payroll ID</th>
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Employees</th>
                  <th className="text-left py-3 px-4">Total</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentPayroll.map((payroll) => (
                  <tr key={payroll.id} className="border-b">
                    <td className="py-3 px-4">{payroll.id}</td>
                    <td className="py-3 px-4">{payroll.date}</td>
                    <td className="py-3 px-4">{payroll.employees}</td>
                    <td className="py-3 px-4">{payroll.total}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          payroll.status === "Processed"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {payroll.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
