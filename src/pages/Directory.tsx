
import { CompanyDirectory } from "@/components/employee/CompanyDirectory";

export default function Directory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Company Directory</h1>
      </div>
      <CompanyDirectory />
    </div>
  );
}
