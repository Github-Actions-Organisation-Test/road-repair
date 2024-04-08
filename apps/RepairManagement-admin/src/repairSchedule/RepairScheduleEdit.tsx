import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";

export const RepairScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
