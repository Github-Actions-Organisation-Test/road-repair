import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";

export type AdminWhereInput = {
  id?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: JsonFilter;
  resources?: JsonFilter;
  repairSchedules?: JsonFilter;
  mayor?: MayorWhereUniqueInput;
};
