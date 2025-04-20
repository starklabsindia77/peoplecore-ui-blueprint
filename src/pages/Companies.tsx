import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AddCompanyDialog } from "@/components/companies/add-company-dialog";
import { CompaniesTable } from "@/components/companies/companies-table";

const companies = [
  { 
    id: "1",
    name: "Acme Corp", 
    email: "admin@acme.com",
    industry: "Technology",
    employees: 120,
    status: "active", 
    plan: "enterprise", 
    createdAt: "Jan 10, 2024",
    contactPerson: "Jane Smith"
  },
  { 
    id: "2",
    name: "Tech Solutions", 
    email: "admin@techsolutions.com",
    industry: "Software",
    employees: 45,
    status: "trial", 
    plan: "pro", 
    createdAt: "Mar 5, 2025",
    contactPerson: "John Doe"
  },
  { 
    id: "3",
    name: "Global Systems", 
    email: "admin@globalsystems.com",
    industry: "Consulting",
    employees: 24,
    status: "expired", 
    plan: "basic", 
    createdAt: "Nov 15, 2024",
    contactPerson: "Lisa Wong"
  },
  { 
    id: "4",
    name: "Digital Enterprise", 
    email: "admin@digitalenterprise.com",
    industry: "Marketing",
    employees: 67,
    status: "active", 
    plan: "pro", 
    createdAt: "Feb 22, 2025",
    contactPerson: "Michael Brown"
  },
  { 
    id: "5",
    name: "CloudFirst", 
    email: "admin@cloudfirst.com",
    industry: "Cloud Services",
    employees: 18,
    status: "trial", 
    plan: "basic", 
    createdAt: "Apr 1, 2025",
    contactPerson: "Sarah Johnson"
  }
];

export default function Companies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCompanies = companies.filter(
    company => company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               company.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
               company.industry.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Companies</h1>
          <p className="text-sm text-gray-500 mt-1">Manage all companies on the platform</p>
        </div>
        <AddCompanyDialog />
      </div>

      <Card>
        <div className="p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="relative w-full sm:max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search companies..." 
                className="pl-9 w-full" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Tabs defaultValue="all" className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="trial">Trial</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <CompaniesTable companies={filteredCompanies} />
              </TabsContent>
              
              <TabsContent value="active" className="mt-0">
                <CompaniesTable 
                  companies={filteredCompanies.filter(company => company.status === "active")} 
                />
              </TabsContent>
              
              <TabsContent value="trial" className="mt-0">
                <CompaniesTable 
                  companies={filteredCompanies.filter(company => company.status === "trial")} 
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  );
}
