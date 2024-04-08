import { SortOrder } from "../../util/SortOrder";

export type ResourceOrderByInput = {
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  allocationId?: SortOrder;
  price?: SortOrder;
  supervisorsId?: SortOrder;
  reportId?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  deletedAt?: SortOrder;
  adminId?: SortOrder;
};
