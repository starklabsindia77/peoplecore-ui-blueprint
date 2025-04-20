
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, Calendar, FileText, Bell, UserPlus, ClipboardList, BookOpen, CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HRAttendanceManagement } from "../attendance/HRAttendanceManagement";
import { EmployeeManagement } from "../hr/EmployeeManagement";
import { LeaveManagement } from "../hr/LeaveManagement";
import { TrainingManagement } from "../hr/TrainingManagement";
import { StatsCard } from "./company/StatsCard";

export function HRDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { 
      name: "Total Employees", 
      value: "58", 
      change: "+2",
      changeLabel: "from last month",
      icon: Users 
    },
    { 
      name: "Leave Requests", 
      value: "12", 
      change: "Pending",
      changeLabel: "need review",
      icon: Calendar 
    },
    { 
      name: "New Applications", 
      value: "8", 
      change: "Active",
      changeLabel: "job postings",
      icon: UserPlus 
    },
    { 
      name: "Training Programs", 
      value: "5", 
      change: "Ongoing",
      changeLabel: "courses",
      icon: BookOpen 
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-transparent h-auto p-0">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
          >
            <ClipboardList className="h-4 w-4 mr-2" />
            Overview
          </TabsTrigger>
          <TabsTrigger 
            value="employees"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
          >
            <Users className="h-4 w-4 mr-2" />
            Employees
          </TabsTrigger>
          <TabsTrigger 
            value="attendance"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
          >
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Attendance
          </TabsTrigger>
          <TabsTrigger 
            value="leave"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
          >
            <Calendar className="h-4 w-4 mr-2" />
            Leave
          </TabsTrigger>
          <TabsTrigger 
            value="training"
            className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Training
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <StatsCard key={stat.name} stat={stat} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="employees">
            <EmployeeManagement />
          </TabsContent>

          <TabsContent value="attendance">
            <HRAttendanceManagement />
          </TabsContent>

          <TabsContent value="leave">
            <LeaveManagement />
          </TabsContent>

          <TabsContent value="training">
            <TrainingManagement />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
