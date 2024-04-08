import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { SupervisorTitle } from "../supervisor/SupervisorTitle";

export const RepairEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <SelectInput
          source="priority"
          label="Priority"
          choices={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Assigned To ID" source="assignedToId" />
        <NumberInput
          step={1}
          label="Repair Schedule ID"
          source="repairScheduleId"
        />
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="supervisors.id"
          reference="Supervisor"
          label="Supervisors"
        >
          <SelectInput optionText={SupervisorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
