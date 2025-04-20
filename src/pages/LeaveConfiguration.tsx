
import { LeaveRulesSettings } from "@/components/settings/LeaveRulesSettings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function LeaveConfiguration() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-semibold">Leave Configuration</h1>
          <p className="text-sm text-gray-500 mt-1">
            Configure company-wide leave policies and settings
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link to="/leave" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Leave Management
          </Link>
        </Button>
      </div>

      <LeaveRulesSettings />

      <Card>
        <CardHeader>
          <CardTitle>Custom Leave Types</CardTitle>
          <CardDescription>
            Configure additional leave types specific to your company
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* This will be implemented in the next iteration if requested */}
          <div className="text-sm text-gray-500">
            Coming soon: Add and manage custom leave types
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
