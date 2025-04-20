
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { UseFormReturn } from "react-hook-form";
import { LeaveRulesValues } from "./types";

interface LeaveAllocationSettingsProps {
  form: UseFormReturn<LeaveRulesValues>;
}

export function LeaveAllocationSettings({ form }: LeaveAllocationSettingsProps) {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="leaveAllocationFrequency"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Allocation Frequency</FormLabel>
            <FormControl>
              <ToggleGroup
                type="single"
                value={field.value}
                onValueChange={field.onChange}
                className="justify-start"
              >
                <ToggleGroupItem value="monthly">Monthly</ToggleGroupItem>
                <ToggleGroupItem value="quarterly">Quarterly</ToggleGroupItem>
                <ToggleGroupItem value="half_yearly">Half Yearly</ToggleGroupItem>
                <ToggleGroupItem value="yearly">Yearly</ToggleGroupItem>
              </ToggleGroup>
            </FormControl>
            <FormDescription>
              Choose how often leave days should be allocated to employees
            </FormDescription>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="autoAllocateLeaves"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel>Auto Allocate Leaves</FormLabel>
              <FormDescription>
                Automatically allocate leaves based on the frequency
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
        name="advanceLeaveAllowed"
        render={({ field }) => (
          <FormItem className="flex items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel>Allow Advance Leave</FormLabel>
              <FormDescription>
                Allow employees to request leaves before allocation
              </FormDescription>
            </div>
            <FormControl>
              <Switch checked={field.value} onCheckedChange={field.onChange} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
