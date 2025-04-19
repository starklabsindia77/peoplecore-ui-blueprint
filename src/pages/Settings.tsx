
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>

      <Tabs defaultValue="company" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>
                Manage your company details and preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="space-y-4">
                  <FormField
                    name="companyName"
                    render={() => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input defaultValue="Acme Corp" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="address"
                    render={() => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input defaultValue="123 Business Street" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="contactEmail"
                    render={() => (
                      <FormItem>
                        <FormLabel>Contact Email</FormLabel>
                        <FormControl>
                          <Input type="email" defaultValue="hr@acmecorp.com" />
                        </FormControl>
                        <FormDescription>
                          This email will receive all HR notifications
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                  <Button>Save Changes</Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="employees">
          <Card>
            <CardHeader>
              <CardTitle>Employee Settings</CardTitle>
              <CardDescription>
                Configure employee-related settings and policies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form>
                <div className="space-y-4">
                  <FormField
                    name="probationPeriod"
                    render={() => (
                      <FormItem>
                        <FormLabel>Probation Period (months)</FormLabel>
                        <FormControl>
                          <Input type="number" defaultValue="3" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    name="annualLeave"
                    render={() => (
                      <FormItem>
                        <FormLabel>Annual Leave Days</FormLabel>
                        <FormControl>
                          <Input type="number" defaultValue="24" />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button>Save Changes</Button>
                </div>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage email and system notifications
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Leave Requests</p>
                    <p className="text-sm text-gray-500">
                      Notify when employees request leave
                    </p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Attendance Reports</p>
                    <p className="text-sm text-gray-500">
                      Send daily attendance summaries
                    </p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payroll Processing</p>
                    <p className="text-sm text-gray-500">
                      Notifications for payroll events
                    </p>
                  </div>
                  <Button variant="outline">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
