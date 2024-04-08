import { JsonValue } from "type-fest";
import { Mayor } from "../mayor/Mayor";

export type Admin = {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors: JsonValue;
  resources: JsonValue;
  repairSchedules: JsonValue;
  mayor?: Mayor | null;
};
