import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RepairScheduleWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  admin?: AdminWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: JsonFilter;
  repairs?: JsonFilter;
  report?: JsonFilter;
};
