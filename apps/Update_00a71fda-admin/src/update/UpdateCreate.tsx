import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";
import { ComplaintTitle } from "../complaint/ComplaintTitle";

export const UpdateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Time" source="time" />
        <NumberInput step={1} label="Report ID" source="reportId" />
        <ReferenceInput
          source="residents.id"
          reference="Resident"
          label="Residents"
        >
          <SelectInput optionText={ResidentTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="complaints"
          reference="Complaint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
