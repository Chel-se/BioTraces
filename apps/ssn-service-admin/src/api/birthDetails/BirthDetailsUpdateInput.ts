import { EducationRecordUpdateManyWithoutBirthDetailsItemsInput } from "./EducationRecordUpdateManyWithoutBirthDetailsItemsInput";
import { HealthRecordWhereUniqueInput } from "../healthRecord/HealthRecordWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type BirthDetailsUpdateInput = {
  educationRecords?: EducationRecordUpdateManyWithoutBirthDetailsItemsInput;
  healthRecord?: HealthRecordWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
