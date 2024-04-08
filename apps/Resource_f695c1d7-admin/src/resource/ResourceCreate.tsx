import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput step={1} label="Allocation ID" source="allocationId" />
        <NumberInput step={1} label="Price" source="price" />
        <NumberInput step={1} label="Supervisors ID" source="supervisorsId" />
        <NumberInput step={1} label="Admin ID" source="adminId" />
        <NumberInput step={1} label="Report ID" source="reportId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
      </SimpleForm>
    </Create>
  );
};
