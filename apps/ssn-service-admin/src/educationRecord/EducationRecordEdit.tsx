import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { BirthDetailsTitle } from "../birthDetails/BirthDetailsTitle";
import { PersonTitle } from "../person/PersonTitle";

export const EducationRecordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
