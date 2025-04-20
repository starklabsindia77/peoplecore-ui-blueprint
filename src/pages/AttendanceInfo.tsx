
import { useAuth } from "@/contexts/auth-context";
import { HRAttendanceView } from "@/components/attendance/HRAttendanceView";
import { EmployeeAttendanceView } from "@/components/attendance/EmployeeAttendanceView";

export default function AttendanceInfo() {
  const { user } = useAuth();
  const isHR = user?.role === "company_hr";

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Attendance Information</h1>
      </div>

      {isHR ? <HRAttendanceView /> : <EmployeeAttendanceView />}
    </div>
  );
}
