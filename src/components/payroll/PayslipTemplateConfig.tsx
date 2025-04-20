
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export function PayslipTemplateConfig() {
  const { toast } = useToast();
  const [template, setTemplate] = useState({
    companyName: "ACME Corp",
    companyLogo: "",
    companyAddress: "",
    footerText: "This is a computer-generated document and does not require a signature.",
    showBankDetails: true,
    showTaxDetails: true,
  });

  const handleSave = () => {
    console.log("Saving template:", template);
    toast({
      title: "Template Updated",
      description: "Payslip template has been updated successfully.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payslip Template Configuration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={template.companyName}
              onChange={(e) => setTemplate({ ...template, companyName: e.target.value })}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyLogo">Company Logo URL</Label>
            <Input
              id="companyLogo"
              value={template.companyLogo}
              onChange={(e) => setTemplate({ ...template, companyLogo: e.target.value })}
              placeholder="https://..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="companyAddress">Company Address</Label>
            <Input
              id="companyAddress"
              value={template.companyAddress}
              onChange={(e) => setTemplate({ ...template, companyAddress: e.target.value })}
            />
          </div>
        </div>

        <Separator />

        <div className="space-y-4">
          <h3 className="font-semibold">Display Options</h3>
          
          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={template.showBankDetails}
                onChange={(e) => setTemplate({ ...template, showBankDetails: e.target.checked })}
              />
              <span>Show Bank Details</span>
            </label>
          </div>

          <div className="space-y-2">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={template.showTaxDetails}
                onChange={(e) => setTemplate({ ...template, showTaxDetails: e.target.checked })}
              />
              <span>Show Tax Details</span>
            </label>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <Label htmlFor="footerText">Footer Text</Label>
          <Input
            id="footerText"
            value={template.footerText}
            onChange={(e) => setTemplate({ ...template, footerText: e.target.value })}
          />
        </div>

        <Button onClick={handleSave}>Save Template</Button>
      </CardContent>
    </Card>
  );
}
