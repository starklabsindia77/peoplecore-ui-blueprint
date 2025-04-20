
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Table, TableBody, TableCell, TableHead, 
  TableHeader, TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogTrigger 
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Building, Plus, Search, Edit, Trash, Eye } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompanyDetails } from "@/components/companies/CompanyDetails";

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
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

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

  // Filter companies based on search term
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
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Company
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Add New Company</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="company-name" className="text-right text-sm text-gray-600">
                  Company Name
                </label>
                <Input
                  id="company-name"
                  placeholder="Enter company name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="industry" className="text-right text-sm text-gray-600">
                  Industry
                </label>
                <Input
                  id="industry"
                  placeholder="Enter industry"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="email" className="text-right text-sm text-gray-600">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter admin email"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="contact-person" className="text-right text-sm text-gray-600">
                  Contact Person
                </label>
                <Input
                  id="contact-person"
                  placeholder="Enter contact person name"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="plan" className="text-right text-sm text-gray-600">
                  Plan
                </label>
                <select id="plan" className="col-span-3 rounded-md border p-2">
                  <option value="basic">Basic</option>
                  <option value="pro">Pro</option>
                  <option value="enterprise">Enterprise</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline">Cancel</Button>
                <Button>Save Company</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
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
                      {filteredCompanies.map((company) => (
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
                                    <CompanyDetails 
                                      company={companies.find(c => c.id === selectedCompany)!}
                                    />
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
              </TabsContent>
              
              <TabsContent value="active" className="mt-0">
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
                      {filteredCompanies
                        .filter(company => company.status === "active")
                        .map((company) => (
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
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
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
              </TabsContent>
              
              <TabsContent value="trial" className="mt-0">
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
                      {filteredCompanies
                        .filter(company => company.status === "trial")
                        .map((company) => (
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
                              <Button variant="ghost" size="icon">
                                <Eye className="h-4 w-4" />
                              </Button>
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
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Card>
    </div>
  );
}
