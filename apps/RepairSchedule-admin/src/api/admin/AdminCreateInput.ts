import { InputJsonValue } from "../../types";
import { RepairScheduleCreateNestedManyWithoutAdminsInput } from "./RepairScheduleCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  mayorId: number;
  userId: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: InputJsonValue;
  repairSchedules?: RepairScheduleCreateNestedManyWithoutAdminsInput;
};
