import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";

export type ComplaintWhereInput = {
  id?: IntFilter;
  road?: StringFilter;
  description?: StringFilter;
  subscription?: BooleanFilter;
  userId?: IntFilter;
  severity?: "Low" | "Medium" | "High";
  status?: "Pending" | "InProgress" | "Completed";
  repairId?: IntNullableFilter;
  reportId?: IntNullableFilter;
  updateId?: IntNullableFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  area?: AreaWhereUniqueInput;
  residents?: ResidentWhereUniqueInput;
};
