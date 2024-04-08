export type Resource = {
  id: number;
  name: string;
  quantity: number;
  allocationId: number;
  price: number;
  supervisorsId: number | null;
  adminId: number | null;
  reportId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
