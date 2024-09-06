import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PersonTitle } from "../person/PersonTitle";

export const OtpCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <DateTimeInput label="expiration" source="expiration" />
        <ReferenceInput source="person.id" reference="Person" label="person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
