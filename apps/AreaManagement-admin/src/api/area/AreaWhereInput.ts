import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ResidentListRelationFilter } from "../resident/ResidentListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";

export type AreaWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  address?: StringFilter;
  region?: StringFilter;
  country?: StringFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  residents?: ResidentListRelationFilter;
  supervisors?: JsonFilter;
  complaint?: ComplaintListRelationFilter;
  repair?: JsonFilter;
};
