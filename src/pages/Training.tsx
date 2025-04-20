
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";

const trainings = [
  {
    id: 1,
    title: "New Employee Onboarding",
    enrolled: 12,
    completion: "85%",
    deadline: "2025-05-01",
  },
  {
    id: 2,
    title: "Leadership Skills 101",
    enrolled: 8,
    completion: "60%",
    deadline: "2025-05-15",
  },
  {
    id: 3,
    title: "Workplace Safety",
    enrolled: 45,
    completion: "92%",
    deadline: "2025-04-30",
  },
];

export default function Training() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Training Programs</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Training
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {trainings.map((training) => (
          <Card key={training.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {training.title}
              </CardTitle>
              <BookOpen className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <dl className="space-y-2 mt-4">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Enrolled:</dt>
                  <dd className="text-sm font-medium">{training.enrolled}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Completion:</dt>
                  <dd className="text-sm font-medium">{training.completion}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-500">Deadline:</dt>
                  <dd className="text-sm font-medium">{training.deadline}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
