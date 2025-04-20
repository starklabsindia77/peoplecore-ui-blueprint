
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Plus } from "lucide-react";

const departments = [
  {
    id: 1,
    name: "Engineering",
    headCount: 24,
    manager: "John Smith",
    budget: "$450,000",
  },
  {
    id: 2,
    name: "Marketing",
    headCount: 12,
    manager: "Sarah Johnson",
    budget: "$280,000",
  },
  {
    id: 3,
    name: "Sales",
    headCount: 18,
    manager: "Michael Brown",
    budget: "$350,000",
  },
];

export default function Departments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Departments</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {departments.map((dept) => (
          <Card key={dept.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {dept.name}
              </CardTitle>
              <Briefcase className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 mt-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Head Count:</dt>
                  <dd className="text-sm font-medium">{dept.headCount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Manager:</dt>
                  <dd className="text-sm font-medium">{dept.manager}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Budget:</dt>
                  <dd className="text-sm font-medium">{dept.budget}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
