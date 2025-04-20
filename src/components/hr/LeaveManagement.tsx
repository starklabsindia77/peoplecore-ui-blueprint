
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";

interface LeaveRequest {
  id: string;
  employeeName: string;
  type: string;
  startDate: string;
  endDate: string;
  status: "pending" | "approved" | "rejected";
  reason: string;
}

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
        <Card>
          <CardHeader>
            <CardTitle>Leave Calendar</CardTitle>
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
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Leave Settings</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Configure</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Leave Settings</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Annual Leave Days</Label>
                    <Input type="number" defaultValue={20} />
                  </div>
                  <div className="space-y-2">
                    <Label>Sick Leave Days</Label>
                    <Input type="number" defaultValue={14} />
                  </div>
                  <div className="space-y-2">
                    <Label>Approval Required</Label>
                    <Select defaultValue="yes">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Save Settings</Button>
                </div>
              </DialogContent>
            </Dialog>
          </CardHeader>
        </Card>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-medium">Pending Requests</h3>
        {leaveRequests.map((request) => (
          <Card key={request.id}>
            <CardHeader>
              <CardTitle className="text-base font-medium">
                {request.employeeName}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span>{request.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span>{request.startDate} to {request.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className={`capitalize ${
                      request.status === 'approved' ? 'text-green-600' :
                      request.status === 'rejected' ? 'text-red-600' :
                      'text-yellow-600'
                    }`}>
                      {request.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <span className="text-muted-foreground">Reason:</span>
                    <p className="text-sm">{request.reason}</p>
                  </div>
                </div>
                
                {request.status === 'pending' && (
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      variant="outline"
                      onClick={() => handleLeaveAction(request.id, 'reject')}
                    >
                      Reject
                    </Button>
                    <Button
                      className="flex-1"
                      onClick={() => handleLeaveAction(request.id, 'approve')}
                    >
                      Approve
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
