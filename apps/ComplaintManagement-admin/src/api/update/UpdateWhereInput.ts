import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UpdateWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  reportId?: IntFilter;
  residentsId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: JsonFilter;
};
