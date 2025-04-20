
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/auth-context";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export function NotificationSettings() {
  const { user } = useAuth();
  const isHR = user?.role === "company_hr" || user?.role === "company_admin";
  
  const [notificationState, setNotificationState] = useState({
    leaveRequests: true,
    attendanceReports: true,
    payrollProcessing: true,
    employeeJoining: isHR,
    employeeExit: isHR,
    probationCompletion: isHR
  });

  const toggleNotification = (key: string) => {
    setNotificationState(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notification Preferences</CardTitle>
        <CardDescription>Manage email and system notifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Leave Requests</p>
              <p className="text-sm text-gray-500">Notify when employees request leave</p>
            </div>
            <Switch 
              checked={notificationState.leaveRequests} 
              onCheckedChange={() => toggleNotification('leaveRequests')} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Attendance Reports</p>
              <p className="text-sm text-gray-500">Send daily attendance summaries</p>
            </div>
            <Switch 
              checked={notificationState.attendanceReports} 
              onCheckedChange={() => toggleNotification('attendanceReports')} 
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Payroll Processing</p>
              <p className="text-sm text-gray-500">Notifications for payroll events</p>
            </div>
            <Switch 
              checked={notificationState.payrollProcessing} 
              onCheckedChange={() => toggleNotification('payrollProcessing')} 
            />
          </div>

          {isHR && (
            <>
              <div className="border-t pt-4 my-2">
                <h3 className="font-medium text-sm text-gray-500 mb-3">HR Specific Notifications</h3>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Employee Joining</p>
                  <p className="text-sm text-gray-500">Notify when new employees join</p>
                </div>
                <Switch 
                  checked={notificationState.employeeJoining} 
                  onCheckedChange={() => toggleNotification('employeeJoining')} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Employee Exit</p>
                  <p className="text-sm text-gray-500">Notify when employees leave the company</p>
                </div>
                <Switch 
                  checked={notificationState.employeeExit} 
                  onCheckedChange={() => toggleNotification('employeeExit')} 
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Probation Completion</p>
                  <p className="text-sm text-gray-500">Notify when employees complete probation period</p>
                </div>
                <Switch 
                  checked={notificationState.probationCompletion} 
                  onCheckedChange={() => toggleNotification('probationCompletion')} 
                />
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
