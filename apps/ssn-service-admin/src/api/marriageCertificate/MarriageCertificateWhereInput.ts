import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type MarriageCertificateWhereInput = {
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
  spouse?: SpouseWhereUniqueInput;
};
