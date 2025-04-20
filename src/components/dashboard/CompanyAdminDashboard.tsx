
import { Card } from "@/components/ui/card";
import { Users, Briefcase, BookOpen, Calendar } from "lucide-react";
import { RevenueChart } from "./RevenueChart";

export function CompanyAdminDashboard() {
  const stats = [
    { 
      name: "Total Employees", 
      value: "58", 
      change: "+8%",
      changeLabel: "from last month",
      icon: Users 
    },
    { 
      name: "Departments", 
      value: "8", 
      change: "+1",
      changeLabel: "new department",
      icon: Briefcase 
    },
    { 
      name: "Active Training", 
      value: "12", 
      change: "+3",
      changeLabel: "new courses",
      icon: BookOpen 
    },
    { 
      name: "Leave Requests", 
      value: "6", 
      change: "Pending",
      changeLabel: "need review",
      icon: Calendar 
    }
  ];

  const activities = [
    { user: "John Doe", action: "completed training", department: "Engineering", time: "2 hours ago" },
    { user: "Rhea Patel", action: "requested leave", department: "Marketing", time: "4 hours ago" },
    { user: "Mike Chen", action: "joined team", department: "Product", time: "5 hours ago" },
    { user: "Sarah Miller", action: "marked attendance", department: "HR", time: "6 hours ago" },
    { user: "Alex Turner", action: "submitted report", department: "Sales", time: "1 day ago" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activities.map((activity, idx) => (
              <div key={idx} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">{activity.user}</span>
                    <span className="text-gray-600"> {activity.action}</span>
                    <span className="text-gray-500"> in {activity.department}</span>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-white">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900">Department Overview</h3>
          </div>
          <div className="p-6">
            <div className="h-[300px]">
              <RevenueChart />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
