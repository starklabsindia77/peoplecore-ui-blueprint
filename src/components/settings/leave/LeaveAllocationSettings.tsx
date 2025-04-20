
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
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
        name="carryForwardDays"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Carry Forward Days</FormLabel>
            <FormControl>
              <input 
                type="number" 
                min="0"
                className="w-full p-2 border rounded" 
                {...field} 
              />
            </FormControl>
            <FormDescription>
              Maximum number of leave days that can be carried forward to the next year
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
