import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ResourceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Quantity" source="quantity" />
        <TextField label="Allocation ID" source="allocationId" />
        <TextField label="Price" source="price" />
        <TextField label="Supervisors ID" source="supervisorsId" />
        <TextField label="Admin ID" source="adminId" />
        <TextField label="Report ID" source="reportId" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Deleted At" source="deletedAt" />
      </SimpleShowLayout>
    </Show>
  );
};
