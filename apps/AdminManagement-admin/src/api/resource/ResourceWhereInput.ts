import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";

export type ResourceWhereInput = {
  id?: IntFilter;
  name?: StringFilter;
  quantity?: IntFilter;
  allocationId?: IntFilter;
  price?: IntFilter;
  supervisorsId?: IntNullableFilter;
  reportId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  admin?: AdminWhereUniqueInput;
};
