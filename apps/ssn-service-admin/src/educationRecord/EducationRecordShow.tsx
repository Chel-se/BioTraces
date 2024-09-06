import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { BIRTHDETAILS_TITLE_FIELD } from "../birthDetails/BirthDetailsTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";

export const EducationRecordShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="birthDetail"
          source="birthdetails.id"
          reference="BirthDetails"
        >
          <TextField source={BIRTHDETAILS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
