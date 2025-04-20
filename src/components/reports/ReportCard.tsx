
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
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-primary-light rounded-lg">
            <Icon className="h-4 w-4 text-primary-dark" />
          </div>
          <CardTitle className="text-base font-medium text-foreground">
            {report.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted mb-4">{report.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted">
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
