
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

export function AddCompanyDialog() {
  return (
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
  );
}
