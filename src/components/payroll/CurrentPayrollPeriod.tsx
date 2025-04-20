
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Receipt } from "lucide-react";

interface CurrentPayrollPeriodProps {
  period: {
    month: string;
    year: string;
    startDate: string;
    endDate: string;
  };
  isLocked: boolean;
}

export function CurrentPayrollPeriod({ period, isLocked }: CurrentPayrollPeriodProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium">
          Current Payroll Period
        </CardTitle>
        <Receipt className="h-4 w-4 text-gray-500" />
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold">{period.month} {period.year}</h3>
            <p className="text-sm text-gray-500">
              {period.startDate} to {period.endDate}
            </p>
          </div>
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              isLocked
                ? "bg-orange-100 text-orange-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {isLocked ? "Locked" : "Active"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
