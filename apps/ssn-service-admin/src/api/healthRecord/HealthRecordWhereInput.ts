import { BirthDetailsListRelationFilter } from "../birthDetails/BirthDetailsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type HealthRecordWhereInput = {
  birthDetailsItems?: BirthDetailsListRelationFilter;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
};
