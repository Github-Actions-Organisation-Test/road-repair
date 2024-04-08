import { ComplaintUpdateManyWithoutResidentsInput } from "./ComplaintUpdateManyWithoutResidentsInput";
import { UpdateUpdateManyWithoutResidentsInput } from "./UpdateUpdateManyWithoutResidentsInput";

export type ResidentUpdateInput = {
  areaId?: number;
  userId?: number;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutResidentsInput;
  updates?: UpdateUpdateManyWithoutResidentsInput;
};
