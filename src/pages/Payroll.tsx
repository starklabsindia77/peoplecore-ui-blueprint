import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Download, Users, Receipt, Calculator } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

// Sample employee salary data
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

// Active payroll period
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

      {/* Current Payroll Period Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            Current Payroll Period
          </CardTitle>
          <Receipt className="h-4 w-4 text-gray-500" />
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold">{currentPayrollPeriod.month} {currentPayrollPeriod.year}</h3>
              <p className="text-sm text-gray-500">
                {currentPayrollPeriod.startDate} to {currentPayrollPeriod.endDate}
              </p>
            </div>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                isLocked
                  ? "bg-orange-100 text-orange-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {isLocked ? "Locked" : "Active"}
            </span>
          </div>
        </CardContent>
      </Card>

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

      <div className="space-y-6">
        <SalaryStructureConfig />
        <PayslipTemplateConfig />
      </div>

      {/* Employee Salary Configuration Table */}
      <Card>
        <CardHeader>
          <CardTitle>Employee Salary Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Employee ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Base Salary</TableHead>
                  <TableHead>Allowances</TableHead>
                  <TableHead>Deductions</TableHead>
                  <TableHead>Net Salary</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => {
                  const netSalary = employee.baseSalary + employee.allowances - employee.deductions;
                  return (
                    <TableRow key={employee.id}>
                      <TableCell>{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.department}</TableCell>
                      <TableCell>${employee.baseSalary.toLocaleString()}</TableCell>
                      <TableCell>${employee.allowances.toLocaleString()}</TableCell>
                      <TableCell>${employee.deductions.toLocaleString()}</TableCell>
                      <TableCell>${netSalary.toLocaleString()}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            employee.status === "Active"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {employee.status}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleConfigSalary(employee)}
                          >
                            Configure
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={() => handleGeneratePayslip(employee)}
                            disabled={!isLocked}
                          >
                            Payslip
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

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
      
      {/* Dialogs */}
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
