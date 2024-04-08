import { SortOrder } from "../../util/SortOrder";

export type AdminOrderByInput = {
  id?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  supervisors?: SortOrder;
  resources?: SortOrder;
  repairSchedules?: SortOrder;
  mayorId?: SortOrder;
};
