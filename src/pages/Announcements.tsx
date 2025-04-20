
import { Announcements as AnnouncementsComponent } from "@/components/employee/Announcements";

export default function Announcements() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Company Announcements</h1>
      </div>
      <AnnouncementsComponent />
    </div>
  );
}
