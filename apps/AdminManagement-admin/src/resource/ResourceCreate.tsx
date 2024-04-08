import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";

export const ResourceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput step={1} label="Allocation ID" source="allocationId" />
        <NumberInput step={1} label="Price" source="price" />
        <NumberInput step={1} label="Supervisors ID" source="supervisorsId" />
        <NumberInput step={1} label="Report ID" source="reportId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput source="admin.id" reference="Admin" label="Admin">
          <SelectInput optionText={AdminTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
