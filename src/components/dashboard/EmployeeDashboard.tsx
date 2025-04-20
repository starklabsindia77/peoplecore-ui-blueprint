
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Bell, User, FileText, BookOpen, Users, BriefCase, Folder, CreditCard, CheckCircle2, BarChart2 } from "lucide-react";
import { AttendanceStats } from "../attendance/AttendanceStats";
import { AttendanceCheckInOut } from "../attendance/AttendanceCheckInOut";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyDirectory } from "../employee/CompanyDirectory";
import { DocumentManagement } from "../employee/DocumentManagement";
import { PersonalProfile } from "../employee/PersonalProfile";
import { Performance } from "../employee/Performance";
import { ExpenseClaims } from "../employee/ExpenseClaims";
import { Announcements } from "../employee/Announcements";
import { StatsCard } from "./company/StatsCard";

export function EmployeeDashboard() {
  const [attendance, setAttendance] = useState({
    isCheckedIn: false,
    lastCheckIn: undefined,
    lastCheckOut: undefined,
  });

  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { 
      name: "Leave Balance", 
      value: "12", 
      change: "Days",
      changeLabel: "remaining",
      icon: Calendar 
    },
    { 
      name: "Notifications", 
      value: "3", 
      change: "New",
      changeLabel: "since last visit",
      icon: Bell 
    }
  ];

  const attendanceStats = [
    { title: "Avg. Work Hrs", value: "09:01" },
    { title: "Actual Work Hrs", value: "09:01" },
    { title: "Penalty Days", value: "0" }
  ];

  // Enhanced stats for the overview
  const overviewStats = [
    ...stats,
    { 
      name: "Pending Tasks", 
      value: "5", 
      change: "Tasks",
      changeLabel: "due this week",
      icon: CheckCircle2
    },
    { 
      name: "Learning Progress", 
      value: "70%", 
      change: "Complete",
      changeLabel: "current course",
      icon: BookOpen 
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {overviewStats.map((stat) => (
                <StatsCard key={stat.name} stat={stat} />
              ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6">
                <AttendanceCheckInOut
                  employeeId="current-user"
                  isCheckedIn={attendance.isCheckedIn}
                  lastCheckIn={attendance.lastCheckIn}
                  lastCheckOut={attendance.lastCheckOut}
                  onCheckIn={() => setAttendance({ ...attendance, isCheckedIn: true, lastCheckIn: new Date().toLocaleTimeString() })}
                  onCheckOut={() => setAttendance({ ...attendance, isCheckedIn: false, lastCheckOut: new Date().toLocaleTimeString() })}
                />
              </Card>
              <Card className="p-6">
                <AttendanceStats stats={attendanceStats} />
              </Card>
            </div>
            
            <div className="mt-6">
              <h2 className="text-lg font-medium mb-4">Recent Announcements</h2>
              <Announcements />
            </div>
          </div>
        );
      case "profile":
        return <PersonalProfile />;
      case "documents":
        return <DocumentManagement />;
      case "directory":
        return <CompanyDirectory />;
      case "performance":
        return <Performance />;
      case "expenses":
        return <ExpenseClaims />;
      case "announcements":
        return <Announcements />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="border-b">
          <TabsList className="bg-transparent h-auto p-0">
            <TabsTrigger 
              value="overview"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="profile"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <User className="h-4 w-4 mr-2" />
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="documents"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <FileText className="h-4 w-4 mr-2" />
              Documents
            </TabsTrigger>
            <TabsTrigger 
              value="directory"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <Users className="h-4 w-4 mr-2" />
              Directory
            </TabsTrigger>
            <TabsTrigger 
              value="performance"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <BarChart2 className="h-4 w-4 mr-2" />
              Performance
            </TabsTrigger>
            <TabsTrigger 
              value="expenses"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <CreditCard className="h-4 w-4 mr-2" />
              Expenses
            </TabsTrigger>
            <TabsTrigger 
              value="announcements"
              className="data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none data-[state=active]:shadow-none px-4 py-2"
            >
              <Bell className="h-4 w-4 mr-2" />
              Announcements
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="mt-4">
          {renderTabContent()}
        </div>
      </Tabs>
    </div>
  );
}
