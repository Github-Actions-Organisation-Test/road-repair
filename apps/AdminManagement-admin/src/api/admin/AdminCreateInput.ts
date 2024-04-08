import { InputJsonValue } from "../../types";
import { ResourceCreateNestedManyWithoutAdminsInput } from "./ResourceCreateNestedManyWithoutAdminsInput";

export type AdminCreateInput = {
  mayorId: number;
  userId: number;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  resources?: ResourceCreateNestedManyWithoutAdminsInput;
  repairSchedules?: InputJsonValue;
};
