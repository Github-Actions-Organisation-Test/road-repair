import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { ADMIN_TITLE_FIELD } from "../admin/AdminTitle";

export const RepairScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
