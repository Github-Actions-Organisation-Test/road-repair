import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { MAYOR_TITLE_FIELD } from "../mayor/MayorTitle";

export const ReportShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
