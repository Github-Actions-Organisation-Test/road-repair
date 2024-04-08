import { InputJsonValue } from "../../types";

export type RepairScheduleUpdateInput = {
  time?: Date;
  adminId?: number | null;
  deletedAt?: Date | null;
  supervisors?: InputJsonValue;
  repairs?: InputJsonValue;
  report?: InputJsonValue;
};
