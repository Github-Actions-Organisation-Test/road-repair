import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ComplaintTitle } from "../complaint/ComplaintTitle";
import { UpdateTitle } from "../update/UpdateTitle";

export const ResidentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Area ID" source="areaId" />
        <NumberInput step={1} label="User ID" source="userId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceArrayInput
          source="complaints"
          reference="Complaint"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplaintTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="updates"
          reference="Update"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UpdateTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
