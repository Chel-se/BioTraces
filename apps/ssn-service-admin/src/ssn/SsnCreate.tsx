import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SsnCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ExpirationDate" source="expirationDate" />
        <DateTimeInput label="IssuedDate" source="issuedDate" />
        <TextInput label="Number" source="numberField" />
      </SimpleForm>
    </Create>
  );
};
