import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BirthDetailsTitle } from "../birthDetails/BirthDetailsTitle";
import { PersonTitle } from "../person/PersonTitle";

export const EducationRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="birthDetail.id"
          reference="BirthDetails"
          label="birthDetail"
        >
          <SelectInput optionText={BirthDetailsTitle} />
        </ReferenceInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
