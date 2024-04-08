import { ReportUpdateManyWithoutMayorsInput } from "./ReportUpdateManyWithoutMayorsInput";

export type MayorUpdateInput = {
  city?: string;
  userId?: number;
  deletedAt?: Date | null;
  reports?: ReportUpdateManyWithoutMayorsInput;
};
