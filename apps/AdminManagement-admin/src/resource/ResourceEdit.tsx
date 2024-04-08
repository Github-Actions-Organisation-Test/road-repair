import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AdminTitle } from "../admin/AdminTitle";

export const ResourceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
