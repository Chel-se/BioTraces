import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PERSON_TITLE_FIELD } from "./PersonTitle";
import { HEALTHRECORD_TITLE_FIELD } from "../healthRecord/HealthRecordTitle";
import { SPOUSE_TITLE_FIELD } from "../spouse/SpouseTitle";
import { BIRTHDETAILS_TITLE_FIELD } from "../birthDetails/BirthDetailsTitle";
import { CHILD_TITLE_FIELD } from "../child/ChildTitle";
import { PASSPORTDETAIL_TITLE_FIELD } from "../passportDetail/PassportDetailTitle";

export const PersonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="birthdate" source="birthdate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateOfBirth" source="dateOfBirth" />
        <TextField label="faceScan" source="faceScan" />
        <TextField label="familyTree" source="familyTree" />
        <TextField label="fingerPrintScan" source="fingerPrintScan" />
        <TextField label="firstName" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="lastName" source="lastName" />
        <TextField label="ssnNumber" source="ssnNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BankDetail"
          target="personId"
          label="BankDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BirthDetails"
          target="personId"
          label="BirthDetailsItems"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="healthRecord"
              source="healthrecord.id"
              reference="HealthRecord"
            >
              <TextField source={HEALTHRECORD_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Child"
          target="personId"
          label="Children"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="parentSpouse" source="parentSpouse" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Spouse"
              source="spouse.id"
              reference="Spouse"
            >
              <TextField source={SPOUSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="EducationRecord"
          target="personId"
          label="EducationRecords"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="birthDetail"
              source="birthdetails.id"
              reference="BirthDetails"
            >
              <TextField source={BIRTHDETAILS_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="FamilyMember"
          target="personId"
          label="FamilyMembers"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="child" source="child.id" reference="Child">
              <TextField source={CHILD_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="generationLevel" source="generationLevel" />
            <TextField label="ID" source="id" />
            <TextField label="parentId" source="parentId" />
            <ReferenceField
              label="person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="HealthRecord"
          target="personId"
          label="HealthRecords"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarriageCertificate"
          target="personId"
          label="MarriageCertificates"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Spouse"
              source="spouse.id"
              reference="Spouse"
            >
              <TextField source={SPOUSE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Otp" target="personId" label="OTPS">
          <Datagrid rowClick="show">
            <TextField label="code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="expiration" source="expiration" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PassportDetail"
          target="personId"
          label="PassportDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Spouse"
          target="personId"
          label="Spouses"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="TravelDetail"
          target="personId"
          label="TravelDetails"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="passportDetail"
              source="passportdetail.id"
              reference="PassportDetail"
            >
              <TextField source={PASSPORTDETAIL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Person"
              source="person.id"
              reference="Person"
            >
              <TextField source={PERSON_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
