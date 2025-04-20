
import { z } from "zod";

export const leaveRulesSchema = z.object({
  annualLeave: z.string().min(1, "Required"),
  sickLeave: z.string().min(1, "Required"),
  casualLeave: z.string().min(1, "Required"),
  maternityLeave: z.string().min(1, "Required"),
  paternityLeave: z.string().min(1, "Required"),
  carryForwardDays: z.string().min(1, "Required"),
  requireApproval: z.boolean(),
  allowHalfDay: z.boolean(),
  minDaysAdvance: z.string().min(1, "Required"),
  approvalWorkflow: z.enum(["single", "multi", "auto"]),
  leaveAllocationFrequency: z.enum(["monthly", "quarterly", "half_yearly", "yearly"]),
  autoAllocateLeaves: z.boolean(),
  advanceLeaveAllowed: z.boolean(),
});

export type LeaveRulesValues = z.infer<typeof leaveRulesSchema>;
