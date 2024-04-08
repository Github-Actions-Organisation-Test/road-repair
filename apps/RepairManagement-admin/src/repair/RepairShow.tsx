import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { REPAIRSCHEDULE_TITLE_FIELD } from "../repairSchedule/RepairScheduleTitle";

export const RepairShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Priority" source="priority" />
        <TextField label="Assigned To ID" source="assignedToId" />
        <TextField label="Area ID" source="areaId" />
        <TextField label="Supervisors ID" source="supervisorsId" />
        <ReferenceField
          label="Repair Schedule"
          source="repairschedule.id"
          reference="RepairSchedule"
        >
          <TextField source={REPAIRSCHEDULE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Complaints" source="complaints" />
        <TextField label="Resources" source="resources" />
      </SimpleShowLayout>
    </Show>
  );
};
