import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MayorWhereUniqueInput } from "../mayor/MayorWhereUniqueInput";

export type ReportWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  repairScheduleId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: JsonFilter;
  resources?: JsonFilter;
  update?: JsonFilter;
  mayor?: MayorWhereUniqueInput;
};
