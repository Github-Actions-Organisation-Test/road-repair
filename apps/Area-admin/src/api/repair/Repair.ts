import { JsonValue } from "type-fest";
import { Area } from "../area/Area";
import { Supervisor } from "../supervisor/Supervisor";

export type Repair = {
  id: number;
  status?: "Pending" | "InProgress" | "Completed";
  priority?: "Low" | "Medium" | "High";
  assignedToId: number;
  repairScheduleId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints: JsonValue;
  resources: JsonValue;
  area?: Area | null;
  supervisors?: Supervisor | null;
};
