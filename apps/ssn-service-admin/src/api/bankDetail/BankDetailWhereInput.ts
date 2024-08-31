import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type BankDetailWhereInput = {
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
};
