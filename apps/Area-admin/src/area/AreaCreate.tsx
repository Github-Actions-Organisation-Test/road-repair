import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SupervisorTitle } from "../supervisor/SupervisorTitle";
import { RepairTitle } from "../repair/RepairTitle";

export const AreaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Name" source="name" />
        <TextInput label="Address" source="address" />
        <TextInput label="Region" source="region" />
        <TextInput label="Country" source="country" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <ReferenceArrayInput
          source="supervisors"
          reference="Supervisor"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SupervisorTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="repair"
          reference="Repair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepairTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
