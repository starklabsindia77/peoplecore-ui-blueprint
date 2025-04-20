
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { LeaveBasicSettings } from "./leave/LeaveBasicSettings";
import { LeaveApprovalSettings } from "./leave/LeaveApprovalSettings";
import { LeaveAllocationSettings } from "./leave/LeaveAllocationSettings";
import { leaveRulesSchema, type LeaveRulesValues } from "./leave/types";

export function LeaveRulesSettings() {
  const { toast } = useToast();
  
  const form = useForm<LeaveRulesValues>({
    resolver: zodResolver(leaveRulesSchema),
    defaultValues: {
      annualLeave: {
        days: "24",
        allocationFrequency: "yearly",
      },
      sickLeave: {
        days: "12",
        allocationFrequency: "yearly",
      },
      casualLeave: {
        days: "6",
        allocationFrequency: "yearly",
      },
      maternityLeave: {
        days: "90",
        allocationFrequency: "yearly",
      },
      paternityLeave: {
        days: "14",
        allocationFrequency: "yearly",
      },
      carryForwardDays: "5",
      requireApproval: true,
      allowHalfDay: true,
      minDaysAdvance: "3",
      approvalWorkflow: "single",
      autoAllocateLeaves: true,
      advanceLeaveAllowed: false,
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
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Basic Leave Settings</h3>
                <LeaveBasicSettings form={form} />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">Approval Settings</h3>
                <LeaveApprovalSettings form={form} />
              </div>

              <div className="border rounded-lg p-4 space-y-4">
                <h3 className="text-lg font-medium">Leave Allocation Settings</h3>
                <LeaveAllocationSettings form={form} />
              </div>
            </div>

            <Button type="submit">Save Leave Rules</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
