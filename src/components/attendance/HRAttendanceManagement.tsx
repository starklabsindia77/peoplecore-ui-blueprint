
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";

interface AttendanceRecord {
  employeeId: string;
  employeeName: string;
  department: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  status: "Present" | "Late" | "Absent";
}

export function HRAttendanceManagement() {
  const { user } = useAuth();
  const [records, setRecords] = useState<AttendanceRecord[]>([
    {
      employeeId: "1",
      employeeName: "John Doe",
      department: "Engineering",
      date: new Date().toLocaleDateString(),
      checkIn: "09:00",
      status: "Present"
    },
    {
      employeeId: "2",
      employeeName: "Jane Smith",
      department: "Marketing",
      date: new Date().toLocaleDateString(),
      checkIn: "09:30",
      status: "Late"
    }
  ]);

  const handleMarkAttendance = (employeeId: string, action: "checkIn" | "checkOut") => {
    const now = new Date().toLocaleTimeString();
    setRecords(records.map(record => {
      if (record.employeeId === employeeId) {
        return {
          ...record,
          [action]: now,
          status: "Present"
        };
      }
      return record;
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Attendance Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Employee</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Check In</TableHead>
              <TableHead>Check Out</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.employeeId}>
                <TableCell>{record.employeeName}</TableCell>
                <TableCell>{record.department}</TableCell>
                <TableCell>{record.date}</TableCell>
                <TableCell>{record.checkIn || "-"}</TableCell>
                <TableCell>{record.checkOut || "-"}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    record.status === "Present" 
                      ? "bg-green-100 text-green-800"
                      : record.status === "Late"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {record.status}
                  </span>
                </TableCell>
                <TableCell>
                  {!record.checkIn ? (
                    <Button 
                      size="sm" 
                      onClick={() => handleMarkAttendance(record.employeeId, "checkIn")}
                    >
                      Mark Check In
                    </Button>
                  ) : !record.checkOut ? (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleMarkAttendance(record.employeeId, "checkOut")}
                    >
                      Mark Check Out
                    </Button>
                  ) : (
                    "Completed"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
