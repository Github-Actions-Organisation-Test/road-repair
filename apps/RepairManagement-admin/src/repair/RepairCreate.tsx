import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceInput,
  DateTimeInput,
} from "react-admin";

import { RepairScheduleTitle } from "../repairSchedule/RepairScheduleTitle";

export const RepairCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <NumberInput step={1} label="Area ID" source="areaId" />
        <NumberInput step={1} label="Supervisors ID" source="supervisorsId" />
        <ReferenceInput
          source="repairSchedule.id"
          reference="RepairSchedule"
          label="Repair Schedule"
        >
          <SelectInput optionText={RepairScheduleTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <div />
        <div />
      </SimpleForm>
    </Create>
  );
};
