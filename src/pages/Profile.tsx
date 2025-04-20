
import { PersonalProfile } from "@/components/employee/PersonalProfile";

export default function Profile() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Profile</h1>
      </div>
      <PersonalProfile />
    </div>
  );
}
