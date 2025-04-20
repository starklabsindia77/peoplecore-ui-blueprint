
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeaveRequest } from "../types";
import { toast } from "sonner";

interface LeaveRequestCardProps {
  request: LeaveRequest;
  onAction: (requestId: string, action: "approve" | "reject") => void;
}

export function LeaveRequestCard({ request, onAction }: LeaveRequestCardProps) {
  return (
    <Card key={request.id}>
      <CardHeader>
        <CardTitle className="text-base font-medium">
          {request.employeeName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid gap-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type:</span>
              <span>{request.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Duration:</span>
              <span>{request.startDate} to {request.endDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Status:</span>
              <span className={`capitalize ${
                request.status === 'approved' ? 'text-green-600' :
                request.status === 'rejected' ? 'text-red-600' :
                'text-yellow-600'
              }`}>
                {request.status}
              </span>
            </div>
            <div className="space-y-2">
              <span className="text-muted-foreground">Reason:</span>
              <p className="text-sm">{request.reason}</p>
            </div>
          </div>
          
          {request.status === 'pending' && (
            <div className="flex gap-2">
              <Button
                className="flex-1"
                variant="outline"
                onClick={() => onAction(request.id, 'reject')}
              >
                Reject
              </Button>
              <Button
                className="flex-1"
                onClick={() => onAction(request.id, 'approve')}
              >
                Approve
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
