import { SortOrder } from "../../util/SortOrder";

export type ComplaintOrderByInput = {
  id?: SortOrder;
  road?: SortOrder;
  description?: SortOrder;
  subscription?: SortOrder;
  areaId?: SortOrder;
  userId?: SortOrder;
  severity?: SortOrder;
  status?: SortOrder;
  repairId?: SortOrder;
  reportId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  updateId?: SortOrder;
  residentsId?: SortOrder;
};
