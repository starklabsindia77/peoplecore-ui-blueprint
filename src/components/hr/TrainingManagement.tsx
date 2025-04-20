
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Calendar } from "lucide-react";
import { useState } from "react";

interface TrainingProgram {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  enrolled: number;
  status: "upcoming" | "ongoing" | "completed";
}

const mockTrainingPrograms: TrainingProgram[] = [
  {
    id: "TRN001",
    title: "New Employee Orientation",
    description: "Introduction to company policies and procedures",
    startDate: "2025-05-01",
    endDate: "2025-05-02",
    enrolled: 5,
    status: "upcoming",
  },
  {
    id: "TRN002",
    title: "Leadership Development",
    description: "Advanced management skills training",
    startDate: "2025-05-15",
    endDate: "2025-05-16",
    enrolled: 8,
    status: "upcoming",
  },
];

export function TrainingManagement() {
  const [programs] = useState<TrainingProgram[]>(mockTrainingPrograms);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-medium">Training Programs</h2>
        <Button>
          <BookOpen className="h-4 w-4 mr-2" />
          Create Program
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program) => (
          <Card key={program.id}>
            <CardHeader>
              <CardTitle className="text-base font-medium">
                {program.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {program.description}
                </p>
                <div className="grid gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>
                      {program.startDate} - {program.endDate}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{program.enrolled} enrolled</span>
                  </div>
                </div>
                <div className="pt-4">
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
