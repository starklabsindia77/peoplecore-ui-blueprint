
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Users, Mail, Phone, MapPin, Calendar, 
  CreditCard, Building, Globe 
} from "lucide-react";

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

interface CompanyDetailsProps {
  company: Company;
}

export const CompanyDetails = ({ company }: CompanyDetailsProps) => {
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
    <div className="pt-4">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Building className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">{company.name}</h2>
            {getStatusBadge(company.status)}
          </div>
          <p className="text-sm text-gray-500">
            {company.industry} • {company.employees} Employees • {getPlanBadge(company.plan)}
          </p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-medium mb-4">Company Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{company.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">123 Business Ave, Suite 100, San Francisco, CA 94107</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">www.{company.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <h3 className="font-medium mb-4">Contact Person</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">{company.contactPerson}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">contact@{company.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">+1 (555) 987-6543</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="subscription" className="space-y-4">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Subscription Details</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Plan</span>
                <span className="font-medium">{company.plan.charAt(0).toUpperCase() + company.plan.slice(1)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Status</span>
                <span>{getStatusBadge(company.status)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Billing Cycle</span>
                <span>Monthly</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Next Billing</span>
                <span>May 15, 2025</span>
              </div>
            </div>
          </Card>
          
          <Card className="p-6">
            <h3 className="font-medium mb-4">Payment History</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium">April 2025</div>
                    <div className="text-xs text-gray-500">Apr 15, 2025</div>
                  </div>
                </div>
                <span className="font-medium">$499.00</span>
              </div>
              
              <div className="flex items-center justify-between pb-3 border-b">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium">March 2025</div>
                    <div className="text-xs text-gray-500">Mar 15, 2025</div>
                  </div>
                </div>
                <span className="font-medium">$499.00</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium">February 2025</div>
                    <div className="text-xs text-gray-500">Feb 15, 2025</div>
                  </div>
                </div>
                <span className="font-medium">$499.00</span>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="usage" className="space-y-4">
          <Card className="p-6">
            <h3 className="font-medium mb-4">Resource Usage</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Employees</span>
                  <span className="text-sm">{company.employees} / 150</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: `${(company.employees / 150) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Storage</span>
                  <span className="text-sm">45.2 GB / 100 GB</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: '45.2%' }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">API Calls</span>
                  <span className="text-sm">24,350 / 50,000</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full" 
                    style={{ width: '48.7%' }}
                  ></div>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
