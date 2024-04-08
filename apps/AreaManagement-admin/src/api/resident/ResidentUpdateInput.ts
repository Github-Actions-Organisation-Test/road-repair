import { ComplaintUpdateManyWithoutResidentsInput } from "./ComplaintUpdateManyWithoutResidentsInput";
import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type ResidentUpdateInput = {
  userId?: number;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutResidentsInput;
  updates?: InputJsonValue;
  area?: AreaWhereUniqueInput | null;
};
