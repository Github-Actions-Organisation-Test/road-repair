import { RepairUpdateManyWithoutSupervisorsInput } from "./RepairUpdateManyWithoutSupervisorsInput";
import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type SupervisorUpdateInput = {
  repairScheduleId?: number | null;
  userId?: number;
  adminId?: number | null;
  deletedAt?: Date | null;
  repairs?: RepairUpdateManyWithoutSupervisorsInput;
  resources?: InputJsonValue;
  area?: AreaWhereUniqueInput | null;
};
