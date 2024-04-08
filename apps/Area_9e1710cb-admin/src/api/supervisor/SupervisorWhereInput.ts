import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type SupervisorWhereInput = {
  id?: IntFilter;
  repairScheduleId?: IntNullableFilter;
  userId?: IntFilter;
  adminId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  repairs?: RepairListRelationFilter;
  resources?: JsonFilter;
  area?: AreaWhereUniqueInput;
};
