
import { Performance as PerformanceComponent } from "@/components/employee/Performance";

export default function Performance() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Performance & Development</h1>
      </div>
      <PerformanceComponent />
    </div>
  );
}
