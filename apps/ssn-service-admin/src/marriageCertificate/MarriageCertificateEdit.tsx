import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PersonTitle } from "../person/PersonTitle";
import { SpouseTitle } from "../spouse/SpouseTitle";

export const MarriageCertificateEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <ReferenceInput source="spouse.id" reference="Spouse" label="Spouse">
          <SelectInput optionText={SpouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
