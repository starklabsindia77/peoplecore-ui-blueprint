
import { Card } from "@/components/ui/card";

interface Activity {
  user: string;
  action: string;
  department: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card className="bg-white">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-base font-semibold text-gray-900">Recent Activity</h3>
      </div>
      <div className="divide-y divide-gray-200">
        {activities.map((activity, idx) => (
          <div key={idx} className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-gray-900">{activity.user}</span>
                <span className="text-gray-600"> {activity.action}</span>
                <span className="text-gray-500"> in {activity.department}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
