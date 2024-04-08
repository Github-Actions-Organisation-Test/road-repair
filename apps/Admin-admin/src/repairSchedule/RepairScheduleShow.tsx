import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RepairScheduleShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Time" source="time" />
        <TextField label="Admin ID" source="adminId" />
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
