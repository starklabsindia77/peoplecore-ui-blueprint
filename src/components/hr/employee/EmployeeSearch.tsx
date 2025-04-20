
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface EmployeeSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export function EmployeeSearch({ searchTerm, onSearchChange }: EmployeeSearchProps) {
  return (
    <div className="relative flex-1 max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
      <Input
        placeholder="Search employees..."
        className="pl-8"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
