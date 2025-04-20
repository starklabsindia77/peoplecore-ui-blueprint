
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
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface SalaryComponent {
  id: string;
  name: string;
  type: "earning" | "deduction";
  value: number;
}

const formSchema = z.object({
  baseSalary: z.coerce.number().positive("Base salary must be a positive number"),
  allowances: z.coerce.number().min(0, "Allowances cannot be negative"),
  deductions: z.coerce.number().min(0, "Deductions cannot be negative"),
  effectiveDate: z.string().min(1, "Effective date is required"),
  components: z.array(z.object({
    id: z.string(),
    name: z.string(),
    type: z.enum(["earning", "deduction"]),
    value: z.coerce.number().min(0)
  }))
});

export function SalaryConfigDialog({ open, onOpenChange, employee }) {
  const { toast } = useToast();
  const [salaryComponents, setSalaryComponents] = useState<SalaryComponent[]>([]);
  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      baseSalary: 0,
      allowances: 0,
      deductions: 0,
      effectiveDate: new Date().toISOString().split("T")[0],
      components: []
    },
  });

  useEffect(() => {
    if (employee && open) {
      // Fetch salary components for this employee
      // For now using mock data
      const mockComponents = [
        { id: "hra", name: "House Rent Allowance", type: "earning" as const, value: 1000 },
        { id: "ma", name: "Medical Allowance", type: "earning" as const, value: 500 },
        { id: "tax", name: "Income Tax", type: "deduction" as const, value: 200 }
      ];
      
      setSalaryComponents(mockComponents);
      
      form.reset({
        baseSalary: employee.baseSalary,
        allowances: employee.allowances,
        deductions: employee.deductions,
        effectiveDate: new Date().toISOString().split("T")[0],
        components: mockComponents
      });
    }
  }, [employee, open, form]);

  const onSubmit = (values) => {
    console.log("Updating salary for:", employee?.id, values);
    
    toast({
      title: "Salary Updated",
      description: `Salary configuration for ${employee?.name} has been updated successfully.`,
    });
    
    onOpenChange(false);
  };

  if (!employee) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Configure Salary</DialogTitle>
          <DialogDescription>
            Update salary details for {employee.name}
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="baseSalary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Base Salary ($)</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
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
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-4">
              <h3 className="font-semibold">Salary Components</h3>
              <div className="grid gap-4">
                {salaryComponents.map((component, index) => (
                  <Card key={component.id}>
                    <CardContent className="p-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="font-medium">{component.name}</p>
                          <p className="text-sm text-muted-foreground capitalize">
                            {component.type}
                          </p>
                        </div>
                        <FormField
                          control={form.control}
                          name={`components.${index}.value`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input 
                                  type="number" 
                                  placeholder="Amount" 
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
