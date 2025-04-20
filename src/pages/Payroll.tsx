import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calculator, Download } from "lucide-react";
import { PayrollStats } from "../components/payroll/PayrollStats";
import { CurrentPayrollPeriod } from "../components/payroll/CurrentPayrollPeriod";
import { EmployeeSalaryTable } from "../components/payroll/EmployeeSalaryTable";
import { PayrollHistory } from "../components/payroll/PayrollHistory";
import { SalaryConfigDialog } from "../components/payroll/SalaryConfigDialog";
import { PayslipDialog } from "../components/payroll/PayslipDialog";
import { SalaryStructureConfig } from "../components/payroll/SalaryStructureConfig";
import { PayslipTemplateConfig } from "../components/payroll/PayslipTemplateConfig";

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

const employees = [
  {
    id: "EMP-001",
    name: "John Doe",
    department: "Engineering",
    baseSalary: 85000,
    allowances: 2000,
    deductions: 1000,
    status: "Active",
    lastUpdated: "2025-04-01",
  },
  {
    id: "EMP-002",
    name: "Jane Smith",
    department: "Product",
    baseSalary: 90000,
    allowances: 2500,
    deductions: 1200,
    status: "Active",
    lastUpdated: "2025-04-01",
  },
  {
    id: "EMP-003",
    name: "Mike Johnson",
    department: "Design",
    baseSalary: 75000,
    allowances: 1800,
    deductions: 900,
    status: "Active",
    lastUpdated: "2025-04-01",
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

const currentPayrollPeriod = {
  month: "April",
  year: "2025",
  startDate: "2025-04-01",
  endDate: "2025-04-30",
  status: "Active",
  locked: false,
};

export default function Payroll() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [salaryConfigOpen, setSalaryConfigOpen] = useState(false);
  const [payslipOpen, setPayslipOpen] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  
  const handleConfigSalary = (employee) => {
    setSelectedEmployee(employee);
    setSalaryConfigOpen(true);
  };
  
  const handleGeneratePayslip = (employee) => {
    setSelectedEmployee(employee);
    setPayslipOpen(true);
  };
  
  const handleLockPayroll = () => {
    setIsLocked(true);
    // Here you would update the backend to lock the payroll period
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Payroll Management</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleLockPayroll} disabled={isLocked}>
            <Calculator className="h-4 w-4 mr-2" />
            {isLocked ? "Payroll Locked" : "Lock Payroll"}
          </Button>
          <Button>
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      <CurrentPayrollPeriod 
        period={currentPayrollPeriod}
        isLocked={isLocked}
      />

      <PayrollStats stats={payrollStats} />

      <div className="space-y-6">
        <CustomSalaryComponents />
        <SalaryStructureConfig />
        <PayslipTemplateConfig />
      </div>

      <EmployeeSalaryTable 
        employees={employees}
        isLocked={isLocked}
        onConfigSalary={handleConfigSalary}
        onGeneratePayslip={handleGeneratePayslip}
      />

      <PayrollHistory records={recentPayroll} />
      
      <SalaryConfigDialog 
        open={salaryConfigOpen} 
        onOpenChange={setSalaryConfigOpen} 
        employee={selectedEmployee} 
      />
      
      <PayslipDialog 
        open={payslipOpen} 
        onOpenChange={setPayslipOpen} 
        employee={selectedEmployee} 
        payrollPeriod={currentPayrollPeriod}
      />
    </div>
  );
}
