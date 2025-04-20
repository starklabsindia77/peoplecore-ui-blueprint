
import { useState } from "react";
import { Building, Eye, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CompanyDetails } from "@/components/companies/CompanyDetails";
import { getStatusBadge, getPlanBadge } from "./company-badges";

interface Company {
  id: string;
  name: string;
  email: string;
  industry: string;
  employees: number;
  status: string;
  plan: string;
  createdAt: string;
  contactPerson: string;
}

interface CompaniesTableProps {
  companies: Company[];
}

export function CompaniesTable({ companies }: CompaniesTableProps) {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Industry</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead className="hidden md:table-cell">Contact</TableHead>
            <TableHead className="hidden lg:table-cell">Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-100 p-2 rounded-md">
                    <Building className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div>{company.name}</div>
                    <div className="text-xs text-gray-500">{company.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{getStatusBadge(company.status)}</TableCell>
              <TableCell>{getPlanBadge(company.plan)}</TableCell>
              <TableCell className="hidden md:table-cell">{company.contactPerson}</TableCell>
              <TableCell className="hidden lg:table-cell">{company.createdAt}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setSelectedCompany(company.id)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[625px]">
                      <DialogHeader>
                        <DialogTitle>Company Details</DialogTitle>
                      </DialogHeader>
                      {selectedCompany && (
                        <CompanyDetails company={company} />
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-red-600">
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
