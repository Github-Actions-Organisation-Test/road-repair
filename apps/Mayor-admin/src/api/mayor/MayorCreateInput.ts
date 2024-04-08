import { AdminCreateNestedManyWithoutMayorsInput } from "./AdminCreateNestedManyWithoutMayorsInput";
import { ReportCreateNestedManyWithoutMayorsInput } from "./ReportCreateNestedManyWithoutMayorsInput";

export type MayorCreateInput = {
  city: string;
  userId: number;
  deletedAt?: Date | null;
  admin?: AdminCreateNestedManyWithoutMayorsInput;
  reports?: ReportCreateNestedManyWithoutMayorsInput;
};
