import { InputJsonValue } from "../../types";
import { RepairUpdateManyWithoutRepairSchedulesInput } from "./RepairUpdateManyWithoutRepairSchedulesInput";

export type RepairScheduleUpdateInput = {
  time?: Date;
  adminId?: number | null;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  report?: InputJsonValue;
  repairs?: RepairUpdateManyWithoutRepairSchedulesInput;
};
