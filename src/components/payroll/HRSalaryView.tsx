
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarDays } from "lucide-react";

interface SalaryMonth {
  month: string;
  basic: number;
  hra: number;
  allowances: number;
  deductions: number;
  tds: number;
  netSalary: number;
  status: "Pending" | "Processed" | "Paid";
}

export function HRSalaryView() {
  const monthlySalaries: SalaryMonth[] = [
    {
      month: "April 2025",
      basic: 50000,
      hra: 20000,
      allowances: 10000,
      deductions: 5000,
      tds: 2500,
      netSalary: 72500,
      status: "Pending"
    },
    {
      month: "March 2025",
      basic: 50000,
      hra: 20000,
      allowances: 10000,
      deductions: 5000,
      tds: 2500,
      netSalary: 72500,
      status: "Paid"
    }
  ];

  const annualSummary = {
    year: 2025,
    totalBasic: 600000,
    totalHRA: 240000,
    totalAllowances: 120000,
    totalDeductions: 60000,
    totalTDS: 30000,
    totalNetSalary: 870000
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>My Salary Structure</span>
          <Button variant="outline" size="sm">
            <CalendarDays className="h-4 w-4 mr-2" />
            Download Statement
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">Monthly View</TabsTrigger>
            <TabsTrigger value="annual">Annual Summary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monthly" className="space-y-4">
            {monthlySalaries.map((salary) => (
              <Card key={salary.month}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{salary.month}</h3>
                      <p className="text-sm text-muted-foreground">Net Salary: ₹{salary.netSalary.toLocaleString()}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      salary.status === "Paid" 
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {salary.status}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Basic</p>
                      <p className="font-medium">₹{salary.basic.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">HRA</p>
                      <p className="font-medium">₹{salary.hra.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Allowances</p>
                      <p className="font-medium">₹{salary.allowances.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Deductions</p>
                      <p className="font-medium text-red-600">-₹{salary.deductions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">TDS</p>
                      <p className="font-medium text-red-600">-₹{salary.tds.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="annual">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">Annual Summary {annualSummary.year}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Basic</p>
                    <p className="font-medium">₹{annualSummary.totalBasic.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total HRA</p>
                    <p className="font-medium">₹{annualSummary.totalHRA.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Allowances</p>
                    <p className="font-medium">₹{annualSummary.totalAllowances.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Deductions</p>
                    <p className="font-medium text-red-600">-₹{annualSummary.totalDeductions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total TDS</p>
                    <p className="font-medium text-red-600">-₹{annualSummary.totalTDS.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Net Salary</p>
                    <p className="font-medium text-lg">₹{annualSummary.totalNetSalary.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
