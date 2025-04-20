
import { Card } from "@/components/ui/card";
import { useAuth } from "@/contexts/auth-context";
import { HRDashboard } from "@/components/dashboard/HRDashboard";
import { EmployeeDashboard } from "@/components/dashboard/EmployeeDashboard";
import { 
  Users, 
  Briefcase, 
  BookOpen, 
  Calendar, 
  Building, 
  CheckCircle, 
  AlertTriangle, 
  BarChart2 
} from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { CompanyStatus } from "@/components/dashboard/CompanyStatus";

export default function Index() {
  const { user } = useAuth();
  const isPlatformAdmin = user?.role === "platform_admin";
  const isCompanyAdmin = user?.role === "company_admin";
  const isHR = user?.role === "company_hr";

  if (isHR) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">HR Dashboard</h1>
        </div>
        <HRDashboard />
      </div>
    );
  }

  if (!isPlatformAdmin && !isCompanyAdmin) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900">Employee Dashboard</h1>
        </div>
        <EmployeeDashboard />
      </div>
    );
  }

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

  // Recent activities for company admin
  const companyActivities = [
    { user: "John Doe", action: "completed training", department: "Engineering", time: "2 hours ago" },
    { user: "Rhea Patel", action: "requested leave", department: "Marketing", time: "4 hours ago" },
    { user: "Mike Chen", action: "joined team", department: "Product", time: "5 hours ago" },
    { user: "Sarah Miller", action: "marked attendance", department: "HR", time: "6 hours ago" },
    { user: "Alex Turner", action: "submitted report", department: "Sales", time: "1 day ago" }
  ];

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

  // Recent activities for platform admin
  const platformActivities = [
    { company: "TechSolutions", action: "subscription upgraded to Pro", time: "2 hours ago" },
    { company: "Acme Designs", action: "trial started", time: "5 hours ago" },
    { company: "Global Systems", action: "subscription expired", time: "1 day ago" },
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

      {isCompanyAdmin && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat) => (
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
                {companyActivities.map((activity, idx) => (
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
      )}

      {!isPlatformAdmin && !isCompanyAdmin && (
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

      {!isPlatformAdmin && !isCompanyAdmin && (
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
