import { SortOrder } from "../../util/SortOrder";

export type ResidentOrderByInput = {
  id?: SortOrder;
  userId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  updates?: SortOrder;
  areaId?: SortOrder;
};
