
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
    <div className="rounded-lg border border-gray-200 bg-white">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50/50">
            <TableHead className="w-[300px]">Company</TableHead>
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
                <div className="flex items-center gap-3">
                  <div className="bg-gray-100/80 p-2 rounded-lg">
                    <Building className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{company.name}</div>
                    <div className="text-sm text-gray-500">{company.email}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-gray-600">{company.industry}</TableCell>
              <TableCell>{getStatusBadge(company.status)}</TableCell>
              <TableCell>{getPlanBadge(company.plan)}</TableCell>
              <TableCell className="hidden md:table-cell text-gray-600">{company.contactPerson}</TableCell>
              <TableCell className="hidden lg:table-cell text-gray-600">{company.createdAt}</TableCell>
              <TableCell>
                <div className="flex justify-end gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setSelectedCompany(company.id)}
                        className="hover:bg-gray-100"
                      >
                        <Eye className="h-4 w-4 text-gray-600" />
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
                  <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                    <Edit className="h-4 w-4 text-gray-600" />
                  </Button>
                  <Button variant="ghost" size="icon" className="hover:bg-red-50 hover:text-red-600">
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
