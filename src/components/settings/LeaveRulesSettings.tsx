
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
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const leaveRulesSchema = z.object({
  annualLeave: z.string().min(1, "Required"),
  sickLeave: z.string().min(1, "Required"),
  casualLeave: z.string().min(1, "Required"),
  maternityLeave: z.string().min(1, "Required"),
  paternityLeave: z.string().min(1, "Required"),
  carryForwardDays: z.string().min(1, "Required"),
  requireApproval: z.boolean(),
  allowHalfDay: z.boolean(),
  minDaysAdvance: z.string().min(1, "Required"),
  approvalWorkflow: z.enum(["single", "multi", "auto"]),
});

type LeaveRulesValues = z.infer<typeof leaveRulesSchema>;

export function LeaveRulesSettings() {
  const { toast } = useToast();
  
  const form = useForm<LeaveRulesValues>({
    resolver: zodResolver(leaveRulesSchema),
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
      approvalWorkflow: "single",
    },
  });

  const onSubmit = (data: LeaveRulesValues) => {
    console.log("Leave rules updated:", data);
    toast({
      title: "Success",
      description: "Leave rules have been updated successfully.",
    });
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormField
                control={form.control}
                name="annualLeave"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Annual Leave Days</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" {...field} />
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
                      <Input type="number" min="0" {...field} />
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
                      <Input type="number" min="0" {...field} />
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
                      <Input type="number" min="0" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="approvalWorkflow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Approval Workflow</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type="single"
                      value={field.value}
                      onValueChange={field.onChange}
                      className="justify-start"
                    >
                      <ToggleGroupItem value="single">
                        Single Approver
                      </ToggleGroupItem>
                      <ToggleGroupItem value="multi">
                        Multiple Approvers
                      </ToggleGroupItem>
                      <ToggleGroupItem value="auto">
                        Auto Approval
                      </ToggleGroupItem>
                    </ToggleGroup>
                  </FormControl>
                  <FormDescription>
                    Choose how leave requests should be approved
                  </FormDescription>
                </FormItem>
              )}
            />

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
                    <Input type="number" min="0" {...field} />
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
