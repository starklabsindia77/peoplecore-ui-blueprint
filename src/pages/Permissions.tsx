
import { Card } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Key } from "lucide-react";

const roles = [
  {
    id: 1,
    name: "Platform Admin",
    description: "Full system access",
    users: 3,
    permissions: ["all"]
  },
  {
    id: 2,
    name: "Company Admin",
    description: "Company management access",
    users: 24,
    permissions: ["company.manage", "users.manage", "reports.view"]
  },
  {
    id: 3,
    name: "Company HR",
    description: "HR management access",
    users: 45,
    permissions: ["employees.manage", "attendance.manage", "leave.manage"]
  },
  {
    id: 4,
    name: "Company Employee",
    description: "Basic employee access",
    users: 312,
    permissions: ["attendance.view", "leave.request"]
  }
];

export default function Permissions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Permissions</h1>
        <p className="text-sm text-muted mt-1">Manage system roles and permissions</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Card className="p-6 bg-background">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-light rounded-lg">
              <Shield className="h-6 w-6 text-primary-dark" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted">Total Roles</p>
              <p className="text-2xl font-semibold text-foreground">4</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 bg-background">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-secondary-light rounded-lg">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted">Active Users</p>
              <p className="text-2xl font-semibold text-foreground">384</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-background">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-accent-light rounded-lg">
              <Key className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted">Permissions</p>
              <p className="text-2xl font-semibold text-foreground">12</p>
            </div>
          </div>
        </Card>
      </div>

      <Card className="bg-background">
        <div className="p-6 border-b">
          <h2 className="text-lg font-medium text-foreground">System Roles</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Role Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Active Users</TableHead>
              <TableHead>Permissions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {roles.map((role) => (
              <TableRow key={role.id}>
                <TableCell className="font-medium text-foreground">{role.name}</TableCell>
                <TableCell className="text-muted">{role.description}</TableCell>
                <TableCell>{role.users}</TableCell>
                <TableCell>
                  {role.permissions.map((permission) => (
                    <Badge key={permission} className="mr-2 mb-1 bg-primary text-primary-foreground">
                      {permission}
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
