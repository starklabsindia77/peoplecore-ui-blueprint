
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SalaryComponent {
  id: string;
  name: string;
  type: "earning" | "deduction";
  calculationType: "fixed" | "percentage";
  value: number;
}

export function SalaryStructureConfig() {
  const { toast } = useToast();
  const [components, setComponents] = useState<SalaryComponent[]>([
    { id: "basic", name: "Basic Salary", type: "earning", calculationType: "percentage", value: 50 },
    { id: "hra", name: "HRA", type: "earning", calculationType: "percentage", value: 20 },
    { id: "tax", name: "Tax", type: "deduction", calculationType: "percentage", value: 10 },
  ]);
  const [newComponent, setNewComponent] = useState<Partial<SalaryComponent>>({
    type: "earning",
    calculationType: "fixed"
  });

  const handleAddComponent = () => {
    if (!newComponent.name || !newComponent.value) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    const id = newComponent.name.toLowerCase().replace(/\s+/g, '_');
    setComponents([...components, { ...newComponent, id } as SalaryComponent]);
    setNewComponent({ type: "earning", calculationType: "fixed" });
    
    toast({
      title: "Component Added",
      description: "Salary component has been added successfully.",
    });
  };

  const handleDeleteComponent = (id: string) => {
    setComponents(components.filter(comp => comp.id !== id));
    toast({
      title: "Component Deleted",
      description: "Salary component has been removed successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salary Structure Configuration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {components.map((component) => (
              <Card key={component.id}>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{component.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {component.calculationType === "fixed" ? "Fixed Amount" : "Percentage"}: {
                          component.calculationType === "fixed" 
                            ? `$${component.value}` 
                            : `${component.value}%`
                        }
                      </p>
                      <p className="text-sm text-muted-foreground capitalize">{component.type}</p>
                    </div>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={() => handleDeleteComponent(component.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="border p-4 rounded-lg space-y-4">
            <h3 className="font-semibold">Add New Component</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Component Name</Label>
                <Input
                  id="name"
                  value={newComponent.name || ""}
                  onChange={(e) => setNewComponent({ ...newComponent, name: e.target.value })}
                  placeholder="e.g., Transport Allowance"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <select
                  id="type"
                  className="w-full p-2 border rounded-md"
                  value={newComponent.type}
                  onChange={(e) => setNewComponent({ 
                    ...newComponent, 
                    type: e.target.value as "earning" | "deduction" 
                  })}
                >
                  <option value="earning">Earning</option>
                  <option value="deduction">Deduction</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="calculationType">Calculation Type</Label>
                <select
                  id="calculationType"
                  className="w-full p-2 border rounded-md"
                  value={newComponent.calculationType}
                  onChange={(e) => setNewComponent({ 
                    ...newComponent, 
                    calculationType: e.target.value as "fixed" | "percentage" 
                  })}
                >
                  <option value="fixed">Fixed Amount</option>
                  <option value="percentage">Percentage</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="value">Value</Label>
                <Input
                  id="value"
                  type="number"
                  value={newComponent.value || ""}
                  onChange={(e) => setNewComponent({ 
                    ...newComponent, 
                    value: parseFloat(e.target.value) 
                  })}
                  placeholder={newComponent.calculationType === "fixed" ? "Amount" : "Percentage"}
                />
              </div>
            </div>
            <Button onClick={handleAddComponent}>Add Component</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
