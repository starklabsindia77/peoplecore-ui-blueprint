
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { Employee } from "../types/employee";

interface EmployeeCardProps {
  employee: Employee;
}

export function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">
          {employee.name}
        </CardTitle>
        <Button variant="ghost" size="icon">
          <Mail className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Department:</span>
            <span>{employee.department}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Position:</span>
            <span>{employee.position}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Join Date:</span>
            <span>{employee.joinDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Status:</span>
            <span className={`capitalize ${
              employee.status === 'active' ? 'text-green-600' : 
              employee.status === 'onboarding' ? 'text-blue-600' : 'text-red-600'
            }`}>
              {employee.status}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
