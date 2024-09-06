import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BankDetailTitle } from "../bankDetail/BankDetailTitle";
import { BirthDetailsTitle } from "../birthDetails/BirthDetailsTitle";
import { ChildTitle } from "../child/ChildTitle";
import { EducationRecordTitle } from "../educationRecord/EducationRecordTitle";
import { FamilyMemberTitle } from "../familyMember/FamilyMemberTitle";
import { HealthRecordTitle } from "../healthRecord/HealthRecordTitle";
import { MarriageCertificateTitle } from "../marriageCertificate/MarriageCertificateTitle";
import { OtpTitle } from "../otp/OtpTitle";
import { PassportDetailTitle } from "../passportDetail/PassportDetailTitle";
import { SpouseTitle } from "../spouse/SpouseTitle";
import { TravelDetailTitle } from "../travelDetail/TravelDetailTitle";

export const PersonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="bankDetails"
          reference="BankDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BankDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="birthDetailsItems"
          reference="BirthDetails"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BirthDetailsTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="birthdate" source="birthdate" />
        <ReferenceArrayInput
          source="children"
          reference="Child"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChildTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="dateOfBirth" source="dateOfBirth" />
        <ReferenceArrayInput
          source="educationRecords"
          reference="EducationRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EducationRecordTitle} />
        </ReferenceArrayInput>
        <div />
        <ReferenceArrayInput
          source="familyMembers"
          reference="FamilyMember"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FamilyMemberTitle} />
        </ReferenceArrayInput>
        <div />
        <div />
        <TextInput label="firstName" source="firstName" />
        <ReferenceArrayInput
          source="healthRecords"
          reference="HealthRecord"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HealthRecordTitle} />
        </ReferenceArrayInput>
        <TextInput label="lastName" source="lastName" />
        <ReferenceArrayInput
          source="marriageCertificates"
          reference="MarriageCertificate"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MarriageCertificateTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="otps"
          reference="Otp"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OtpTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="passportDetails"
          reference="PassportDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PassportDetailTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="spouses"
          reference="Spouse"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SpouseTitle} />
        </ReferenceArrayInput>
        <TextInput label="ssnNumber" source="ssnNumber" />
        <ReferenceArrayInput
          source="travelDetails"
          reference="TravelDetail"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TravelDetailTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
