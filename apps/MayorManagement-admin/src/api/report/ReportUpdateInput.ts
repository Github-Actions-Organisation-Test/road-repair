import { InputJsonValue } from "../../types";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";

export type ReportUpdateInput = {
  time?: Date;
  repairScheduleId?: number;
  deletedAt?: Date | null;
  complaints?: InputJsonValue;
  resources?: InputJsonValue;
  update?: InputJsonValue;
  mayor?: MayorWhereUniqueInput | null;
};
