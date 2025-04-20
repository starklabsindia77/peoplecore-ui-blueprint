
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import type { Report } from "@/data/reports-data";

interface ReportCardProps {
  report: Report;
}

export function ReportCard({ report }: ReportCardProps) {
  const Icon = report.icon;

  return (
    <Card className="bg-white hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Icon className="h-4 w-4 text-blue-600" />
          </div>
          <CardTitle className="text-base font-medium">
            {report.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-500 mb-4">{report.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">
            Last generated: {report.lastGenerated}
          </span>
          <Button variant="outline" size="sm" className="h-8">
            <Download className="mr-2 h-3 w-3" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
