import { SortOrder } from "../../util/SortOrder";

export type RepairOrderByInput = {
  id?: SortOrder;
  status?: SortOrder;
  priority?: SortOrder;
  assignedToId?: SortOrder;
  repairScheduleId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  complaints?: SortOrder;
  resources?: SortOrder;
  areaId?: SortOrder;
  supervisorsId?: SortOrder;
};
