
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";

export function LeaveRulesSettings() {
  const form = useForm({
    defaultValues: {
      annualLeave: "24",
      sickLeave: "12",
      casualLeave: "6",
      maternityLeave: "90",
      paternityLeave: "14",
      carryForwardDays: "5",
      requireApproval: true,
      allowHalfDay: true,
      minDaysAdvance: "3",
    },
  });

  const onSubmit = (data) => {
    console.log("Leave rules updated:", data);
    // Handle form submission
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave Rules</CardTitle>
        <CardDescription>
          Configure company-wide leave policies and entitlements
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="annualLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Leave Days</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sickLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sick Leave Days</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="casualLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Casual Leave Days</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="maternityLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Maternity Leave Days</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="requireApproval"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Require Approval</FormLabel>
                      <FormDescription>
                        Require manager approval for leave requests
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="allowHalfDay"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Allow Half Day</FormLabel>
                      <FormDescription>
                        Enable half-day leave requests
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="minDaysAdvance"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Minimum Days in Advance</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                  <FormDescription>
                    Minimum number of days required to apply for leave in advance
                  </FormDescription>
                </FormItem>
              )}
            />

            <Button type="submit">Save Leave Rules</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
