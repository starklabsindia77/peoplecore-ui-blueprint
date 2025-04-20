
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CreditCard, FileText } from "lucide-react";

export function IntegrationsSettings() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Integrations</CardTitle>
        <CardDescription>Manage third-party service integrations</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <Shield className="h-8 w-8 text-blue-500" />
              <div>
                <h4 className="font-medium">Authentication Provider</h4>
                <p className="text-sm text-gray-500">Configure SSO and authentication settings</p>
              </div>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <CreditCard className="h-8 w-8 text-green-500" />
              <div>
                <h4 className="font-medium">Payment Gateway</h4>
                <p className="text-sm text-gray-500">Set up payment processing integration</p>
              </div>
            </div>
            <Button variant="outline">Configure</Button>
          </div>

          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-4">
              <FileText className="h-8 w-8 text-purple-500" />
              <div>
                <h4 className="font-medium">Document Storage</h4>
                <p className="text-sm text-gray-500">Configure cloud storage provider</p>
              </div>
            </div>
            <Button variant="outline">Configure</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
