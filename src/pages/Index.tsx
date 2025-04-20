
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText, Building, CheckCircle, AlertTriangle, BarChart2 } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CompanyStatus } from "@/components/dashboard/CompanyStatus";

export default function Index() {
  const { user } = useAuth();
  
  // Determine if user is platform admin
  const isPlatformAdmin = user?.role === "platform_admin";

  // Platform admin stats
  const platformStats = [
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

  // Company admin stats
  const companyStats = [
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

  // Recent activities for platform admin
  const platformActivities = [
    { company: "TechSolutions", action: "subscription upgraded to Pro", time: "2 hours ago" },
    { company: "Acme Designs", action: "trial started", time: "5 hours ago" },
    { company: "Global Systems", action: "subscription expired", time: "1 day ago" },
  ];

  // Recent activities for company admin
  const companyActivities = [
    { user: "John Doe", action: "applied for leave", time: "2 hours ago" },
    { user: "Rhea Patel", action: "payslip generated", time: "4 hours ago" },
    { user: "Mike Chen", action: "marked attendance", time: "5 hours ago" },
  ];

  const stats = isPlatformAdmin ? platformStats : companyStats;
  const activities = isPlatformAdmin ? platformActivities : companyActivities;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {isPlatformAdmin ? "Platform Dashboard" : "Company Dashboard"}
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            {isPlatformAdmin 
              ? "Platform management and company overview" 
              : "Company management and employee overview"}
          </p>
        </div>
      </div>

      {isPlatformAdmin && (
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-white border border-gray-100">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-6">
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

            <Card className="bg-white">
              <div className="px-6 py-5 border-b border-gray-200">
                <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {activities.map((activity, idx) => (
                  <div key={idx} className="px-6 py-4 flex items-center justify-between">
                    <div>
                      <span className="font-medium text-gray-900">
                        {isPlatformAdmin ? activity.company : activity.user}
                      </span>
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
      )}

      {!isPlatformAdmin && (
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
      )}

      {!isPlatformAdmin && (
        <Card className="bg-white">
          <div className="px-6 py-5 border-b border-gray-200">
            <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activities.map((activity, idx) => (
              <div key={idx} className="px-6 py-4 flex items-center justify-between">
                <div>
                  <span className="font-medium text-gray-900">
                    {isPlatformAdmin ? activity.company : activity.user}
                  </span>
                  <span className="text-gray-600"> {activity.action}</span>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}
