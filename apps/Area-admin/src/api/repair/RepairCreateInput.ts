import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";

export type RepairCreateInput = {
  status: "Pending" | "InProgress" | "Completed";
  priority: "Low" | "Medium" | "High";
  assignedToId: number;
  repairScheduleId?: number | null;
  deletedAt?: Date | null;
  complaints?: InputJsonValue;
  resources?: InputJsonValue;
  area?: AreaWhereUniqueInput | null;
  supervisors?: SupervisorWhereUniqueInput | null;
};
