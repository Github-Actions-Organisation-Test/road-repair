import { InputJsonValue } from "../../types";
import { RepairCreateNestedManyWithoutRepairSchedulesInput } from "./RepairCreateNestedManyWithoutRepairSchedulesInput";

export type RepairScheduleCreateInput = {
  time: Date;
  adminId?: number | null;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  report?: InputJsonValue;
  repairs?: RepairCreateNestedManyWithoutRepairSchedulesInput;
};
