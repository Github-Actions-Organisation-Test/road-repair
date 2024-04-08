import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { ResidentTitle } from "../resident/ResidentTitle";

export const ComplaintCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Road" source="road" />
        <TextInput label="Description" source="description" />
        <BooleanInput label="Subscription" source="subscription" />
        <NumberInput step={1} label="User ID" source="userId" />
        <SelectInput
          source="severity"
          label="Severity"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "Pending", value: "Pending" },
            { label: "InProgress", value: "InProgress" },
            { label: "Completed", value: "Completed" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Repair ID" source="repairId" />
        <NumberInput step={1} label="Report ID" source="reportId" />
        <NumberInput step={1} label="Update ID" source="updateId" />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="residents.id"
          reference="Resident"
          label="Residents"
        >
          <SelectInput optionText={ResidentTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
