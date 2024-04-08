import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type RepairScheduleUpdateInput = {
  time?: Date;
  admin?: AdminWhereUniqueInput | null;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  repairs?: InputJsonValue;
  report?: InputJsonValue;
};
