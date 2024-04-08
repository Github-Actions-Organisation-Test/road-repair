import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ResidentTitle } from "../resident/ResidentTitle";
import { ComplaintTitle } from "../complaint/ComplaintTitle";

export const UpdateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
