
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { LeaveRulesValues } from "./types";

interface LeaveBasicSettingsProps {
  form: UseFormReturn<LeaveRulesValues>;
}

const frequencies = [
  { label: "Monthly", value: "monthly" },
  { label: "Quarterly", value: "quarterly" },
  { label: "Half Yearly", value: "half_yearly" },
  { label: "Yearly", value: "yearly" },
];

export function LeaveBasicSettings({ form }: LeaveBasicSettingsProps) {
  const renderLeaveTypeFields = (type: "annualLeave" | "sickLeave" | "casualLeave" | "maternityLeave" | "paternityLeave", label: string) => (
    <div className="space-y-4 p-4 border rounded-lg">
      <h4 className="font-medium">{label}</h4>
      <div className="grid gap-4">
        <FormField
          control={form.control}
          name={`${type}.days`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Number of Days</FormLabel>
              <FormControl>
                <Input type="number" min="0" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={`${type}.allocationFrequency`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allocation Frequency</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {frequencies.map((freq) => (
                    <SelectItem key={freq.value} value={freq.value}>
                      {freq.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>How often these leaves should be allocated</FormDescription>
            </FormItem>
          )}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {renderLeaveTypeFields("annualLeave", "Annual Leave")}
      {renderLeaveTypeFields("sickLeave", "Sick Leave")}
      {renderLeaveTypeFields("casualLeave", "Casual Leave")}
      {renderLeaveTypeFields("maternityLeave", "Maternity Leave")}
      {renderLeaveTypeFields("paternityLeave", "Paternity Leave")}
    </div>
  );
}
