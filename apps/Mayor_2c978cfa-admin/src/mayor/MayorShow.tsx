import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MAYOR_TITLE_FIELD } from "./MayorTitle";

export const MayorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="City" source="city" />
        <TextField label="User ID" source="userId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceManyField reference="Report" target="mayorId" label="Reports">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <TextField label="Repair Schedule ID" source="repairScheduleId" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Complaints" source="complaints" />
            <TextField label="Resources" source="resources" />
            <TextField label="Update" source="update" />
            <ReferenceField label="Mayor" source="mayor.id" reference="Mayor">
              <TextField source={MAYOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
