
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText } from "lucide-react";

const stats = [
  { name: "Total Employees", value: "58", icon: Users },
  { name: "On Leave Today", value: "4", icon: Calendar },
  { name: "Payroll Status", value: "Processed for April", icon: FileText },
];

const activities = [
  { user: "John Doe", action: "applied for leave", time: "2 hours ago" },
  { user: "Rhea Patel", action: "payslip generated", time: "4 hours ago" },
  { user: "Mike Chen", action: "marked attendance", time: "5 hours ago" },
];

export default function Index() {
  return (
    <div className="space-y-6">
      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent activity */}
      <Card className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">{activity.user}</span>
                <span className="text-gray-600"> {activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
