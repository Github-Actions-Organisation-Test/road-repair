import { SortOrder } from "../../util/SortOrder";

export type ReportOrderByInput = {
  id?: SortOrder;
  time?: SortOrder;
  repairScheduleId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  complaints?: SortOrder;
  resources?: SortOrder;
  update?: SortOrder;
  mayorId?: SortOrder;
};
