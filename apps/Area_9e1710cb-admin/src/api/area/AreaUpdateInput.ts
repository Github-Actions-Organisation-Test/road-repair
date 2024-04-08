import { InputJsonValue } from "../../types";
import { SupervisorUpdateManyWithoutAreasInput } from "./SupervisorUpdateManyWithoutAreasInput";
import { RepairUpdateManyWithoutAreasInput } from "./RepairUpdateManyWithoutAreasInput";

export type AreaUpdateInput = {
  name?: string;
  address?: string;
  region?: string;
  country?: string;
  deletedAt?: Date | null;
  residents?: InputJsonValue;
  supervisors?: SupervisorUpdateManyWithoutAreasInput;
  complaint?: InputJsonValue;
  repair?: RepairUpdateManyWithoutAreasInput;
};
