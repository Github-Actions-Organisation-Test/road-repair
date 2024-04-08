import { ResidentWhereUniqueInput } from "../resident/ResidentWhereUniqueInput";
import { ComplaintUpdateManyWithoutUpdatesInput } from "./ComplaintUpdateManyWithoutUpdatesInput";

export type UpdateUpdateInput = {
  time?: Date;
  reportId?: number;
  residents?: ResidentWhereUniqueInput | null;
  deletedAt?: Date | null;
  complaints?: ComplaintUpdateManyWithoutUpdatesInput;
};
