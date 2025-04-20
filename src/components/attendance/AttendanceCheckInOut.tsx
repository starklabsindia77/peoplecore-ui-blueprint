
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

interface AttendanceCheckProps {
  employeeId: string;
  isCheckedIn: boolean;
  lastCheckIn?: string;
  lastCheckOut?: string;
  onCheckIn: () => void;
  onCheckOut: () => void;
}

export function AttendanceCheckInOut({
  employeeId,
  isCheckedIn,
  lastCheckIn,
  lastCheckOut,
  onCheckIn,
  onCheckOut,
}: AttendanceCheckProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckIn = async () => {
    setLoading(true);
    try {
      onCheckIn();
      toast.success("Successfully checked in");
    } catch (error) {
      toast.error("Failed to check in");
    }
    setLoading(false);
  };

  const handleCheckOut = async () => {
    setLoading(true);
    try {
      onCheckOut();
      toast.success("Successfully checked out");
    } catch (error) {
      toast.error("Failed to check out");
    }
    setLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Attendance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500">Today's Status: 
                <span className={`ml-2 ${isCheckedIn ? 'text-green-600' : 'text-gray-600'}`}>
                  {isCheckedIn ? 'Checked In' : 'Not Checked In'}
                </span>
              </p>
              {lastCheckIn && (
                <p className="text-sm text-gray-500">
                  Last Check-in: {lastCheckIn}
                </p>
              )}
              {lastCheckOut && (
                <p className="text-sm text-gray-500">
                  Last Check-out: {lastCheckOut}
                </p>
              )}
            </div>
            <Button
              onClick={isCheckedIn ? handleCheckOut : handleCheckIn}
              disabled={loading}
              variant={isCheckedIn ? "destructive" : "default"}
            >
              {loading
                ? "Processing..."
                : isCheckedIn
                ? "Check Out"
                : "Check In"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
