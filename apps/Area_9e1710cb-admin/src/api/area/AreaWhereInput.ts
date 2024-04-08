import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SupervisorListRelationFilter } from "../supervisor/SupervisorListRelationFilter";
import { RepairListRelationFilter } from "../repair/RepairListRelationFilter";

export type AreaWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  address?: StringFilter;
  region?: StringFilter;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  residents?: JsonFilter;
  supervisors?: SupervisorListRelationFilter;
  complaint?: JsonFilter;
  repair?: RepairListRelationFilter;
};
