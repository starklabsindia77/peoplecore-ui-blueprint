
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Employee {
  id: string;
  name: string;
  department: string;
  baseSalary: number;
  allowances: number;
  deductions: number;
  status: string;
  lastUpdated: string;
}

interface EmployeeSalaryTableProps {
  employees: Employee[];
  isLocked: boolean;
  onConfigSalary: (employee: Employee) => void;
  onGeneratePayslip: (employee: Employee) => void;
}

export function EmployeeSalaryTable({ 
  employees, 
  isLocked, 
  onConfigSalary, 
  onGeneratePayslip 
}: EmployeeSalaryTableProps) {
  return (
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
                          onClick={() => onConfigSalary(employee)}
                        >
                          Configure
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => onGeneratePayslip(employee)}
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
  );
}
