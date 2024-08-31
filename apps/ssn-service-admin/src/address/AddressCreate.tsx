import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <TextInput label="ZipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
