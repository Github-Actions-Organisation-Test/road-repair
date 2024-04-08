import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const RepairScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <NumberInput step={1} label="Admin ID" source="adminId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
