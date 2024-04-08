import { JsonValue } from "type-fest";
import { Repair } from "../repair/Repair";

export type RepairSchedule = {
  id: number;
  time: Date;
  adminId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors: JsonValue;
  report: JsonValue;
  repairs?: Array<Repair>;
};
