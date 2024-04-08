import { JsonValue } from "type-fest";
import { Supervisor } from "../supervisor/Supervisor";
import { Repair } from "../repair/Repair";

export type Area = {
  id: number;
  name: string;
  address: string;
  region: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  residents: JsonValue;
  supervisors?: Array<Supervisor>;
  complaint: JsonValue;
  repair?: Array<Repair>;
};
