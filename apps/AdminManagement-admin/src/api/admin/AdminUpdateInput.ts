import { InputJsonValue } from "../../types";
import { ResourceUpdateManyWithoutAdminsInput } from "./ResourceUpdateManyWithoutAdminsInput";

export type AdminUpdateInput = {
  mayorId?: number;
  userId?: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: ResourceUpdateManyWithoutAdminsInput;
  repairSchedules?: InputJsonValue;
};
