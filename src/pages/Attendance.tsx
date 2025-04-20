
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
import { Button } from "@/components/ui/button";
import { AttendanceCheckInOut } from "@/components/attendance/AttendanceCheckInOut";
import { HRAttendanceManagement } from "@/components/attendance/HRAttendanceManagement";
import { SalaryBreakdown } from "@/components/attendance/SalaryBreakdown";
import { useState } from "react";

export default function Attendance() {
  const { user } = useAuth();
  const [currentUserAttendance, setCurrentUserAttendance] = useState({
    isCheckedIn: false,
    lastCheckIn: undefined,
    lastCheckOut: undefined,
  });

  const isHR = user?.role === "company_hr";
  const isEmployee = user?.role === "company_employee";

  const handleCheckIn = () => {
    const now = new Date().toLocaleTimeString();
    setCurrentUserAttendance({
      isCheckedIn: true,
      lastCheckIn: now,
      lastCheckOut: undefined,
    });
  };

  const handleCheckOut = () => {
    const now = new Date().toLocaleTimeString();
    setCurrentUserAttendance({
      isCheckedIn: false,
      lastCheckIn: currentUserAttendance.lastCheckIn,
      lastCheckOut: now,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Attendance Management</h1>
          <p className="text-sm text-gray-500">
            Company: {user?.company.name}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-500">April 2025</span>
          </div>
          <Badge 
            variant={user?.company.subscriptionStatus === 'active' ? 'default' : 'secondary'}
            className="ml-2"
          >
            {user?.company.subscriptionPlan.toUpperCase()}
          </Badge>
        </div>
      </div>

      {isEmployee && (
        <div className="space-y-6">
          <AttendanceCheckInOut
            employeeId={user.id}
            isCheckedIn={currentUserAttendance.isCheckedIn}
            lastCheckIn={currentUserAttendance.lastCheckIn}
            lastCheckOut={currentUserAttendance.lastCheckOut}
            onCheckIn={handleCheckIn}
            onCheckOut={handleCheckOut}
          />
          
          <SalaryBreakdown
            month="April"
            year={2025}
            basic={50000}
            hra={20000}
            allowances={10000}
            deductions={5000}
            tds={2500}
          />
        </div>
      )}

      {isHR && (
        <div className="space-y-6">
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

          <HRAttendanceManagement />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stats cards */}
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
          </div>
        </div>
      )}
    </div>
  );
}
