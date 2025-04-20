
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Employee } from "./types/employee";
import { EmployeeSearch } from "./employee/EmployeeSearch";
import { AddEmployeeDialog } from "./employee/AddEmployeeDialog";
import { EmployeeCard } from "./employee/EmployeeCard";

const mockEmployees: Employee[] = [
  {
    id: "EMP001",
    name: "John Doe",
    email: "john.doe@company.com",
    department: "Engineering",
    position: "Senior Developer",
    status: "active",
    joinDate: "2024-01-15",
  },
  {
    id: "EMP002",
    name: "Jane Smith",
    email: "jane.smith@company.com",
    department: "Marketing",
    position: "Marketing Manager",
    status: "active",
    joinDate: "2024-02-01",
  },
];

export function EmployeeManagement() {
  const [employees] = useState<Employee[]>(mockEmployees);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 flex-1">
          <EmployeeSearch 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>
        <AddEmployeeDialog />
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Employees</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="onboarding">Onboarding</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {filteredEmployees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </TabsContent>

        <TabsContent value="active" className="space-y-4">
          {filteredEmployees
            .filter(e => e.status === 'active')
            .map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </TabsContent>

        <TabsContent value="onboarding" className="space-y-4">
          {filteredEmployees
            .filter(e => e.status === 'onboarding')
            .map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
