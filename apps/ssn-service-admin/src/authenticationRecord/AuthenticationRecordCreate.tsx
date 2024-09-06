import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const AuthenticationRecordCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Status" source="status" />
        <DateTimeInput label="Timestamp" source="timestamp" />
      </SimpleForm>
    </Create>
  );
};
