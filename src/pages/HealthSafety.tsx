
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, HeartPulse } from "lucide-react";

const stats = [
  {
    title: "Incident-Free Days",
    value: "145",
    icon: CheckCircle2,
    description: "Last incident: 2024-11-28",
  },
  {
    title: "Open Reports",
    value: "3",
    icon: AlertTriangle,
    description: "Requires attention",
  },
  {
    title: "Safety Score",
    value: "96%",
    icon: HeartPulse,
    description: "Above industry average",
  },
];

export default function HealthSafety() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Health & Safety</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Safety Reports</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Type</th>
                  <th className="text-left py-3 px-4">Department</th>
                  <th className="text-left py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">2025-04-15</td>
                  <td className="py-3 px-4">Equipment Inspection</td>
                  <td className="py-3 px-4">Engineering</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                      In Progress
                    </span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">2025-04-12</td>
                  <td className="py-3 px-4">Fire Safety Drill</td>
                  <td className="py-3 px-4">All Departments</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      Completed
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
