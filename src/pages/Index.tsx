
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText } from "lucide-react";

const stats = [
  { 
    name: "Total Employees", 
    value: "58", 
    change: "+8%",
    changeLabel: "from last month",
    icon: Users 
  },
  { 
    name: "On Leave Today", 
    value: "4", 
    change: "+12%",
    changeLabel: "from last week",
    icon: Calendar 
  },
  { 
    name: "Payroll Status", 
    value: "Processed", 
    change: "Apr 15, 2025",
    changeLabel: "last processed",
    icon: FileText 
  },
];

const activities = [
  { user: "John Doe", action: "applied for leave", time: "2 hours ago" },
  { user: "Rhea Patel", action: "payslip generated", time: "4 hours ago" },
  { user: "Mike Chen", action: "marked attendance", time: "5 hours ago" },
];

export default function Index() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Platform Dashboard</h1>
          <p className="text-sm text-gray-500 mt-1">Platform management and employee overview</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 bg-white">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
                <div className="mt-2 flex items-center text-sm">
                  <span className="text-green-500 font-medium">{stat.change}</span>
                  <span className="text-gray-500 ml-1">{stat.changeLabel}</span>
                </div>
              </div>
              <div className="p-2 bg-blue-50 rounded-lg">
                <stat.icon className="h-5 w-5 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-white">
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {activities.map((activity, idx) => (
            <div key={idx} className="px-6 py-4 flex items-center justify-between">
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
