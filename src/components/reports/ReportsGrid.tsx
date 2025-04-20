
import { Report } from "@/data/reports-data";
import { ReportCard } from "./ReportCard";

interface ReportsGridProps {
  reports: Report[];
  category?: string;
}

export function ReportsGrid({ reports, category }: ReportsGridProps) {
  const filteredReports = category && category !== "all" 
    ? reports.filter((report) => report.category === category)
    : reports;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredReports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
}
