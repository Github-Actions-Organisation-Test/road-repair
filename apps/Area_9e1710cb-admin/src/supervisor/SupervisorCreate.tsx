import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RepairTitle } from "../repair/RepairTitle";
import { AreaTitle } from "../area/AreaTitle";

export const SupervisorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="Repair Schedule ID"
          source="repairScheduleId"
        />
        <NumberInput step={1} label="User ID" source="userId" />
        <NumberInput step={1} label="Admin ID" source="adminId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="repairs"
          reference="Repair"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepairTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
