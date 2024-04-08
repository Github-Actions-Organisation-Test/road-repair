import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MayorTitle } from "../mayor/MayorTitle";

export const ReportCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <NumberInput
          step={1}
          label="Repair Schedule ID"
          source="repairScheduleId"
        />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <div />
        <ReferenceInput source="mayor.id" reference="Mayor" label="Mayor">
          <SelectInput optionText={MayorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
