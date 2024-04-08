import { JsonValue } from "type-fest";
import { RepairSchedule } from "../repairSchedule/RepairSchedule";

export type Admin = {
  id: number;
  mayorId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors: JsonValue;
  resources: JsonValue;
  repairSchedules?: Array<RepairSchedule>;
};
