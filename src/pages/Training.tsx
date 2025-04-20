
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useAuth } from "@/contexts/auth-context";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";

interface Training {
  id: number;
  title: string;
  enrolled: number;
  completion: string;
  deadline: string;
  status: "pending" | "approved" | "rejected";
  description?: string;
}

const trainings: Training[] = [
  {
    id: 1,
    title: "New Employee Onboarding",
    enrolled: 12,
    completion: "85%",
    deadline: "2025-05-01",
    status: "approved",
    description: "Comprehensive onboarding program for new employees",
  },
  {
    id: 2,
    title: "Leadership Skills 101",
    enrolled: 8,
    completion: "60%",
    deadline: "2025-05-15",
    status: "approved",
    description: "Basic leadership training for team leads",
  },
  {
    id: 3,
    title: "Workplace Safety",
    enrolled: 45,
    completion: "92%",
    deadline: "2025-04-30",
    status: "approved",
    description: "Essential workplace safety guidelines and procedures",
  },
];

export default function Training() {
  const [newTraining, setNewTraining] = useState({
    title: "",
    description: "",
    deadline: "",
  });
  const { user } = useAuth();
  const isHR = user?.role === "company_hr";
  const isAdmin = user?.role === "company_admin";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      isHR 
        ? "Training program submitted for approval" 
        : "Training program created successfully"
    );
  };

  const getStatusBadge = (status: Training["status"]) => {
    const variants = {
      pending: "secondary", // Changed from "warning" to a valid variant
      approved: "default",  // Changed from "success" to a valid variant
      rejected: "destructive", // This was already a valid variant
    };
    return <Badge variant={variants[status]}>{status}</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Training Programs</h1>
        {(isHR || isAdmin) && (
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                {isHR ? "Propose Training" : "New Training"}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>
                  {isHR ? "Propose New Training Program" : "Create New Training Program"}
                </DialogTitle>
                <DialogDescription>
                  {isHR
                    ? "Submit a new training program for admin approval"
                    : "Create a new training program for employees"}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="text-sm font-medium">
                    Title
                  </label>
                  <Input
                    id="title"
                    value={newTraining.title}
                    onChange={(e) =>
                      setNewTraining({ ...newTraining, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="description" className="text-sm font-medium">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    value={newTraining.description}
                    onChange={(e) =>
                      setNewTraining({ ...newTraining, description: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <label htmlFor="deadline" className="text-sm font-medium">
                    Deadline
                  </label>
                  <Input
                    id="deadline"
                    type="date"
                    value={newTraining.deadline}
                    onChange={(e) =>
                      setNewTraining({ ...newTraining, deadline: e.target.value })
                    }
                    required
                  />
                </div>
                <DialogFooter>
                  <Button type="submit">
                    {isHR ? "Submit for Approval" : "Create Training"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
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
                  <dt className="text-sm text-gray-500">Status:</dt>
                  <dd>{getStatusBadge(training.status)}</dd>
                </div>
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
                {training.description && (
                  <div className="pt-2">
                    <dt className="text-sm text-gray-500">Description:</dt>
                    <dd className="text-sm mt-1">{training.description}</dd>
                  </div>
                )}
              </dl>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
