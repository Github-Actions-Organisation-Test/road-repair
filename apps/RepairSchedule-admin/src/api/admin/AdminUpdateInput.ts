import { InputJsonValue } from "../../types";
import { RepairScheduleUpdateManyWithoutAdminsInput } from "./RepairScheduleUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  mayorId?: number;
  userId?: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: InputJsonValue;
  repairSchedules?: RepairScheduleUpdateManyWithoutAdminsInput;
};
