
import { ExpenseClaims } from "@/components/employee/ExpenseClaims";

export default function Expenses() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Expense Claims</h1>
      </div>
      <ExpenseClaims />
    </div>
  );
}
