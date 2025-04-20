
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText, Bell } from "lucide-react";
import { AttendanceStats } from "../attendance/AttendanceStats";
import { AttendanceCheckInOut } from "../attendance/AttendanceCheckInOut";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PayrollStats } from "../payroll/PayrollStats";
import { PayrollHistory } from "../payroll/PayrollHistory";
import { SalaryBreakdown } from "../attendance/SalaryBreakdown";
import { useState } from "react";

export function HRDashboard() {
  const [attendance, setAttendance] = useState({
    isCheckedIn: false,
    lastCheckIn: undefined,
    lastCheckOut: undefined,
  });

  const stats = [
    { 
      name: "Total Employees", 
      value: "58", 
      change: "+8%",
      changeLabel: "from last month",
      icon: Users 
    },
    { 
      name: "Leave Requests", 
      value: "6", 
      change: "Pending",
      changeLabel: "need review",
      icon: Calendar 
    }
  ];

  const attendanceStats = [
    { title: "Avg. Work Hrs", value: "09:01" },
    { title: "Actual Work Hrs", value: "09:01" },
    { title: "Penalty Days", value: "0" }
  ];

  const payrollStats = [
    {
      title: "Total Payroll",
      value: "$125,000",
      change: "+2.5%",
      description: "vs. last month"
    },
    {
      title: "Pending Approvals",
      value: "12",
      change: "-4",
      description: "from last week"
    },
    {
      title: "Processing",
      value: "8",
      change: "+2",
      description: "new requests"
    }
  ];

  const payrollHistory = [
    {
      id: "PR001",
      date: "2025-04-15",
      employees: 58,
      total: "$125,000",
      status: "Processed"
    },
    {
      id: "PR002",
      date: "2025-04-01",
      employees: 56,
      total: "$122,000",
      status: "Completed"
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="attendance">Attendance</TabsTrigger>
          <TabsTrigger value="payroll">Payroll</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card key={stat.name} className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
                    <div className="mt-2 flex items-center text-sm">
                      <span className="text-green-500 font-medium">{stat.change}</span>
                      <span className="text-gray-500 ml-1">{stat.changeLabel}</span>
                    </div>
                  </div>
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <stat.icon className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SalaryBreakdown
              month="April"
              year={2025}
              basic={37700}
              hra={15000}
              allowances={43240}
              deductions={1800}
              tds={6180}
            />
            <PayrollStats stats={payrollStats} />
          </div>
        </TabsContent>

        <TabsContent value="attendance" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <AttendanceCheckInOut
                employeeId="current-user"
                isCheckedIn={attendance.isCheckedIn}
                lastCheckIn={attendance.lastCheckIn}
                lastCheckOut={attendance.lastCheckOut}
                onCheckIn={() => setAttendance({ ...attendance, isCheckedIn: true, lastCheckIn: new Date().toLocaleTimeString() })}
                onCheckOut={() => setAttendance({ ...attendance, isCheckedIn: false, lastCheckOut: new Date().toLocaleTimeString() })}
              />
            </Card>
            <Card className="p-6">
              <AttendanceStats stats={attendanceStats} />
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-6">
          <PayrollHistory records={payrollHistory} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
