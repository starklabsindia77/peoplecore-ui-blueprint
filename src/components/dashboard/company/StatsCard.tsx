
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatData {
  name: string;
  value: string;
  change: string;
  changeLabel: string;
  icon: LucideIcon;
}

interface StatsCardProps {
  stat: StatData;
}

export function StatsCard({ stat }: StatsCardProps) {
  return (
    <Card className="p-6 bg-white">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{stat.name}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-2">{stat.value}</p>
          <div className="mt-2 flex items-center text-sm">
            <span className="text-green-500 font-medium">{stat.change}</span>
            <span className="text-gray-500 ml-1">{stat.changeLabel}</span>
          </div>
        </div>
        <div className="p-2 bg-blue-50 rounded-lg">
          <stat.icon className="h-5 w-5 text-blue-600" />
        </div>
      </div>
    </Card>
  );
}
