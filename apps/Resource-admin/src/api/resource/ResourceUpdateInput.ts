export type ResourceUpdateInput = {
  name?: string;
  quantity?: number;
  allocationId?: number;
  price?: number;
  supervisorsId?: number | null;
  adminId?: number | null;
  reportId?: number | null;
  deletedAt?: Date | null;
};
