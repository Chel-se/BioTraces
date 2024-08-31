import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type MarriageCertificateCreateInput = {
  person?: PersonWhereUniqueInput | null;
  spouse?: SpouseWhereUniqueInput | null;
};
