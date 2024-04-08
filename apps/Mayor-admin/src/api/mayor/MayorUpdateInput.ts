import { AdminUpdateManyWithoutMayorsInput } from "./AdminUpdateManyWithoutMayorsInput";
import { ReportUpdateManyWithoutMayorsInput } from "./ReportUpdateManyWithoutMayorsInput";

export type MayorUpdateInput = {
  city?: string;
  userId?: number;
  deletedAt?: Date | null;
  admin?: AdminUpdateManyWithoutMayorsInput;
  reports?: ReportUpdateManyWithoutMayorsInput;
};
