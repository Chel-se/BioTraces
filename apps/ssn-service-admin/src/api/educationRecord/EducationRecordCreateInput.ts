import { BirthDetailsWhereUniqueInput } from "../birthDetails/BirthDetailsWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type EducationRecordCreateInput = {
  birthDetail?: BirthDetailsWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
