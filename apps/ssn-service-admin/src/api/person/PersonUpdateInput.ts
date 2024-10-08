import { BankDetailUpdateManyWithoutPeopleInput } from "./BankDetailUpdateManyWithoutPeopleInput";
import { BirthDetailsUpdateManyWithoutPeopleInput } from "./BirthDetailsUpdateManyWithoutPeopleInput";
import { ChildUpdateManyWithoutPeopleInput } from "./ChildUpdateManyWithoutPeopleInput";
import { EducationRecordUpdateManyWithoutPeopleInput } from "./EducationRecordUpdateManyWithoutPeopleInput";
import { InputJsonValue } from "../../types";
import { FamilyMemberUpdateManyWithoutPeopleInput } from "./FamilyMemberUpdateManyWithoutPeopleInput";
import { HealthRecordUpdateManyWithoutPeopleInput } from "./HealthRecordUpdateManyWithoutPeopleInput";
import { MarriageCertificateUpdateManyWithoutPeopleInput } from "./MarriageCertificateUpdateManyWithoutPeopleInput";
import { OtpUpdateManyWithoutPeopleInput } from "./OtpUpdateManyWithoutPeopleInput";
import { PassportDetailUpdateManyWithoutPeopleInput } from "./PassportDetailUpdateManyWithoutPeopleInput";
import { SpouseUpdateManyWithoutPeopleInput } from "./SpouseUpdateManyWithoutPeopleInput";
import { TravelDetailUpdateManyWithoutPeopleInput } from "./TravelDetailUpdateManyWithoutPeopleInput";

export type PersonUpdateInput = {
  bankDetails?: BankDetailUpdateManyWithoutPeopleInput;
  birthDetailsItems?: BirthDetailsUpdateManyWithoutPeopleInput;
  birthdate?: Date | null;
  children?: ChildUpdateManyWithoutPeopleInput;
  dateOfBirth?: Date | null;
  educationRecords?: EducationRecordUpdateManyWithoutPeopleInput;
  faceScan?: InputJsonValue;
  familyMembers?: FamilyMemberUpdateManyWithoutPeopleInput;
  familyTree?: InputJsonValue;
  fingerPrintScan?: InputJsonValue;
  firstName?: string | null;
  healthRecords?: HealthRecordUpdateManyWithoutPeopleInput;
  lastName?: string | null;
  marriageCertificates?: MarriageCertificateUpdateManyWithoutPeopleInput;
  otps?: OtpUpdateManyWithoutPeopleInput;
  passportDetails?: PassportDetailUpdateManyWithoutPeopleInput;
  spouses?: SpouseUpdateManyWithoutPeopleInput;
  ssnNumber?: string | null;
  travelDetails?: TravelDetailUpdateManyWithoutPeopleInput;
};
