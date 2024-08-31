import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const AddressShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="City" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="State" source="state" />
        <TextField label="Street" source="street" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="ZipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
