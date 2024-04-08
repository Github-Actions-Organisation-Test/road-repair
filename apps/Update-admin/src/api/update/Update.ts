import { Resident } from "../resident/Resident";
import { Complaint } from "../complaint/Complaint";

export type Update = {
  id: number;
  time: Date;
  reportId: number;
  residents?: Resident | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
};
