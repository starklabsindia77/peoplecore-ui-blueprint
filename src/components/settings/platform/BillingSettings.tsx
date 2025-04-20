
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";

interface BillingFormValues {
  stripeKey: string;
  defaultPlan: string;
  taxRate: string;
}

interface BillingSettingsProps {
  form: UseFormReturn<BillingFormValues>;
}

export function BillingSettings({ form }: BillingSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Configuration</CardTitle>
        <CardDescription>Configure platform billing settings</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="stripeKey"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Stripe API Key</FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="defaultPlan"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Default Plan</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="taxRate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tax Rate (%)</FormLabel>
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
