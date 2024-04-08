import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { UPDATE_TITLE_FIELD } from "../update/UpdateTitle";
import { RESIDENT_TITLE_FIELD } from "./ResidentTitle";

export const ResidentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Area ID" source="areaId" />
        <TextField label="User ID" source="userId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceManyField
          reference="Complaint"
          target="residentsId"
          label="Complaints"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Road" source="road" />
            <TextField label="Description" source="description" />
            <BooleanField label="Subscription" source="subscription" />
            <TextField label="Area ID" source="areaId" />
            <TextField label="User ID" source="userId" />
            <TextField label="Severity" source="severity" />
            <TextField label="Status" source="status" />
            <TextField label="Repair ID" source="repairId" />
            <TextField label="Report ID" source="reportId" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
            <ReferenceField
              label="Update"
              source="update.id"
              reference="Update"
            >
              <TextField source={UPDATE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Residents"
              source="resident.id"
              reference="Resident"
            >
              <TextField source={RESIDENT_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Update"
          target="residentsId"
          label="Updates"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <TextField label="Time" source="time" />
            <TextField label="Report ID" source="reportId" />
            <ReferenceField
              label="Residents"
              source="resident.id"
              reference="Resident"
            >
              <TextField source={RESIDENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Deleted At" source="deletedAt" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
