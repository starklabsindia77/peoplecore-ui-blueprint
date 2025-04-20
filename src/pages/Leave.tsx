import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAuth } from "@/contexts/auth-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const leaveRequests = [
  {
    id: 1,
    employeeName: "John Doe",
    department: "Engineering",
    type: "Sick Leave",
    from: "2025-04-10",
    to: "2025-04-11",
    status: "Pending",
    reason: "Medical appointment",
  },
  {
    id: 2,
    employeeName: "Jane Smith",
    department: "Marketing",
    type: "Casual Leave",
    from: "2025-03-15",
    to: "2025-03-15",
    status: "Approved",
    reason: "Personal work",
  },
];

export default function Leave() {
  const { user } = useAuth();
  const isCompanyAdmin = user?.role === "company_admin";

  const leaveForm = useForm({
    defaultValues: {
      leaveType: "Sick Leave",
      fromDate: "",
      toDate: "",
      reason: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Leave request submitted:", data);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Leave Management</h1>
          <p className="text-sm text-gray-500">
            Manage leave requests and balances
          </p>
        </div>
        {isCompanyAdmin && (
          <Button variant="outline" asChild>
            <a href="/leave-configuration">Configure Leave Rules</a>
          </Button>
        )}
      </div>

      {isCompanyAdmin ? (
        <Tabs defaultValue="pending" className="w-full">
          <TabsList>
            <TabsTrigger value="pending">Pending Requests</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pending" className="space-y-4">
            <div className="flex gap-4 items-center mb-4">
              <div className="w-[200px]">
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue placeholder="Filter by Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Input 
                placeholder="Search by employee name..." 
                className="flex-1"
              />
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Pending Leave Requests</CardTitle>
                <CardDescription>
                  Review and manage employee leave requests
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full overflow-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="px-4 py-3 text-left">Employee</th>
                        <th className="px-4 py-3 text-left">Department</th>
                        <th className="px-4 py-3 text-left">Type</th>
                        <th className="px-4 py-3 text-left">From</th>
                        <th className="px-4 py-3 text-left">To</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaveRequests.map((request) => (
                        <tr key={request.id} className="border-b">
                          <td className="px-4 py-3">{request.employeeName}</td>
                          <td className="px-4 py-3">{request.department}</td>
                          <td className="px-4 py-3">{request.type}</td>
                          <td className="px-4 py-3">{request.from}</td>
                          <td className="px-4 py-3">{request.to}</td>
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                request.status === "Approved"
                                  ? "bg-green-100 text-green-800"
                                  : request.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {request.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2">
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="bg-green-50 text-green-600 hover:bg-green-100"
                              >
                                Approve
                              </Button>
                              <Button 
                                variant="outline"
                                size="sm"
                                className="bg-red-50 text-red-600 hover:bg-red-100"
                              >
                                Reject
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="approved">
            <Card>
              <CardContent>
                <div className="p-4 text-center text-gray-500">
                  No approved requests to display
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rejected">
            <Card>
              <CardContent>
                <div className="p-4 text-center text-gray-500">
                  No rejected requests to display
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-semibold">Leave Management</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Apply for Leave</CardTitle>
              <CardDescription>Submit a new leave request</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...leaveForm}>
                <form onSubmit={leaveForm.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={leaveForm.control}
                    name="leaveType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Leave Type</FormLabel>
                        <FormControl>
                          <select className="w-full p-2 border rounded" {...field}>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                            <option>Paid Leave</option>
                          </select>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <div className="grid gap-4 md:grid-cols-2">
                    <FormField
                      control={leaveForm.control}
                      name="fromDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>From Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={leaveForm.control}
                      name="toDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>To Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={leaveForm.control}
                    name="reason"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Reason</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Enter your reason for leave" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Submit Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Leave Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                  <div>
                    <p className="text-sm font-medium">Sick Leave</p>
                    <p className="text-2xl font-bold">7</p>
                    <p className="text-sm text-gray-500">days remaining</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                  <div>
                    <p className="text-sm font-medium">Casual Leave</p>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-gray-500">days remaining</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-50 rounded">
                  <div>
                    <p className="text-sm font-medium">Paid Leave</p>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-gray-500">days remaining</p>
                  </div>
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Leave History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full overflow-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-3 text-left">Type</th>
                    <th className="px-4 py-3 text-left">From</th>
                    <th className="px-4 py-3 text-left">To</th>
                    <th className="px-4 py-3 text-left">Status</th>
                    <th className="px-4 py-3 text-left">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {leaveHistory.map((leave) => (
                    <tr key={leave.id} className="border-b">
                      <td className="px-4 py-3">{leave.type}</td>
                      <td className="px-4 py-3">{leave.from}</td>
                      <td className="px-4 py-3">{leave.to}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">
                          {leave.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{leave.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
