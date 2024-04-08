import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { RepairScheduleTitle } from "../repairSchedule/RepairScheduleTitle";

export const AdminCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Mayor ID" source="mayorId" />
        <NumberInput step={1} label="User ID" source="userId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <ReferenceArrayInput
          source="repairSchedules"
          reference="RepairSchedule"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={RepairScheduleTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
