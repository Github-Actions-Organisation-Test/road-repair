import { ComplaintCreateNestedManyWithoutResidentsInput } from "./ComplaintCreateNestedManyWithoutResidentsInput";
import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";

export type ResidentCreateInput = {
  userId: number;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutResidentsInput;
  updates?: InputJsonValue;
  area?: AreaWhereUniqueInput | null;
};
