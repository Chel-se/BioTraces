import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BIRTHDETAILS_TITLE_FIELD } from "./BirthDetailsTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";
import { HEALTHRECORD_TITLE_FIELD } from "../healthRecord/HealthRecordTitle";

export const BirthDetailsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="healthRecord"
          source="healthrecord.id"
          reference="HealthRecord"
        >
          <TextField source={HEALTHRECORD_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EducationRecord"
          target="birthDetailId"
          label="EducationRecords"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="birthDetail"
              source="birthdetails.id"
              reference="BirthDetails"
            >
              <TextField source={BIRTHDETAILS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
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
