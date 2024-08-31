import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PASSPORTDETAIL_TITLE_FIELD } from "../passportDetail/PassportDetailTitle";
import { PERSON_TITLE_FIELD } from "../person/PersonTitle";

export const TravelDetailShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="passportDetail"
          source="passportdetail.id"
          reference="PassportDetail"
        >
          <TextField source={PASSPORTDETAIL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Person" source="person.id" reference="Person">
          <TextField source={PERSON_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
