
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { LeaveRulesValues } from "./types";

interface LeaveBasicSettingsProps {
  form: UseFormReturn<LeaveRulesValues>;
}

export function LeaveBasicSettings({ form }: LeaveBasicSettingsProps) {
  return (
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
  );
}
