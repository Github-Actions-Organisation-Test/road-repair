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

import { AREA_TITLE_FIELD } from "./AreaTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";

export const AreaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Address" source="address" />
        <TextField label="Region" source="region" />
        <TextField label="Country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Residents" source="residents" />
        <TextField label="Complaint" source="complaint" />
        <ReferenceManyField
          reference="Supervisor"
          target="areaId"
          label="Supervisors"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Repair Schedule ID" source="repairScheduleId" />
            <TextField label="User ID" source="userId" />
            <TextField label="Admin ID" source="adminId" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Resources" source="resources" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Repair" target="areaId" label="Repairs">
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Priority" source="priority" />
            <TextField label="Assigned To ID" source="assignedToId" />
            <TextField label="Repair Schedule ID" source="repairScheduleId" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Complaints" source="complaints" />
            <TextField label="Resources" source="resources" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Supervisors"
              source="supervisor.id"
              reference="Supervisor"
            >
              <TextField source={SUPERVISOR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
