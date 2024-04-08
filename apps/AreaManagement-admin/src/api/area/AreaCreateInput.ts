import { ResidentCreateNestedManyWithoutAreasInput } from "./ResidentCreateNestedManyWithoutAreasInput";
import { InputJsonValue } from "../../types";
import { ComplaintCreateNestedManyWithoutAreasInput } from "./ComplaintCreateNestedManyWithoutAreasInput";

export type AreaCreateInput = {
  name: string;
  address: string;
  region: string;
  country: string;
  deletedAt?: Date | null;
  residents?: ResidentCreateNestedManyWithoutAreasInput;
  supervisors?: InputJsonValue;
  complaint?: ComplaintCreateNestedManyWithoutAreasInput;
  repair?: InputJsonValue;
};
