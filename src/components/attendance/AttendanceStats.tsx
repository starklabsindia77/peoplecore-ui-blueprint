
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Stat {
  title: string;
  value: string;
}

interface AttendanceStatsProps {
  stats: Stat[];
}

export function AttendanceStats({ stats }: AttendanceStatsProps) {
  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
