import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const SsnEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ExpirationDate" source="expirationDate" />
        <DateTimeInput label="IssuedDate" source="issuedDate" />
        <TextInput label="Number" source="numberField" />
      </SimpleForm>
    </Edit>
  );
};
