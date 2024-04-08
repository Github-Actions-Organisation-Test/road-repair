import { RepairCreateNestedManyWithoutSupervisorsInput } from "./RepairCreateNestedManyWithoutSupervisorsInput";
import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type SupervisorCreateInput = {
  repairScheduleId?: number | null;
  userId: number;
  adminId?: number | null;
  deletedAt?: Date | null;
  repairs?: RepairCreateNestedManyWithoutSupervisorsInput;
  resources?: InputJsonValue;
  area?: AreaWhereUniqueInput | null;
};
