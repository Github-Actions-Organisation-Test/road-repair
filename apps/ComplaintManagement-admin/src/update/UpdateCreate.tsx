import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const UpdateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <NumberInput step={1} label="Report ID" source="reportId" />
        <NumberInput step={1} label="Residents ID" source="residentsId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
      </SimpleForm>
    </Create>
  );
};
