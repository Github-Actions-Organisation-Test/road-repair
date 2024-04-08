import { InputJsonValue } from "../../types";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";

export type AdminCreateInput = {
  userId: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: InputJsonValue;
  repairSchedules?: InputJsonValue;
  mayor?: MayorWhereUniqueInput | null;
};
