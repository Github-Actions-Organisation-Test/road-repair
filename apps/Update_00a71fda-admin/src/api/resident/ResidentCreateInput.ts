import { ComplaintCreateNestedManyWithoutResidentsInput } from "./ComplaintCreateNestedManyWithoutResidentsInput";
import { UpdateCreateNestedManyWithoutResidentsInput } from "./UpdateCreateNestedManyWithoutResidentsInput";

export type ResidentCreateInput = {
  areaId: number;
  userId: number;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutResidentsInput;
  updates?: UpdateCreateNestedManyWithoutResidentsInput;
};
