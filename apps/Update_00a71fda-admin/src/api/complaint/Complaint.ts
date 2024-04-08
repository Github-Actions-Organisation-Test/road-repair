import { Update } from "../update/Update";
import { Resident } from "../resident/Resident";

export type Complaint = {
  id: number;
  road: string;
  description: string;
  subscription: boolean;
  areaId: number;
  userId: number;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  repairId: number | null;
  reportId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  update?: Update | null;
  residents?: Resident | null;
};
