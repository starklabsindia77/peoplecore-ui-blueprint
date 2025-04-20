
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
      {filteredReports.length > 0 ? (
        filteredReports.map((report) => (
          <ReportCard key={report.id} report={report} />
        ))
      ) : (
        <div className="col-span-full text-center py-10 text-muted bg-muted-light/30 rounded-md border border-border">
          No reports found in this category.
        </div>
      )}
    </div>
  );
}
