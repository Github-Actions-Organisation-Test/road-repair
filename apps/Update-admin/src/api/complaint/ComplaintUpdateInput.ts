import { UpdateWhereUniqueInput } from "../update/UpdateWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";

export type ComplaintUpdateInput = {
  road?: string;
  description?: string;
  subscription?: boolean;
  areaId?: number;
  userId?: number;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  repairId?: number | null;
  reportId?: number | null;
  deletedAt?: Date | null;
  update?: UpdateWhereUniqueInput | null;
  residents?: ResidentWhereUniqueInput | null;
};
