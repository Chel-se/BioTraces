import { EducationRecordCreateNestedManyWithoutBirthDetailsItemsInput } from "./EducationRecordCreateNestedManyWithoutBirthDetailsItemsInput";
import { HealthRecordWhereUniqueInput } from "../healthRecord/HealthRecordWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type BirthDetailsCreateInput = {
  educationRecords?: EducationRecordCreateNestedManyWithoutBirthDetailsItemsInput;
  healthRecord?: HealthRecordWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
