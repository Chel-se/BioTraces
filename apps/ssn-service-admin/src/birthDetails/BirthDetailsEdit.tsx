import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { EducationRecordTitle } from "../educationRecord/EducationRecordTitle";
import { HealthRecordTitle } from "../healthRecord/HealthRecordTitle";
import { PersonTitle } from "../person/PersonTitle";

export const BirthDetailsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="educationRecords"
          reference="EducationRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationRecordTitle} />
        </ReferenceArrayInput>
        <ReferenceInput
          source="healthRecord.id"
          reference="HealthRecord"
          label="healthRecord"
        >
          <SelectInput optionText={HealthRecordTitle} />
        </ReferenceInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
