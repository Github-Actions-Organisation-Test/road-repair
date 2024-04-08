import { Repair } from "../repair/Repair";
import { JsonValue } from "type-fest";
import { Area } from "../area/Area";

export type Supervisor = {
  id: number;
  repairScheduleId: number | null;
  userId: number;
  adminId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  repairs?: Array<Repair>;
  resources: JsonValue;
  area?: Area | null;
};
