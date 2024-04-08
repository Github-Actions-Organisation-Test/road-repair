import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { RESIDENT_TITLE_FIELD } from "../resident/ResidentTitle";

export const ComplaintList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Complaints"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <TextField label="Road" source="road" />
        <TextField label="Description" source="description" />
        <BooleanField label="Subscription" source="subscription" />
        <TextField label="User ID" source="userId" />
        <TextField label="Severity" source="severity" />
        <TextField label="Status" source="status" />
        <TextField label="Repair ID" source="repairId" />
        <TextField label="Report ID" source="reportId" />
        <TextField label="Update ID" source="updateId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Residents"
          source="resident.id"
          reference="Resident"
        >
          <TextField source={RESIDENT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
