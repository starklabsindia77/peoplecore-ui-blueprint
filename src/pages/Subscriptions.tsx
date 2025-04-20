
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
        <h1 className="text-2xl font-semibold text-foreground">Subscriptions</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage company subscriptions and billing</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card className="p-6 bg-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-success/20 rounded-lg">
              <CreditCard className="h-6 w-6 text-success-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Subscriptions</p>
              <p className="text-2xl font-semibold text-foreground">18</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-warning/20 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-warning-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Trial Accounts</p>
              <p className="text-2xl font-semibold text-foreground">6</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-card">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/20 rounded-lg">
              <CheckCircle className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
              <p className="text-2xl font-semibold text-foreground">$14,500</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-card">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-medium text-foreground">Subscription Overview</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-foreground">Company</TableHead>
              <TableHead className="text-foreground">Plan</TableHead>
              <TableHead className="text-foreground">Status</TableHead>
              <TableHead className="text-foreground">Billing Cycle</TableHead>
              <TableHead className="text-foreground">Next Billing</TableHead>
              <TableHead className="text-foreground">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {subscriptionPlans.map((sub) => (
              <TableRow key={sub.id}>
                <TableCell className="font-medium text-foreground">{sub.company}</TableCell>
                <TableCell className="text-foreground">{sub.plan}</TableCell>
                <TableCell>
                  <Badge variant={
                    sub.status === 'active' ? 'default' :
                    sub.status === 'trial' ? 'secondary' : 'destructive'
                  }>
                    {sub.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-foreground">{sub.billingCycle}</TableCell>
                <TableCell className="text-foreground">{sub.nextBilling}</TableCell>
                <TableCell className="text-foreground">{sub.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
