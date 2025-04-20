
import { Badge } from "@/components/ui/badge";

export const getStatusBadge = (status: string) => {
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

export const getPlanBadge = (plan: string) => {
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
