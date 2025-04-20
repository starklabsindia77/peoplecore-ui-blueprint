
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Holiday } from "./types/holiday";
import { AddHolidayDialog } from "./AddHolidayDialog";
import { useState } from "react";

// Sample initial data
const initialHolidays: Holiday[] = [
  {
    id: "1",
    name: "New Year's Day",
    date: "2025-01-01",
    type: "public",
    description: "New Year Celebration"
  },
  {
    id: "2",
    name: "Good Friday",
    date: "2025-04-18",
    type: "restricted",
    description: "Religious Holiday"
  }
];

export function HolidayManagement() {
  const [holidays, setHolidays] = useState<Holiday[]>(initialHolidays);

  const handleAddHoliday = (holiday: Holiday) => {
    setHolidays((prev) => [...prev, holiday]);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Holiday Management</CardTitle>
            <CardDescription>
              Manage public and restricted holidays for the year
            </CardDescription>
          </div>
          <AddHolidayDialog onHolidayAdded={handleAddHoliday} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-green-500" />
              <span className="text-sm">Public Holiday</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-sm">Restricted Holiday</span>
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Holiday Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {holidays.map((holiday) => (
                <TableRow key={holiday.id}>
                  <TableCell>{holiday.name}</TableCell>
                  <TableCell>{holiday.date}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                        holiday.type === "public"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {holiday.type === "public" ? "Public" : "Restricted"}
                    </span>
                  </TableCell>
                  <TableCell>{holiday.description}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
