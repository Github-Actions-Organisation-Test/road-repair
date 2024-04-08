import { RepairSchedule } from "../repairSchedule/RepairSchedule";
import { JsonValue } from "type-fest";

export type Repair = {
  id: number;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedToId: number;
  areaId: number;
  supervisorsId: number | null;
  repairSchedule?: RepairSchedule | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints: JsonValue;
  resources: JsonValue;
};
