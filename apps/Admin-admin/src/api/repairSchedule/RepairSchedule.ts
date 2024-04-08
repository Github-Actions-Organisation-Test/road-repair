import { JsonValue } from "type-fest";

export type RepairSchedule = {
  id: number;
  time: Date;
  adminId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors: JsonValue;
  repairs: JsonValue;
  report: JsonValue;
};
