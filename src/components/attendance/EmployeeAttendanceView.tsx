
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AttendanceStats } from "./AttendanceStats";
import { AttendanceCheckInOut } from "./AttendanceCheckInOut";

export function EmployeeAttendanceView() {
  const [date, setDate] = useState<Date>();
  const [attendance, setAttendance] = useState({
    isCheckedIn: false,
    lastCheckIn: undefined,
    lastCheckOut: undefined,
  });

  const stats = [
    { title: "Avg. Work Hrs", value: "09:01" },
    { title: "Actual Work Hrs", value: "09:01" },
    { title: "Penalty Days", value: "0" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <AttendanceStats stats={stats} />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Attendance Calendar</CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
          </CardContent>
        </Card>

        <AttendanceCheckInOut
          employeeId="current-user"
          isCheckedIn={attendance.isCheckedIn}
          lastCheckIn={attendance.lastCheckIn}
          lastCheckOut={attendance.lastCheckOut}
          onCheckIn={() => setAttendance({ ...attendance, isCheckedIn: true, lastCheckIn: new Date().toLocaleTimeString() })}
          onCheckOut={() => setAttendance({ ...attendance, isCheckedIn: false, lastCheckOut: new Date().toLocaleTimeString() })}
        />
      </div>
    </div>
  );
}
