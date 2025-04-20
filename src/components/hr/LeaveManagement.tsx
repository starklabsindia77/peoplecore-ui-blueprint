
import { useState } from "react";
import { toast } from "sonner";
import { LeaveCalendar } from "./leave/LeaveCalendar";
import { LeaveSettings } from "./leave/LeaveSettings";
import { LeaveRequestCard } from "./leave/LeaveRequestCard";
import { LeaveRequest } from "./types";

const mockLeaveRequests: LeaveRequest[] = [
  {
    id: "LEA001",
    employeeName: "John Doe",
    type: "Annual Leave",
    startDate: "2025-04-25",
    endDate: "2025-04-30",
    status: "pending",
    reason: "Family vacation",
  },
  {
    id: "LEA002",
    employeeName: "Jane Smith",
    type: "Sick Leave",
    startDate: "2025-04-21",
    endDate: "2025-04-22",
    status: "approved",
    reason: "Medical appointment",
  },
];

export function LeaveManagement() {
  const [leaveRequests] = useState<LeaveRequest[]>(mockLeaveRequests);
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleLeaveAction = (requestId: string, action: "approve" | "reject") => {
    toast.success(`Leave request ${action}d successfully`);
    // In a real app, you would update the leave request status in the database here
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-6">
        <LeaveCalendar date={date} setDate={setDate} />
        <LeaveSettings />
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Pending Requests</h3>
        {leaveRequests.map((request) => (
          <LeaveRequestCard
            key={request.id}
            request={request}
            onAction={handleLeaveAction}
          />
        ))}
      </div>
    </div>
  );
}
