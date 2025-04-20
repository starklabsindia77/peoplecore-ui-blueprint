
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";

interface EmployeeFormValues {
  probationPeriod: string;
  annualLeave: string;
}

interface EmployeeSettingsProps {
  form: UseFormReturn<EmployeeFormValues>;
  onSubmit: (data: EmployeeFormValues) => void;
}

export function EmployeeSettings({ form, onSubmit }: EmployeeSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employee Settings</CardTitle>
        <CardDescription>Configure employee-related settings and policies</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="probationPeriod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Probation Period (months)</FormLabel>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
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
            <Button type="submit">Save Changes</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
