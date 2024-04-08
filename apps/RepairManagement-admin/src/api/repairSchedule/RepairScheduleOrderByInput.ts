import { SortOrder } from "../../util/SortOrder";

export type RepairScheduleOrderByInput = {
  id?: SortOrder;
  time?: SortOrder;
  adminId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  supervisors?: SortOrder;
  report?: SortOrder;
};
