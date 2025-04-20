
import { Users, Briefcase, BookOpen, Calendar } from "lucide-react";
import { StatsCard } from "./company/StatsCard";
import { ActivityFeed } from "./company/ActivityFeed";
import { DepartmentOverview } from "./company/DepartmentOverview";

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
          <StatsCard key={stat.name} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ActivityFeed activities={activities} />
        <DepartmentOverview />
      </div>
    </div>
  );
}
