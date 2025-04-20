
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  baseSalary: z.coerce.number().positive("Base salary must be a positive number"),
  allowances: z.coerce.number().min(0, "Allowances cannot be negative"),
  deductions: z.coerce.number().min(0, "Deductions cannot be negative"),
  effectiveDate: z.string().min(1, "Effective date is required"),
});

export function SalaryConfigDialog({ open, onOpenChange, employee }) {
  const { toast } = useToast();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      baseSalary: 0,
      allowances: 0,
      deductions: 0,
      effectiveDate: new Date().toISOString().split("T")[0],
    },
  });

  useEffect(() => {
    if (employee && open) {
      form.reset({
        baseSalary: employee.baseSalary,
        allowances: employee.allowances,
        deductions: employee.deductions,
        effectiveDate: new Date().toISOString().split("T")[0],
      });
    }
  }, [employee, open, form]);

  const onSubmit = (values) => {
    // Here you would update the backend with the new salary configuration
    console.log("Updating salary for:", employee?.id, values);
    
    toast({
      title: "Salary Updated",
      description: `Salary for ${employee?.name} has been updated successfully.`,
    });
    
    onOpenChange(false);
  };

  if (!employee) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Configure Salary</DialogTitle>
          <DialogDescription>
            Update salary details for {employee.name}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="baseSalary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Base Salary ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter base salary"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allowances"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allowances ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter allowances"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deductions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deductions ($)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter deductions"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="effectiveDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Effective Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
