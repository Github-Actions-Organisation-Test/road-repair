import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { SUPERVISOR_TITLE_FIELD } from "../supervisor/SupervisorTitle";

export const RepairList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Repairs"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
