
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard, Users } from "lucide-react";

interface PayrollStat {
  title: string;
  value: string;
  change: string;
  description: string;
}

interface PayrollStatsProps {
  stats: PayrollStat[];
}

export function PayrollStats({ stats }: PayrollStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              {stat.title}
            </CardTitle>
            {stat.title.includes("Total") ? (
              <CreditCard className="h-4 w-4 text-gray-500" />
            ) : (
              <Users className="h-4 w-4 text-gray-500" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">
              <span className="text-green-500">{stat.change}</span>{" "}
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
