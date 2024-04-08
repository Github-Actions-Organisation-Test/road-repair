import { Admin } from "../admin/Admin";
import { Report } from "../report/Report";

export type Mayor = {
  id: number;
  city: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  admin?: Array<Admin>;
  reports?: Array<Report>;
};
