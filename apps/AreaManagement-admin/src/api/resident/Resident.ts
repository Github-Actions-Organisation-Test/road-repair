import { Complaint } from "../complaint/Complaint";
import { JsonValue } from "type-fest";
import { Area } from "../area/Area";

export type Resident = {
  id: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
  updates: JsonValue;
  area?: Area | null;
};
