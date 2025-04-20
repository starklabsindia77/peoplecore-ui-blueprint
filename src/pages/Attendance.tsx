import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

// Mock attendance data per company
const attendanceDataByCompany = {
  company1: [
    { date: "2025-04-19", status: "Present", timeIn: "09:00", timeOut: "17:30" },
    { date: "2025-04-18", status: "Present", timeIn: "08:55", timeOut: "17:45" },
    { date: "2025-04-17", status: "Late", timeIn: "10:15", timeOut: "18:00" },
    { date: "2025-04-16", status: "Present", timeIn: "09:05", timeOut: "17:30" },
    { date: "2025-04-15", status: "Absent", timeIn: "-", timeOut: "-" },
  ],
  company2: [
    { date: "2025-04-19", status: "Present", timeIn: "09:15", timeOut: "17:00" },
    { date: "2025-04-18", status: "Late", timeIn: "10:00", timeOut: "18:00" },
  ],
};

export default function Attendance() {
  const { user } = useAuth();
  
  if (!user) return null;

  const attendanceData = attendanceDataByCompany[user.companyId] || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Attendance</h1>
          <p className="text-sm text-gray-500">
            Company: {user.company.name}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-500">April 2025</span>
          </div>
          <Badge 
            variant={user.company.subscriptionStatus === 'active' ? 'default' : 'secondary'}
            className="ml-2"
          >
            {user.company.subscriptionPlan.toUpperCase()}
          </Badge>
        </div>
      </div>

      {user.company.subscriptionStatus === 'trial' && (
        <Alert>
          <AlertTitle>Trial Period</AlertTitle>
          <AlertDescription>
            Your company's trial period ends on {user.company.trialEndsAt}. Upgrade to continue accessing all features.
          </AlertDescription>
        </Alert>
      )}

      {user.company.subscriptionStatus === 'expired' && (
        <Alert variant="destructive">
          <AlertTitle>Subscription Expired</AlertTitle>
          <AlertDescription>
            Your company's subscription has expired. Please renew to continue accessing attendance features.
          </AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Late Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent Days</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.5</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Attendance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Time In</th>
                  <th className="px-4 py-3 text-left">Time Out</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-3">{record.date}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          record.status === "Present"
                            ? "bg-green-100 text-green-800"
                            : record.status === "Late"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{record.timeIn}</td>
                    <td className="px-4 py-3">{record.timeOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
