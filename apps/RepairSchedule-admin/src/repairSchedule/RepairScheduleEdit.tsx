import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { AdminTitle } from "../admin/AdminTitle";

export const RepairScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <div />
      </SimpleForm>
    </Edit>
  );
};
