import { Complaint } from "../complaint/Complaint";
import { Update } from "../update/Update";

export type Resident = {
  id: number;
  areaId: number;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints?: Array<Complaint>;
  updates?: Array<Update>;
};
