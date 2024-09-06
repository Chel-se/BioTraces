import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type MarriageCertificateUpdateInput = {
  person?: PersonWhereUniqueInput | null;
  spouse?: SpouseWhereUniqueInput | null;
};
