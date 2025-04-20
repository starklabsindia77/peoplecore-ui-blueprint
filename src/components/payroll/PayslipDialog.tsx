
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function PayslipDialog({ open, onOpenChange, employee, payrollPeriod }) {
  const handleDownload = () => {
    console.log("Downloading payslip for:", employee?.id);
    // Handle payslip download (in a real app, this would generate a PDF)
  };

  const handlePrint = () => {
    console.log("Printing payslip for:", employee?.id);
    // Handle payslip printing
  };

  if (!employee || !payrollPeriod) return null;

  // Calculate salary components
  const netSalary = employee.baseSalary + employee.allowances - employee.deductions;
  const tax = Math.round(employee.baseSalary * 0.2); // Example tax calculation (20%)
  const takeHome = netSalary - tax;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px]">
        <DialogHeader>
          <DialogTitle>Employee Payslip</DialogTitle>
          <DialogDescription>
            Payslip for {payrollPeriod.month} {payrollPeriod.year}
          </DialogDescription>
        </DialogHeader>
        
        <div className="border rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">ACME Corp</h2>
            <div className="text-right">
              <p className="font-semibold">Payslip #{payrollPeriod.month.substring(0, 3).toUpperCase()}{payrollPeriod.year}</p>
              <p className="text-sm text-gray-500">
                {payrollPeriod.startDate} - {payrollPeriod.endDate}
              </p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="font-semibold">Employee Details</h3>
              <div className="text-sm space-y-1 mt-2">
                <p><span className="text-gray-500">ID:</span> {employee.id}</p>
                <p><span className="text-gray-500">Name:</span> {employee.name}</p>
                <p><span className="text-gray-500">Department:</span> {employee.department}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold">Payment Details</h3>
              <div className="text-sm space-y-1 mt-2">
                <p><span className="text-gray-500">Payment Date:</span> {payrollPeriod.endDate}</p>
                <p><span className="text-gray-500">Payment Method:</span> Direct Deposit</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="mt-4">
            <h3 className="font-semibold">Earnings & Deductions</h3>
            <div className="mt-2">
              <div className="grid grid-cols-2 bg-gray-50 p-2 font-medium text-sm">
                <div>Description</div>
                <div className="text-right">Amount</div>
              </div>
              
              <div className="grid grid-cols-2 border-b py-2 text-sm">
                <div>Base Salary</div>
                <div className="text-right">${employee.baseSalary.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 border-b py-2 text-sm">
                <div>Allowances</div>
                <div className="text-right">${employee.allowances.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 border-b py-2 text-sm">
                <div>Gross Salary</div>
                <div className="text-right font-medium">${(employee.baseSalary + employee.allowances).toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 border-b py-2 text-sm">
                <div>Deductions</div>
                <div className="text-right">-${employee.deductions.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 border-b py-2 text-sm">
                <div>Tax (20%)</div>
                <div className="text-right">-${tax.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-2 mt-2 py-2 font-bold">
                <div>Net Pay</div>
                <div className="text-right">${takeHome.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>
        
        <DialogFooter className="flex gap-2">
          <Button variant="outline" onClick={handlePrint}>
            <Printer className="mr-2 h-4 w-4" />
            Print
          </Button>
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
