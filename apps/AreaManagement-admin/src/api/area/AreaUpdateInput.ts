import { ResidentUpdateManyWithoutAreasInput } from "./ResidentUpdateManyWithoutAreasInput";
import { InputJsonValue } from "../../types";
import { ComplaintUpdateManyWithoutAreasInput } from "./ComplaintUpdateManyWithoutAreasInput";

export type AreaUpdateInput = {
  name?: string;
  address?: string;
  region?: string;
  country?: string;
  deletedAt?: Date | null;
  residents?: ResidentUpdateManyWithoutAreasInput;
  supervisors?: InputJsonValue;
  complaint?: ComplaintUpdateManyWithoutAreasInput;
  repair?: InputJsonValue;
};
