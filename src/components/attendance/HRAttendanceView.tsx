
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AttendanceStats } from "./AttendanceStats";

export function HRAttendanceView() {
  const [date, setDate] = useState<Date>();
  const [selectedShift, setSelectedShift] = useState("shift1");

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

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Shift Details</CardTitle>
            <Select value={selectedShift} onValueChange={setSelectedShift}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="shift1">Shift3-13(S313)</SelectItem>
                <SelectItem value="shift2">Shift3-14(S314)</SelectItem>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="session" className="w-full">
              <TabsList>
                <TabsTrigger value="session">Session Details</TabsTrigger>
                <TabsTrigger value="status">Status Details</TabsTrigger>
              </TabsList>
              <TabsContent value="session">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="font-medium">Session</div>
                    <div className="font-medium">Timing</div>
                    <div className="font-medium">Status</div>
                    <div>Session 1</div>
                    <div>13:00 - 17:30</div>
                    <div className="text-green-500">Present</div>
                    <div>Session 2</div>
                    <div>17:31 - 22:00</div>
                    <div className="text-green-500">Present</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="status">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="font-medium">Status</div>
                    <div className="font-medium">Remarks</div>
                    <div>Present</div>
                    <div>Regular working day</div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
