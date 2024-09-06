import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PersonTitle } from "../person/PersonTitle";

export const BankDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
