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

export const SupervisorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Supervisors"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
