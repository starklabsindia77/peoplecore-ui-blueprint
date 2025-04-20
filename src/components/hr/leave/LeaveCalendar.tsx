
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

interface LeaveCalendarProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
}

export function LeaveCalendar({ date, setDate }: LeaveCalendarProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Leave Calendar</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </CardContent>
    </Card>
  );
}
