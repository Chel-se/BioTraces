import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CHILD_TITLE_FIELD } from "./ChildTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { SPOUSE_TITLE_FIELD } from "../spouse/SpouseTitle";

export const ChildShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="parentSpouse" source="parentSpouse" />
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Spouse" source="spouse.id" reference="Spouse">
          <TextField source={SPOUSE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="FamilyMember"
          target="childId"
          label="FamilyMembers"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="child" source="child.id" reference="Child">
              <TextField source={CHILD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="generationLevel" source="generationLevel" />
            <TextField label="ID" source="id" />
            <TextField label="parentId" source="parentId" />
            <ReferenceField
              label="person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
