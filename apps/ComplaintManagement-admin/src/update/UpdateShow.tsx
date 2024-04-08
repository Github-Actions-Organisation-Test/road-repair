import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const UpdateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Time" source="time" />
        <TextField label="Report ID" source="reportId" />
        <TextField label="Residents ID" source="residentsId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Complaints" source="complaints" />
      </SimpleShowLayout>
    </Show>
  );
};
