import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <TextInput label="Street" source="street" />
        <TextInput label="ZipCode" source="zipCode" />
      </SimpleForm>
    </Edit>
  );
};
