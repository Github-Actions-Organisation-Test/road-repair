import { InputJsonValue } from "../../types";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";

export type AdminUpdateInput = {
  userId?: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: InputJsonValue;
  repairSchedules?: InputJsonValue;
  mayor?: MayorWhereUniqueInput | null;
};
