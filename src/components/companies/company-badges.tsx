
import { Badge } from "@/components/ui/badge";

export const getStatusBadge = (status: string) => {
  switch(status) {
    case "active":
      return <Badge className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-700">Active</Badge>;
    case "trial":
      return <Badge className="bg-blue-50 text-blue-700 hover:bg-blue-50 hover:text-blue-700">Trial</Badge>;
    case "expired":
      return <Badge className="bg-red-50 text-red-700 hover:bg-red-50 hover:text-red-700">Expired</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export const getPlanBadge = (plan: string) => {
  switch(plan) {
    case "basic":
      return <Badge variant="outline" className="border-gray-200">Basic</Badge>;
    case "pro":
      return <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700">Pro</Badge>;
    case "enterprise":
      return <Badge variant="outline" className="border-purple-200 bg-purple-50 text-purple-700">Enterprise</Badge>;
    default:
      return <Badge variant="outline">{plan}</Badge>;
  }
};
