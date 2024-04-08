import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResourceWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  quantity?: IntFilter;
  allocationId?: IntFilter;
  price?: IntFilter;
  supervisorsId?: IntNullableFilter;
  adminId?: IntNullableFilter;
  reportId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
};
