import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ResourceListRelationFilter } from "../resource/ResourceListRelationFilter";

export type AdminWhereInput = {
  id?: IntFilter;
  mayorId?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  supervisors?: JsonFilter;
  resources?: ResourceListRelationFilter;
  repairSchedules?: JsonFilter;
};
