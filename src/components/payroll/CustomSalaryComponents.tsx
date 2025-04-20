
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface SalaryComponent {
  id: string;
  name: string;
  type: "earning" | "deduction";
  description?: string;
}

export function CustomSalaryComponents() {
  const { toast } = useToast();
  const [components, setComponents] = useState<SalaryComponent[]>([
    { id: "hra", name: "House Rent Allowance", type: "earning" },
    { id: "ma", name: "Medical Allowance", type: "earning" },
    { id: "tax", name: "Income Tax", type: "deduction" }
  ]);
  
  const [newComponent, setNewComponent] = useState<Partial<SalaryComponent>>({
    type: "earning"
  });

  const handleAddComponent = () => {
    if (!newComponent.name) {
      toast({
        title: "Error",
        description: "Please enter a component name",
        variant: "destructive",
      });
      return;
    }

    const id = newComponent.name.toLowerCase().replace(/\s+/g, '_');
    setComponents([...components, { ...newComponent, id } as SalaryComponent]);
    setNewComponent({ type: "earning" });
    
    toast({
      title: "Component Added",
      description: "New salary component has been added successfully.",
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
        <CardTitle>Custom Salary Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {components.map((component) => (
            <Card key={component.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{component.name}</h4>
                    <p className="text-sm text-muted-foreground capitalize">
                      {component.type}
                    </p>
                  </div>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => handleDeleteComponent(component.id)}
                  >
                    <Minus className="h-4 w-4" />
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
          </div>
          <Button onClick={handleAddComponent}>
            <Plus className="h-4 w-4 mr-2" />
            Add Component
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
