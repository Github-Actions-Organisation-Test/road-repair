import { IntFilter } from "../../util/IntFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { SupervisorWhereUniqueInput } from "../supervisor/SupervisorWhereUniqueInput";

export type RepairWhereInput = {
  id?: IntFilter;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedToId?: IntFilter;
  repairScheduleId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: JsonFilter;
  resources?: JsonFilter;
  area?: AreaWhereUniqueInput;
  supervisors?: SupervisorWhereUniqueInput;
};
