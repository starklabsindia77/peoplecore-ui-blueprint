
import { Card } from "@/components/ui/card";
import { RevenueChart } from "../RevenueChart";

export function DepartmentOverview() {
  return (
    <Card className="bg-white">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-base font-semibold text-gray-900">Department Overview</h3>
      </div>
      <div className="p-6">
        <div className="h-[300px]">
          <RevenueChart />
        </div>
      </div>
    </Card>
  );
}
