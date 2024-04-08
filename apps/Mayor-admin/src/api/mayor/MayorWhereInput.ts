import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { AdminListRelationFilter } from "../admin/AdminListRelationFilter";
import { ReportListRelationFilter } from "../report/ReportListRelationFilter";

export type MayorWhereInput = {
  id?: IntFilter;
  city?: StringFilter;
  userId?: IntFilter;
  createdAt?: DateTimeFilter;
  updatedAt?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  admin?: AdminListRelationFilter;
  reports?: ReportListRelationFilter;
};
