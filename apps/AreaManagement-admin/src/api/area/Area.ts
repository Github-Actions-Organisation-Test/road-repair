import { Resident } from "../resident/Resident";
import { JsonValue } from "type-fest";
import { Complaint } from "../complaint/Complaint";

export type Area = {
  id: number;
  name: string;
  address: string;
  region: string;
  country: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  residents?: Array<Resident>;
  supervisors: JsonValue;
  complaint?: Array<Complaint>;
  repair: JsonValue;
};
