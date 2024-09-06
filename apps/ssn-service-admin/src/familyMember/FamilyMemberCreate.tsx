import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { ChildTitle } from "../child/ChildTitle";
import { PersonTitle } from "../person/PersonTitle";

export const FamilyMemberCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
