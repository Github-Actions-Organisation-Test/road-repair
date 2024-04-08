import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { RepairScheduleWhereUniqueInput } from "../repairSchedule/RepairScheduleWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type RepairWhereInput = {
  id?: IntFilter;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedToId?: IntFilter;
  areaId?: IntFilter;
  supervisorsId?: IntNullableFilter;
  repairSchedule?: RepairScheduleWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: JsonFilter;
  resources?: JsonFilter;
};
