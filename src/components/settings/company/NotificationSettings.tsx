
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function NotificationSettings() {
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
            <Button variant="outline">Configure</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Attendance Reports</p>
              <p className="text-sm text-gray-500">Send daily attendance summaries</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Payroll Processing</p>
              <p className="text-sm text-gray-500">Notifications for payroll events</p>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
