import { ReportCreateNestedManyWithoutMayorsInput } from "./ReportCreateNestedManyWithoutMayorsInput";

export type MayorCreateInput = {
  city: string;
  userId: number;
  deletedAt?: Date | null;
  reports?: ReportCreateNestedManyWithoutMayorsInput;
};
