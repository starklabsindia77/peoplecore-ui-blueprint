
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UseFormReturn } from "react-hook-form";
import { LeaveRulesValues } from "./types";

interface LeaveApprovalSettingsProps {
  form: UseFormReturn<LeaveRulesValues>;
}

export function LeaveApprovalSettings({ form }: LeaveApprovalSettingsProps) {
  return (
    <div className="space-y-4">
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
                <ToggleGroupItem value="single">Single Approver</ToggleGroupItem>
                <ToggleGroupItem value="multi">Multiple Approvers</ToggleGroupItem>
                <ToggleGroupItem value="auto">Auto Approval</ToggleGroupItem>
              </ToggleGroup>
            </FormControl>
            <FormDescription>
              Choose how leave requests should be approved
            </FormDescription>
          </FormItem>
        )}
      />

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
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />

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
    </div>
  );
}
