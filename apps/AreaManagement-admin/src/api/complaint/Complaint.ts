import { Area } from "../area/Area";
import { Resident } from "../resident/Resident";

export type Complaint = {
  id: number;
  road: string;
  description: string;
  subscription: boolean;
  userId: number;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  repairId: number | null;
  reportId: number | null;
  updateId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  area?: Area | null;
  residents?: Resident | null;
};
