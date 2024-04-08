import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";

export type RepairScheduleWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  adminId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: JsonFilter;
  report?: JsonFilter;
  repairs?: RepairListRelationFilter;
};
