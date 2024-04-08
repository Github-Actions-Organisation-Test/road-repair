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

import { ADMIN_TITLE_FIELD } from "./AdminTitle";

export const AdminShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Mayor ID" source="mayorId" />
        <TextField label="User ID" source="userId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Supervisors" source="supervisors" />
        <TextField label="Resources" source="resources" />
        <ReferenceManyField
          reference="RepairSchedule"
          target="AdminId"
          label="RepairSchedules"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <ReferenceField label="Admin" source="admin.id" reference="Admin">
              <TextField source={ADMIN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Supervisors" source="supervisors" />
            <TextField label="Repairs" source="repairs" />
            <TextField label="Report" source="report" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
