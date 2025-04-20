
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function LeaveSettings() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Leave Settings</CardTitle>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Configure</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Leave Settings</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Annual Leave Days</Label>
                <Input type="number" defaultValue={20} />
              </div>
              <div className="space-y-2">
                <Label>Sick Leave Days</Label>
                <Input type="number" defaultValue={14} />
              </div>
              <div className="space-y-2">
                <Label>Approval Required</Label>
                <Select defaultValue="yes">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Save Settings</Button>
            </div>
          </DialogContent>
        </Dialog>
      </CardHeader>
    </Card>
  );
}
