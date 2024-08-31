import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FamilyMemberTitle } from "../familyMember/FamilyMemberTitle";
import { PersonTitle } from "../person/PersonTitle";
import { SpouseTitle } from "../spouse/SpouseTitle";

export const ChildEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="familyMembers"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <TextInput label="parentSpouse" source="parentSpouse" />
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <ReferenceInput source="spouse.id" reference="Spouse" label="Spouse">
          <SelectInput optionText={SpouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
