
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <Card>
      <CardHeader>
        <CardTitle>
          Salary Breakdown - {month} {year}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Component</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Basic Salary</TableCell>
              <TableCell className="text-right">₹{basic.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>HRA</TableCell>
              <TableCell className="text-right">₹{hra.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Allowances</TableCell>
              <TableCell className="text-right">₹{allowances.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow className="font-medium">
              <TableCell>Gross Salary</TableCell>
              <TableCell className="text-right">₹{grossSalary.toLocaleString()}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Deductions</TableCell>
              <TableCell className="text-right text-destructive">
                -₹{deductions.toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>TDS</TableCell>
              <TableCell className="text-right text-destructive">
                -₹{tds.toLocaleString()}
              </TableCell>
            </TableRow>
            <TableRow className="font-bold">
              <TableCell>Net Salary</TableCell>
              <TableCell className="text-right">₹{netSalary.toLocaleString()}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
