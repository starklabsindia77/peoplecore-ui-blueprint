
import { Card } from "@/components/ui/card";
import { Building, CheckCircle, AlertTriangle, BarChart2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevenueChart } from "./RevenueChart";
import { CompanyStatus } from "./CompanyStatus";

export function PlatformAdminDashboard() {
  const stats = [
    { 
      name: "Total Companies", 
      value: "24", 
      change: "+12%",
      changeLabel: "from last month",
      icon: Building 
    },
    { 
      name: "Active Subscriptions", 
      value: "18", 
      change: "+5%",
      changeLabel: "from last month",
      icon: CheckCircle 
    },
    { 
      name: "Expiring Trials", 
      value: "6", 
      change: "+2",
      changeLabel: "from last week",
      icon: AlertTriangle 
    },
    { 
      name: "Monthly Revenue", 
      value: "$14,500", 
      change: "+8%",
      changeLabel: "from last month",
      icon: BarChart2 
    },
  ];

  const activities = [
    { company: "TechSolutions", action: "subscription upgraded to Pro", time: "2 hours ago" },
    { company: "Acme Designs", action: "trial started", time: "5 hours ago" },
    { company: "Global Systems", action: "subscription expired", time: "1 day ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6">
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

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-white border border-gray-100">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <Card className="bg-white">
            <div className="px-6 py-5 border-b border-gray-200">
              <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
            </div>
            <div className="divide-y divide-gray-200">
              {activities.map((activity, idx) => (
                <div key={idx} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <span className="font-medium text-gray-900">{activity.company}</span>
                    <span className="text-gray-600"> {activity.action}</span>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="revenue">
          <Card className="bg-white p-6">
            <h3 className="text-lg font-medium mb-4">Revenue Overview</h3>
            <div className="h-80">
              <RevenueChart />
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="companies">
          <Card className="bg-white p-6">
            <h3 className="text-lg font-medium mb-4">Companies Status</h3>
            <CompanyStatus />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
