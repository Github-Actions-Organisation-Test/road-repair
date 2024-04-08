import { InputJsonValue } from "../../types";

export type UpdateUpdateInput = {
  time?: Date;
  reportId?: number;
  residentsId?: number | null;
  deletedAt?: Date | null;
  complaints?: InputJsonValue;
};
