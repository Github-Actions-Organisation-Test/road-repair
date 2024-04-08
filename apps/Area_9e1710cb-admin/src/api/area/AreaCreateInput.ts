import { InputJsonValue } from "../../types";
import { SupervisorCreateNestedManyWithoutAreasInput } from "./SupervisorCreateNestedManyWithoutAreasInput";
import { RepairCreateNestedManyWithoutAreasInput } from "./RepairCreateNestedManyWithoutAreasInput";

export type AreaCreateInput = {
  name: string;
  address: string;
  region: string;
  country: string;
  deletedAt?: Date | null;
  residents?: InputJsonValue;
  supervisors?: SupervisorCreateNestedManyWithoutAreasInput;
  complaint?: InputJsonValue;
  repair?: RepairCreateNestedManyWithoutAreasInput;
};
