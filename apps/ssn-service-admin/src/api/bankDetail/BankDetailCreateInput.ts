import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type BankDetailCreateInput = {
  person?: PersonWhereUniqueInput | null;
};
