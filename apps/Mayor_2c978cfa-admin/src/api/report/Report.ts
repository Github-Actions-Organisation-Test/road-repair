import { JsonValue } from "type-fest";
import { Mayor } from "../mayor/Mayor";

export type Report = {
  id: number;
  time: Date;
  repairScheduleId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints: JsonValue;
  resources: JsonValue;
  update: JsonValue;
  mayor?: Mayor | null;
};
