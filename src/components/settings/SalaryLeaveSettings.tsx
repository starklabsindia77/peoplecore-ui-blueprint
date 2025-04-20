
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  defaultCurrency: z.string().min(1, "Currency is required"),
  currencySymbol: z.string().min(1, "Currency symbol is required"),
  lopCalculationType: z.enum(["calendar", "workingDays"]),
  autoDeductLOP: z.boolean(),
  lopPerDayCalculation: z.enum(["monthly", "annual"]),
  allowLOPOverride: z.boolean(),
});

type FormValues = z.infer<typeof formSchema>;

export function SalaryLeaveSettings() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      defaultCurrency: "USD",
      currencySymbol: "$",
      lopCalculationType: "calendar",
      autoDeductLOP: true,
      lopPerDayCalculation: "monthly",
      allowLOPOverride: true,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Salary and Leave settings updated:", data);
    toast({
      title: "Settings Updated",
      description: "Salary and leave settings have been updated successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary & Leave Settings</CardTitle>
        <CardDescription>
          Configure currency and leave without pay (LOP) settings
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="defaultCurrency"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Default Currency</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="USD">US Dollar (USD)</SelectItem>
                        <SelectItem value="EUR">Euro (EUR)</SelectItem>
                        <SelectItem value="GBP">British Pound (GBP)</SelectItem>
                        <SelectItem value="INR">Indian Rupee (INR)</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="currencySymbol"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Currency Symbol</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="$, €, £, etc." />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Leave Without Pay (LOP) Settings</h3>
              
              <FormField
                control={form.control}
                name="lopCalculationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>LOP Calculation Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="calendar">Calendar Days</SelectItem>
                        <SelectItem value="workingDays">Working Days Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lopPerDayCalculation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Per Day Salary Calculation</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="monthly">Monthly Salary / 30</SelectItem>
                        <SelectItem value="annual">Annual Salary / 365</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="autoDeductLOP"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Automatic LOP Deduction</FormLabel>
                      <CardDescription>
                        Automatically deduct salary for unapproved leaves
                      </CardDescription>
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
                name="allowLOPOverride"
                render={({ field }) => (
                  <FormItem className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-0.5">
                      <FormLabel>Allow LOP Override</FormLabel>
                      <CardDescription>
                        Allow managers to override LOP calculations
                      </CardDescription>
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

            <Button type="submit">Save Settings</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
