import { Report } from "../report/Report";

export type Mayor = {
  id: number;
  city: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  reports?: Array<Report>;
};
