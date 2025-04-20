import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const attendanceDataByCompany = {
  company1: [
    { 
      employeeId: "1",
      employeeName: "John Doe",
      department: "Engineering",
      date: "2025-04-19", 
      status: "Present", 
      timeIn: "09:00", 
      timeOut: "17:30" 
    },
    { 
      employeeId: "2",
      employeeName: "Jane Smith",
      department: "Marketing",
      date: "2025-04-19", 
      status: "Late", 
      timeIn: "10:15", 
      timeOut: "18:00" 
    },
    { 
      employeeId: "3",
      employeeName: "Mike Johnson",
      department: "Sales",
      date: "2025-04-19", 
      status: "Present", 
      timeIn: "08:55", 
      timeOut: "17:45" 
    },
  ],
};

export default function Attendance() {
  const { user } = useAuth();
  
  if (!user) return null;

  const attendanceData = attendanceDataByCompany[user.companyId] || [];
  const isCompanyAdmin = user.role === "company_admin";
  const isHR = user.role === "company_hr";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Attendance Management</h1>
          <p className="text-sm text-gray-500">
            Company: {user.company.name}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-500">April 2025</span>
          </div>
          <Badge 
            variant={user.company.subscriptionStatus === 'active' ? 'default' : 'secondary'}
            className="ml-2"
          >
            {user.company.subscriptionPlan.toUpperCase()}
          </Badge>
        </div>
      </div>

      {(isCompanyAdmin || isHR) && (
        <div className="flex gap-4 items-center">
          <div className="w-[200px]">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Filter by Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex-1">
            <Input placeholder="Search by employee name..." />
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-gray-500">Out of 30 employees</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-gray-500">6.67% of workforce</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-gray-500">0% of workforce</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5</div>
            <p className="text-xs text-gray-500">Hours per day</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Today's Attendance</CardTitle>
            {isHR && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">Mark Attendance</Button>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Employee</th>
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Time In</th>
                  <th className="text-left py-3 px-4">Time Out</th>
                  {isCompanyAdmin && <th className="text-left py-3 px-4">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4">{record.employeeName}</td>
                    <td className="py-3 px-4">{record.department}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          record.status === "Present"
                            ? "bg-green-100 text-green-800"
                            : record.status === "Late"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{record.timeIn}</td>
                    <td className="py-3 px-4">{record.timeOut}</td>
                    {isCompanyAdmin && (
                      <td className="px-4 py-3">
                        <button className="text-blue-600 hover:text-blue-800">
                          Edit
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
