import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { RepairScheduleListRelationFilter } from "../repairSchedule/RepairScheduleListRelationFilter";

export type AdminWhereInput = {
  id?: IntFilter;
  mayorId?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: JsonFilter;
  resources?: JsonFilter;
  repairSchedules?: RepairScheduleListRelationFilter;
};
