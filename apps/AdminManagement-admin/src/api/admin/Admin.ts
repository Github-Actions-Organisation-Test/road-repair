import { JsonValue } from "type-fest";
import { Resource } from "../resource/Resource";

export type Admin = {
  id: number;
  mayorId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  supervisors: JsonValue;
  resources?: Array<Resource>;
  repairSchedules: JsonValue;
};
