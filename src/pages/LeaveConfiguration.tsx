
import { LeaveRulesSettings } from "@/components/settings/LeaveRulesSettings";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
