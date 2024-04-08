import { Admin } from "../admin/Admin";

export type Resource = {
  id: number;
  name: string;
  quantity: number;
  allocationId: number;
  price: number;
  supervisorsId: number | null;
  reportId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  admin?: Admin | null;
};
