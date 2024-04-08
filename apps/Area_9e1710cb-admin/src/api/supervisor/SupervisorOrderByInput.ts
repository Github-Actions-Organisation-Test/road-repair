import { SortOrder } from "../../util/SortOrder";

export type SupervisorOrderByInput = {
  id?: SortOrder;
  repairScheduleId?: SortOrder;
  userId?: SortOrder;
  adminId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  resources?: SortOrder;
  areaId?: SortOrder;
};
