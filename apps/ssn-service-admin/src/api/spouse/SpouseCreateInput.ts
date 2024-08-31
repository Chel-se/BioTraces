import { ChildCreateNestedManyWithoutSpousesInput } from "./ChildCreateNestedManyWithoutSpousesInput";
import { MarriageCertificateCreateNestedManyWithoutSpousesInput } from "./MarriageCertificateCreateNestedManyWithoutSpousesInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SpouseCreateInput = {
  children?: ChildCreateNestedManyWithoutSpousesInput;
  marriageCertificates?: MarriageCertificateCreateNestedManyWithoutSpousesInput;
  person?: PersonWhereUniqueInput | null;
};
