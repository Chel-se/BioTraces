import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ChildTitle } from "../child/ChildTitle";
import { PersonTitle } from "../person/PersonTitle";

export const FamilyMemberEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="child.id" reference="Child" label="child">
          <SelectInput optionText={ChildTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="generationLevel"
          source="generationLevel"
        />
        <TextInput label="parentId" source="parentId" />
        <ReferenceInput source="person.id" reference="Person" label="person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
