import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PassportDetailTitle } from "../passportDetail/PassportDetailTitle";
import { PersonTitle } from "../person/PersonTitle";

export const TravelDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="passportDetail.id"
          reference="PassportDetail"
          label="passportDetail"
        >
          <SelectInput optionText={PassportDetailTitle} />
        </ReferenceInput>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
