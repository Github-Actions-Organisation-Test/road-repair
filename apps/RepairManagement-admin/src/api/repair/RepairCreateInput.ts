import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RepairCreateInput = {
  status: "Pending" | "InProgress" | "Completed";
  priority: "Low" | "Medium" | "High";
  assignedToId: number;
  areaId: number;
  supervisorsId?: number | null;
  repairSchedule?: RepairScheduleWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: InputJsonValue;
  resources?: InputJsonValue;
};
