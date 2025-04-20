
import { HRSalaryView } from "@/components/payroll/HRSalaryView";

export default function MySalary() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">My Salary Details</h1>
      </div>
      <HRSalaryView />
    </div>
  );
}
