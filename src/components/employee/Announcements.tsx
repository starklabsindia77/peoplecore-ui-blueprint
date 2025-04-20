
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Bell, CalendarCheck, BookOpen, Building, Mail, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";

interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  category: "general" | "event" | "policy" | "training" | "news";
  isImportant?: boolean;
  postedBy: {
    name: string;
    role: string;
  };
}

// Mock data
const announcements: Announcement[] = [
  {
    id: "1",
    title: "New Health Insurance Benefits",
    content: "We're pleased to announce updates to our health insurance benefits package. Starting next month, all employees will have access to enhanced dental and vision coverage, as well as increased mental health support services. Please review the updated benefits guide in your employee portal.",
    date: "2025-04-18",
    category: "policy",
    isImportant: true,
    postedBy: {
      name: "Sarah Johnson",
      role: "HR Director"
    }
  },
  {
    id: "2",
    title: "Company Summer Picnic",
    content: "Mark your calendars! Our annual summer picnic will be held on Saturday, June 15th at Central Park. Family and friends are welcome. Food, drinks, and entertainment will be provided. Please RSVP by May 30th.",
    date: "2025-04-15",
    category: "event",
    postedBy: {
      name: "Events Committee",
      role: "Company Events"
    }
  },
  {
    id: "3",
    title: "New Learning Management System",
    content: "We're excited to launch our new learning management system next week. This platform offers hundreds of courses to help you develop both technical and soft skills. All employees will receive login credentials via email on Monday.",
    date: "2025-04-10",
    category: "training",
    postedBy: {
      name: "Michael Rivera",
      role: "Learning & Development"
    }
  },
  {
    id: "4",
    title: "Q1 Financial Results",
    content: "We're pleased to announce that we've exceeded our Q1 targets by 15%. Thank you to everyone for your hard work and dedication. A detailed presentation will be shared during the all-hands meeting next week.",
    date: "2025-04-05",
    category: "news",
    postedBy: {
      name: "David Chen",
      role: "CEO"
    }
  },
  {
    id: "5",
    title: "Office Renovation Schedule",
    content: "The 3rd floor renovation will begin next Monday and is expected to last for three weeks. During this time, 3rd floor teams will be temporarily relocated to the 5th floor. Please check your email for specific details about your temporary workspace.",
    date: "2025-04-01",
    category: "general",
    postedBy: {
      name: "Facilities Team",
      role: "Office Management"
    }
  },
];

export function Announcements() {
  const renderCategoryIcon = (category: Announcement["category"]) => {
    const iconMap = {
      general: Bell,
      event: CalendarCheck,
      policy: Building,
      training: BookOpen,
      news: Users,
    };
    
    const Icon = iconMap[category];
    return <Icon className="h-5 w-5" />;
  };
  
  const renderCategoryBadge = (category: Announcement["category"]) => {
    const styleMap = {
      general: "bg-gray-100 text-gray-800",
      event: "bg-purple-100 text-purple-800",
      policy: "bg-blue-100 text-blue-800",
      training: "bg-green-100 text-green-800",
      news: "bg-amber-100 text-amber-800",
    };
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styleMap[category]}`}>
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </span>
    );
  };
  
  // Group announcements by month
  const groupedAnnouncements = announcements.reduce((acc, announcement) => {
    const date = new Date(announcement.date);
    const monthYear = format(date, "MMMM yyyy");
    
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    
    acc[monthYear].push(announcement);
    return acc;
  }, {} as Record<string, Announcement[]>);

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Announcements</TabsTrigger>
          <TabsTrigger value="important">Important</TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-4 space-y-6">
          {Object.entries(groupedAnnouncements).map(([monthYear, monthAnnouncements]) => (
            <div key={monthYear} className="space-y-4">
              <h3 className="text-lg font-medium">{monthYear}</h3>
              
              {monthAnnouncements.map((announcement) => (
                <Card key={announcement.id} className={announcement.isImportant ? "border-amber-300" : ""}>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {renderCategoryBadge(announcement.category)}
                          {announcement.isImportant && (
                            <Badge variant="destructive">Important</Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-full">
                        {renderCategoryIcon(announcement.category)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p>{announcement.content}</p>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <div className="bg-primary text-white h-full w-full rounded-full flex items-center justify-center">
                            {announcement.postedBy.name.charAt(0)}
                          </div>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{announcement.postedBy.name}</p>
                          <p className="text-xs text-gray-500">{announcement.postedBy.role}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {format(new Date(announcement.date), "MMMM d, yyyy")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
        </TabsContent>
        
        <TabsContent value="important" className="mt-4 space-y-4">
          {announcements.filter(a => a.isImportant).length > 0 ? (
            announcements
              .filter(a => a.isImportant)
              .map((announcement) => (
                <Card key={announcement.id} className="border-amber-300">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          {renderCategoryBadge(announcement.category)}
                          <Badge variant="destructive">Important</Badge>
                        </div>
                        <CardTitle className="text-lg">{announcement.title}</CardTitle>
                      </div>
                      <div className="bg-gray-100 p-2 rounded-full">
                        {renderCategoryIcon(announcement.category)}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p>{announcement.content}</p>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <div className="bg-primary text-white h-full w-full rounded-full flex items-center justify-center">
                            {announcement.postedBy.name.charAt(0)}
                          </div>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">{announcement.postedBy.name}</p>
                          <p className="text-xs text-gray-500">{announcement.postedBy.role}</p>
                        </div>
                      </div>
                      <div className="text-sm text-gray-500">
                        {format(new Date(announcement.date), "MMMM d, yyyy")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
          ) : (
            <Card>
              <CardContent className="py-10 text-center">
                <Bell className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <p className="text-gray-500">No important announcements at this time</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
