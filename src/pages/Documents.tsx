
import { DocumentManagement } from "@/components/employee/DocumentManagement";

export default function Documents() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Documents</h1>
      </div>
      <DocumentManagement />
    </div>
  );
}
