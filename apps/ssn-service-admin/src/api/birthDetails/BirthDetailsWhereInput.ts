import { EducationRecordListRelationFilter } from "../educationRecord/EducationRecordListRelationFilter";
import { HealthRecordWhereUniqueInput } from "../healthRecord/HealthRecordWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type BirthDetailsWhereInput = {
  educationRecords?: EducationRecordListRelationFilter;
  healthRecord?: HealthRecordWhereUniqueInput;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
};
