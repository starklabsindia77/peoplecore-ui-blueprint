
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PayrollRecord {
  id: string;
  date: string;
  employees: number;
  total: string;
  status: string;
}

interface PayrollHistoryProps {
  records: PayrollRecord[];
}

export function PayrollHistory({ records }: PayrollHistoryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Payroll History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Payroll ID</th>
                <th className="text-left py-3 px-4">Date</th>
                <th className="text-left py-3 px-4">Employees</th>
                <th className="text-left py-3 px-4">Total</th>
                <th className="text-left py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record) => (
                <tr key={record.id} className="border-b">
                  <td className="py-3 px-4">{record.id}</td>
                  <td className="py-3 px-4">{record.date}</td>
                  <td className="py-3 px-4">{record.employees}</td>
                  <td className="py-3 px-4">{record.total}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        record.status === "Processed"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
