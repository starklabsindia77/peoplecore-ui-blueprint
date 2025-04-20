
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

interface PerformanceReview {
  id: string;
  period: string;
  status: "completed" | "pending" | "upcoming";
  overallRating?: number;
  managerComments?: string;
  selfAssessment?: string;
}

interface SkillAssessment {
  skill: string;
  rating: number;
  category: string;
}

// Mock data
const performanceReviews: PerformanceReview[] = [
  {
    id: "1",
    period: "January - March 2025",
    status: "completed",
    overallRating: 4.2,
    managerComments: "John has exceeded expectations in most areas. His technical skills are excellent, and he consistently delivers high-quality work. Areas for improvement include documentation and cross-team collaboration.",
    selfAssessment: "I believe I've made significant progress in my role this quarter. I've completed all assigned projects on time and have taken initiative on several improvements. I would like to improve my documentation skills and work more closely with other teams."
  },
  {
    id: "2",
    period: "April - June 2025",
    status: "pending",
  },
  {
    id: "3",
    period: "July - September 2025",
    status: "upcoming",
  },
];

const skillAssessments: SkillAssessment[] = [
  { skill: "Technical Knowledge", rating: 85, category: "Technical Skills" },
  { skill: "Problem Solving", rating: 90, category: "Technical Skills" },
  { skill: "Code Quality", rating: 80, category: "Technical Skills" },
  { skill: "Communication", rating: 75, category: "Soft Skills" },
  { skill: "Teamwork", rating: 85, category: "Soft Skills" },
  { skill: "Time Management", rating: 70, category: "Soft Skills" },
  { skill: "Leadership", rating: 65, category: "Management Skills" },
  { skill: "Mentoring", rating: 60, category: "Management Skills" },
];

export function Performance() {
  const { toast } = useToast();
  const [selfAssessment, setSelfAssessment] = useState("");
  
  const handleSubmitAssessment = () => {
    if (selfAssessment.trim().length < 50) {
      toast({
        title: "Form Incomplete",
        description: "Please provide a more detailed self-assessment (at least 50 characters).",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Assessment Submitted",
      description: "Your self-assessment has been submitted successfully."
    });
    setSelfAssessment("");
  };

  const getStatusBadge = (status: PerformanceReview["status"]) => {
    const styles = {
      completed: "bg-green-100 text-green-700",
      pending: "bg-amber-100 text-amber-700",
      upcoming: "bg-blue-100 text-blue-700"
    };
    
    return <span className={`px-2 py-1 rounded text-xs font-medium ${styles[status]}`}>{status}</span>;
  };
  
  return (
    <div className="space-y-6">
      <Tabs defaultValue="reviews">
        <TabsList>
          <TabsTrigger value="reviews">Performance Reviews</TabsTrigger>
          <TabsTrigger value="skills">Skill Assessment</TabsTrigger>
          <TabsTrigger value="goals">Goals & Development</TabsTrigger>
        </TabsList>

        <TabsContent value="reviews" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quarterly Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {performanceReviews.map((review) => (
                <div key={review.id} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">{review.period}</h3>
                      <div className="mt-1">{getStatusBadge(review.status)}</div>
                    </div>
                    {review.overallRating && (
                      <div className="text-right">
                        <span className="block text-2xl font-semibold">{review.overallRating}/5.0</span>
                        <span className="text-sm text-gray-500">Overall Rating</span>
                      </div>
                    )}
                  </div>
                  
                  {review.status === "completed" && (
                    <div className="mt-4 space-y-3">
                      {review.managerComments && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Manager Comments:</h4>
                          <p className="text-sm mt-1">{review.managerComments}</p>
                        </div>
                      )}
                      
                      {review.selfAssessment && (
                        <div>
                          <h4 className="text-sm font-medium text-gray-500">Self Assessment:</h4>
                          <p className="text-sm mt-1">{review.selfAssessment}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  {review.status === "pending" && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium mb-2">Submit Self-Assessment</h4>
                      <Textarea 
                        placeholder="Describe your achievements, challenges, and areas for improvement..." 
                        className="h-32"
                        value={selfAssessment}
                        onChange={(e) => setSelfAssessment(e.target.value)}
                      />
                      <div className="flex justify-end mt-2">
                        <Button onClick={handleSubmitAssessment}>Submit Assessment</Button>
                      </div>
                    </div>
                  )}
                  
                  {review.id !== performanceReviews[performanceReviews.length - 1].id && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skill Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {["Technical Skills", "Soft Skills", "Management Skills"].map((category) => (
                  <div key={category}>
                    <h3 className="font-medium mb-3">{category}</h3>
                    <div className="space-y-4">
                      {skillAssessments
                        .filter(skill => skill.category === category)
                        .map((skill) => (
                        <div key={skill.skill}>
                          <div className="flex justify-between mb-1 text-sm">
                            <span>{skill.skill}</span>
                            <span className="font-medium">{skill.rating}%</span>
                          </div>
                          <Progress value={skill.rating} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="goals" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Development Goals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Improve Code Testing Skills</h3>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">In Progress</span>
                  </div>
                  <p className="text-sm mt-2">Increase test coverage on all new features by at least 80% and learn advanced testing techniques.</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Progress</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2 mt-1" />
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Cross-Team Collaboration</h3>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">Completed</span>
                  </div>
                  <p className="text-sm mt-2">Work with the design and product teams to improve feature development flow.</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Progress</span>
                      <span>100%</span>
                    </div>
                    <Progress value={100} className="h-2 mt-1" />
                  </div>
                </div>
                
                <div className="border rounded-md p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">Leadership Training</h3>
                    <span className="text-sm bg-amber-100 text-amber-700 px-2 py-1 rounded">Not Started</span>
                  </div>
                  <p className="text-sm mt-2">Complete leadership training course and apply skills by leading a small team project.</p>
                  <div className="mt-3">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Progress</span>
                      <span>0%</span>
                    </div>
                    <Progress value={0} className="h-2 mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
