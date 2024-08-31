import { ChildUpdateManyWithoutSpousesInput } from "./ChildUpdateManyWithoutSpousesInput";
import { MarriageCertificateUpdateManyWithoutSpousesInput } from "./MarriageCertificateUpdateManyWithoutSpousesInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SpouseUpdateInput = {
  children?: ChildUpdateManyWithoutSpousesInput;
  marriageCertificates?: MarriageCertificateUpdateManyWithoutSpousesInput;
  person?: PersonWhereUniqueInput | null;
};
