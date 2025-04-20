
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const companies = [
  { 
    name: "Acme Corp", 
    status: "active", 
    plan: "enterprise", 
    employees: 120, 
    lastBilling: "Apr 10, 2025",
    nextBilling: "May 10, 2025"
  },
  { 
    name: "Tech Solutions", 
    status: "trial", 
    plan: "pro", 
    employees: 45, 
    lastBilling: "-",
    nextBilling: "May 5, 2025"
  },
  { 
    name: "Global Systems", 
    status: "expired", 
    plan: "basic", 
    employees: 24, 
    lastBilling: "Mar 15, 2025",
    nextBilling: "Expired"
  },
  { 
    name: "Digital Enterprise", 
    status: "active", 
    plan: "pro", 
    employees: 67, 
    lastBilling: "Apr 2, 2025",
    nextBilling: "May 2, 2025"
  },
  { 
    name: "CloudFirst", 
    status: "trial", 
    plan: "basic", 
    employees: 18, 
    lastBilling: "-",
    nextBilling: "Apr 30, 2025"
  }
];

export const CompanyStatus = () => {
  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>;
      case "trial":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Trial</Badge>;
      case "expired":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Expired</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPlanBadge = (plan: string) => {
    switch(plan) {
      case "basic":
        return <Badge variant="outline" className="bg-gray-50">Basic</Badge>;
      case "pro":
        return <Badge variant="outline" className="bg-blue-50 text-blue-800">Pro</Badge>;
      case "enterprise":
        return <Badge variant="outline" className="bg-purple-50 text-purple-800">Enterprise</Badge>;
      default:
        return <Badge variant="outline">{plan}</Badge>;
    }
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Employees</TableHead>
            <TableHead>Last Billing</TableHead>
            <TableHead>Next Billing</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.name}>
              <TableCell className="font-medium">{company.name}</TableCell>
              <TableCell>{getStatusBadge(company.status)}</TableCell>
              <TableCell>{getPlanBadge(company.plan)}</TableCell>
              <TableCell>{company.employees}</TableCell>
              <TableCell>{company.lastBilling}</TableCell>
              <TableCell>{company.nextBilling}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <Eye className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
