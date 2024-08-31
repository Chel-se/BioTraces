import { BirthDetailsWhereUniqueInput } from "../birthDetails/BirthDetailsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type EducationRecordWhereInput = {
  birthDetail?: BirthDetailsWhereUniqueInput;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
};
