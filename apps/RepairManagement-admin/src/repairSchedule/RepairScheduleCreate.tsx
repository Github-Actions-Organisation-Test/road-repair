import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";

export const RepairScheduleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <NumberInput step={1} label="Admin ID" source="adminId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <ReferenceArrayInput
          source="repairs"
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
