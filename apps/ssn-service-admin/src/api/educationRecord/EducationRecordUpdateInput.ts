import { BirthDetailsWhereUniqueInput } from "../birthDetails/BirthDetailsWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type EducationRecordUpdateInput = {
  birthDetail?: BirthDetailsWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
