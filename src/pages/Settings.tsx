
import { useAuth } from "@/contexts/auth-context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useForm } from "react-hook-form";
import { PlatformGeneralSettings } from "@/components/settings/platform/PlatformGeneralSettings";
import { SecuritySettings } from "@/components/settings/platform/SecuritySettings";
import { BillingSettings } from "@/components/settings/platform/BillingSettings";
import { IntegrationsSettings } from "@/components/settings/platform/IntegrationsSettings";
import { CompanyGeneralSettings } from "@/components/settings/company/CompanyGeneralSettings";
import { EmployeeSettings } from "@/components/settings/company/EmployeeSettings";
import { NotificationSettings } from "@/components/settings/company/NotificationSettings";
import { SalaryLeaveSettings } from "@/components/settings/SalaryLeaveSettings";

export default function Settings() {
  const { user } = useAuth();
  const isPlatformAdmin = user?.role === "platform_admin";

  const platformSettingsForm = useForm({
    defaultValues: {
      platformName: "PeopleCore",
      supportEmail: "support@peoplecore.com",
      maxCompanies: "1000",
      defaultTrialDays: "14",
    },
  });

  const securityForm = useForm({
    defaultValues: {
      passwordPolicy: "strong",
      mfaRequired: "true",
      sessionTimeout: "24",
    },
  });

  const billingForm = useForm({
    defaultValues: {
      stripeKey: "pk_test_xxx",
      defaultPlan: "pro",
      taxRate: "10",
    },
  });

  const companyForm = useForm({
    defaultValues: {
      companyName: "Acme Corp",
      address: "123 Business Street",
      contactEmail: "hr@acmecorp.com",
    },
  });

  const employeeForm = useForm({
    defaultValues: {
      probationPeriod: "3",
      annualLeave: "24",
    },
  });

  const onCompanySubmit = (data: any) => {
    console.log("Company data submitted:", data);
  };

  const onEmployeeSubmit = (data: any) => {
    console.log("Employee settings submitted:", data);
  };

  if (isPlatformAdmin) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Platform Settings</h1>
            <p className="text-sm text-gray-500 mt-1">
              Manage your platform configuration and preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="general" className="space-y-4">
          <TabsList className="bg-white border">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
          </TabsList>

          <TabsContent value="general">
            <PlatformGeneralSettings form={platformSettingsForm} />
          </TabsContent>

          <TabsContent value="security">
            <SecuritySettings form={securityForm} />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSettings form={billingForm} />
          </TabsContent>

          <TabsContent value="integrations">
            <IntegrationsSettings />
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Settings</h1>
      </div>

      <Tabs defaultValue="company" className="space-y-4">
        <TabsList>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="employees">Employees</TabsTrigger>
          <TabsTrigger value="salary">Salary & Leave</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <CompanyGeneralSettings form={companyForm} onSubmit={onCompanySubmit} />
        </TabsContent>

        <TabsContent value="employees">
          <EmployeeSettings form={employeeForm} onSubmit={onEmployeeSubmit} />
        </TabsContent>

        <TabsContent value="salary">
          <SalaryLeaveSettings />
        </TabsContent>

        <TabsContent value="notifications">
          <NotificationSettings />
        </TabsContent>
      </Tabs>
    </div>
  );
}
