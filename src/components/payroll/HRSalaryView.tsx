
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface SalaryMonth {
  month: string;
  basic: number;
  hra: number;
  transport: number;
  specialAllowance: number;
  mealAllowance: number;
  internetAllowance: number;
  wfoAllowances: number;
  pf: number;
  incomeTax: number;
  status: "Pending" | "Processed" | "Paid";
}

export function HRSalaryView() {
  const monthlySalaries: SalaryMonth[] = [
    {
      month: "April 2025",
      basic: 37700,
      hra: 15000,
      transport: 2000,
      specialAllowance: 32298,
      mealAllowance: 2500,
      internetAllowance: 1200,
      wfoAllowances: 5242,
      pf: 1800,
      incomeTax: 6180,
      status: "Pending"
    },
    {
      month: "March 2025",
      basic: 37700,
      hra: 15000,
      transport: 2000,
      specialAllowance: 32298,
      mealAllowance: 2500,
      internetAllowance: 1200,
      wfoAllowances: 5242,
      pf: 1800,
      incomeTax: 6180,
      status: "Paid"
    }
  ];

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Salary Structure</CardTitle>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <FileText className="h-4 w-4 mr-2" />
              View Payslip
            </Button>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <Tabs defaultValue="monthly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="monthly">Monthly View</TabsTrigger>
            <TabsTrigger value="annual">Annual Summary</TabsTrigger>
          </TabsList>
          
          <TabsContent value="monthly">
            {monthlySalaries.map((salary, index) => (
              <Card key={salary.month} className="mb-4 bg-white">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="font-semibold text-lg">{salary.month}</h3>
                      <p className="text-sm text-muted-foreground">
                        Net Pay: ₹{(Object.values(salary).filter(v => typeof v === 'number').reduce((a, b) => a + b, 0) - salary.pf - salary.incomeTax).toLocaleString()}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      salary.status === "Paid" 
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {salary.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="font-semibold mb-2">Earnings</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>BASIC</span>
                          <span>₹{salary.basic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>HRA</span>
                          <span>₹{salary.hra.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>TRANSPORT</span>
                          <span>₹{salary.transport.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>SPECIAL ALLOWANCE</span>
                          <span>₹{salary.specialAllowance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>MEAL ALLOWANCE</span>
                          <span>₹{salary.mealAllowance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>INTERNET ALLOWANCE</span>
                          <span>₹{salary.internetAllowance.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>WFO ALLOWANCES</span>
                          <span>₹{salary.wfoAllowances.toLocaleString()}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Total Earnings</span>
                          <span>₹{(salary.basic + salary.hra + salary.transport + salary.specialAllowance + salary.mealAllowance + salary.internetAllowance + salary.wfoAllowances).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold mb-2">Deductions</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>PF</span>
                          <span className="text-red-600">₹{salary.pf.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>INCOME TAX</span>
                          <span className="text-red-600">₹{salary.incomeTax.toLocaleString()}</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-semibold">
                          <span>Total Deductions</span>
                          <span className="text-red-600">₹{(salary.pf + salary.incomeTax).toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          
          <TabsContent value="annual">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-6">Annual Summary 2025</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Annual Earnings</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Total Basic</span>
                        <span>₹{(37700 * 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total HRA</span>
                        <span>₹{(15000 * 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Allowances</span>
                        <span>₹{((2000 + 32298 + 2500 + 1200 + 5242) * 12).toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Gross Annual Salary</span>
                        <span>₹{((37700 + 15000 + 2000 + 32298 + 2500 + 1200 + 5242) * 12).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Annual Deductions</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Total PF</span>
                        <span className="text-red-600">₹{(1800 * 12).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Income Tax</span>
                        <span className="text-red-600">₹{(6180 * 12).toLocaleString()}</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-semibold">
                        <span>Total Annual Deductions</span>
                        <span className="text-red-600">₹{((1800 + 6180) * 12).toLocaleString()}</span>
                      </div>
                    </div>
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
