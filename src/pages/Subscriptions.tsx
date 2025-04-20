
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CreditCard, AlertTriangle, CheckCircle } from "lucide-react";

const subscriptionPlans = [
  {
    id: 1,
    company: "TechSolutions Inc",
    plan: "Enterprise",
    status: "active",
    billingCycle: "Annual",
    nextBilling: "2025-05-15",
    amount: "$999.00"
  },
  {
    id: 2,
    company: "Acme Designs",
    plan: "Pro",
    status: "trial",
    billingCycle: "Monthly",
    nextBilling: "2025-04-25",
    amount: "$49.00"
  },
  {
    id: 3,
    company: "Global Systems",
    plan: "Basic",
    status: "expired",
    billingCycle: "Monthly",
    nextBilling: "2025-04-01",
    amount: "$29.00"
  }
];

export default function Subscriptions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Subscriptions</h1>
        <p className="text-sm text-gray-500 mt-1">Manage company subscriptions and billing</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card className="p-6 bg-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-50 rounded-lg">
              <CreditCard className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Active Subscriptions</p>
              <p className="text-2xl font-semibold text-gray-900">18</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Trial Accounts</p>
              <p className="text-2xl font-semibold text-gray-900">6</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-semibold text-gray-900">$14,500</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-white">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Subscription Overview</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Billing Cycle</TableHead>
              <TableHead>Next Billing</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptionPlans.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium">{sub.company}</TableCell>
                <TableCell>{sub.plan}</TableCell>
                <TableCell>
                  <Badge variant={
                    sub.status === 'active' ? 'success' :
                    sub.status === 'trial' ? 'warning' : 'destructive'
                  }>
                    {sub.status}
                  </Badge>
                </TableCell>
                <TableCell>{sub.billingCycle}</TableCell>
                <TableCell>{sub.nextBilling}</TableCell>
                <TableCell>{sub.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
