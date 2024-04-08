import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { ComplaintCreateNestedManyWithoutUpdatesInput } from "./ComplaintCreateNestedManyWithoutUpdatesInput";

export type UpdateCreateInput = {
  time: Date;
  reportId: number;
  residents?: ResidentWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintCreateNestedManyWithoutUpdatesInput;
};
