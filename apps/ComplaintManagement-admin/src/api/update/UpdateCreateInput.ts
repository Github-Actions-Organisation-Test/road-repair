import { InputJsonValue } from "../../types";

export type UpdateCreateInput = {
  time: Date;
  reportId: number;
  residentsId?: number | null;
  deletedAt?: Date | null;
  complaints?: InputJsonValue;
};
