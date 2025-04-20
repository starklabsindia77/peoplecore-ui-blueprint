
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Search, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EmployeeData {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  location: string;
  avatar?: string;
}

// Mock data for company directory
const employeesList: EmployeeData[] = [
  {
    id: "1",
    name: "Jane Smith",
    position: "HR Director",
    department: "Human Resources",
    email: "jane.smith@acmehr.com",
    phone: "+1 (555) 123-4567",
    location: "New York Office",
  },
  {
    id: "2",
    name: "Michael Johnson",
    position: "Senior Developer",
    department: "Engineering",
    email: "michael.johnson@acmehr.com",
    phone: "+1 (555) 234-5678",
    location: "Remote",
  },
  {
    id: "3",
    name: "Sarah Williams",
    position: "Marketing Manager",
    department: "Marketing",
    email: "sarah.williams@acmehr.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago Office",
  },
  {
    id: "4",
    name: "David Brown",
    position: "Finance Analyst",
    department: "Finance",
    email: "david.brown@acmehr.com",
    phone: "+1 (555) 456-7890",
    location: "New York Office",
  },
  {
    id: "5",
    name: "Lisa Miller",
    position: "Project Manager",
    department: "Operations",
    email: "lisa.miller@acmehr.com",
    phone: "+1 (555) 567-8901",
    location: "San Francisco Office",
  },
];

export function CompanyDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeData | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  const filteredEmployees = employeesList.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmployeeClick = (employee: EmployeeData) => {
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Search className="h-5 w-5 text-gray-400" />
        <Input
          placeholder="Search by name, department, or position..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredEmployees.map((employee) => (
          <Card key={employee.id} className="cursor-pointer hover:bg-gray-50" onClick={() => handleEmployeeClick(employee)}>
            <CardContent className="p-4 flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <div className="bg-primary text-white h-full w-full rounded-full flex items-center justify-center">
                  {employee.name.charAt(0)}
                </div>
              </Avatar>
              <div>
                <h3 className="font-medium text-base">{employee.name}</h3>
                <p className="text-sm text-gray-500">{employee.position}</p>
                <p className="text-xs text-gray-400">{employee.department}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        {selectedEmployee && (
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Employee Details</DialogTitle>
              <DialogDescription>Contact information</DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
              <Avatar className="h-20 w-20">
                <div className="bg-primary text-white h-full w-full rounded-full flex items-center justify-center text-2xl">
                  {selectedEmployee.name.charAt(0)}
                </div>
              </Avatar>
              <div className="text-center">
                <h2 className="text-xl font-semibold">{selectedEmployee.name}</h2>
                <p className="text-gray-600">{selectedEmployee.position}</p>
                <p className="text-gray-500">{selectedEmployee.department}</p>
              </div>
              <div className="w-full space-y-2 pt-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <p className="text-sm">{selectedEmployee.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <p className="text-sm">{selectedEmployee.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <p className="text-sm">{selectedEmployee.location}</p>
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <Button size="sm" variant="outline" onClick={() => window.open(`mailto:${selectedEmployee.email}`)}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Button>
                <Button size="sm" variant="outline" onClick={() => window.open(`tel:${selectedEmployee.phone}`)}>
                  <Phone className="h-4 w-4 mr-2" />
                  Call
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
