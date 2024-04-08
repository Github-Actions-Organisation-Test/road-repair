import { AdminWhereUniqueInput } from "../admin/AdminWhereUniqueInput";

export type ResourceCreateInput = {
  name: string;
  quantity: number;
  allocationId: number;
  price: number;
  supervisorsId?: number | null;
  reportId?: number | null;
  deletedAt?: Date | null;
  admin?: AdminWhereUniqueInput | null;
};
