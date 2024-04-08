import { JsonValue } from "type-fest";

export type Update = {
  id: number;
  time: Date;
  reportId: number;
  residentsId: number | null;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  complaints: JsonValue;
};
