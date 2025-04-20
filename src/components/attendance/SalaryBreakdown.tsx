
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

interface SalaryBreakdownProps {
  month: string;
  year: number;
  basic: number;
  hra: number;
  allowances: number;
  deductions: number;
  tds: number;
}

export function SalaryBreakdown({
  month,
  year,
  basic,
  hra,
  allowances,
  deductions,
  tds,
}: SalaryBreakdownProps) {
  const grossSalary = basic + hra + allowances;
  const totalDeductions = deductions + tds;
  const netSalary = grossSalary - totalDeductions;

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Salary Breakdown - {month} {year}</CardTitle>
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
        <Card className="bg-white mb-4">
          <CardContent className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold">Net Pay: ₹{netSalary.toLocaleString()}</h3>
              <p className="text-sm text-muted-foreground">For {month} {year}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold">Earnings</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Basic Salary</span>
                    <span>₹{basic.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>HRA</span>
                    <span>₹{hra.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Other Allowances</span>
                    <span>₹{allowances.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total Earnings</span>
                    <span>₹{grossSalary.toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Deductions</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Standard Deductions</span>
                    <span className="text-red-600">₹{deductions.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>TDS</span>
                    <span className="text-red-600">₹{tds.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total Deductions</span>
                    <span className="text-red-600">₹{totalDeductions.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
