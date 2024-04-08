import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";

export type ComplaintUpdateInput = {
  road?: string;
  description?: string;
  subscription?: boolean;
  userId?: number;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  repairId?: number | null;
  reportId?: number | null;
  updateId?: number | null;
  deletedAt?: Date | null;
  area?: AreaWhereUniqueInput | null;
  residents?: ResidentWhereUniqueInput | null;
};
