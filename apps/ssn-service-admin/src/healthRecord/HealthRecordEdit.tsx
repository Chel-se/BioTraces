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

import { BirthDetailsTitle } from "../birthDetails/BirthDetailsTitle";
import { PersonTitle } from "../person/PersonTitle";

export const HealthRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="birthDetailsItems"
          reference="BirthDetails"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BirthDetailsTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
