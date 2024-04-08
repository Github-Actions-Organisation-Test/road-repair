import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type ResidentWhereInput = {
  id?: IntFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: ComplaintListRelationFilter;
  updates?: JsonFilter;
  area?: AreaWhereUniqueInput;
};
