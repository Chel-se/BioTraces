import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PersonTitle } from "../person/PersonTitle";
import { SpouseTitle } from "../spouse/SpouseTitle";

export const MarriageCertificateCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="person.id" reference="Person" label="Person">
          <SelectInput optionText={PersonTitle} />
        </ReferenceInput>
        <ReferenceInput source="spouse.id" reference="Spouse" label="Spouse">
          <SelectInput optionText={SpouseTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
