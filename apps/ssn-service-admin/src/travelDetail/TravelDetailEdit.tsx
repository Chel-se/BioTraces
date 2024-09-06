import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PassportDetailTitle } from "../passportDetail/PassportDetailTitle";
import { PersonTitle } from "../person/PersonTitle";

export const TravelDetailEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
