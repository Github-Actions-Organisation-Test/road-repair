import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ComplaintListRelationFilter } from "../complaint/ComplaintListRelationFilter";

export type UpdateWhereInput = {
  id?: IntFilter;
  time?: DateTimeFilter;
  reportId?: IntFilter;
  residents?: ResidentWhereUniqueInput;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  complaints?: ComplaintListRelationFilter;
};
