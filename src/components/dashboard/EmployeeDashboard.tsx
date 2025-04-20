
import { Card } from "@/components/ui/card";
import { Calendar, Bell } from "lucide-react";
import { AttendanceStats } from "../attendance/AttendanceStats";
import { AttendanceCheckInOut } from "../attendance/AttendanceCheckInOut";
import { useState } from "react";

export function EmployeeDashboard() {
  const [attendance, setAttendance] = useState({
    isCheckedIn: false,
    lastCheckIn: undefined,
    lastCheckOut: undefined,
  });

  const stats = [
    { 
      name: "Leave Balance", 
      value: "12", 
      change: "Days",
      changeLabel: "remaining",
      icon: Calendar 
    },
    { 
      name: "Notifications", 
      value: "3", 
      change: "New",
      changeLabel: "since last visit",
      icon: Bell 
    }
  ];

  const attendanceStats = [
    { title: "Avg. Work Hrs", value: "09:01" },
    { title: "Actual Work Hrs", value: "09:01" },
    { title: "Penalty Days", value: "0" }
  ];

  return (
    <div className="space-y-6">
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
    </div>
  );
}
