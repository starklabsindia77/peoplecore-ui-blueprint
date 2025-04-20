
import { z } from "zod";

const leaveTypeSchema = z.object({
  days: z.string().min(1, "Required"),
  allocationFrequency: z.enum(["monthly", "quarterly", "half_yearly", "yearly"]),
});

export const leaveRulesSchema = z.object({
  annualLeave: leaveTypeSchema,
  sickLeave: leaveTypeSchema,
  casualLeave: leaveTypeSchema,
  maternityLeave: leaveTypeSchema,
  paternityLeave: leaveTypeSchema,
  carryForwardDays: z.string().min(1, "Required"),
  requireApproval: z.boolean(),
  allowHalfDay: z.boolean(),
  minDaysAdvance: z.string().min(1, "Required"),
  approvalWorkflow: z.enum(["single", "multi", "auto"]),
  autoAllocateLeaves: z.boolean(),
  advanceLeaveAllowed: z.boolean(),
});

export type LeaveRulesValues = z.infer<typeof leaveRulesSchema>;
