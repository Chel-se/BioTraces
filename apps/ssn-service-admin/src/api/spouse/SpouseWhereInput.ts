import { ChildListRelationFilter } from "../child/ChildListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { MarriageCertificateListRelationFilter } from "../marriageCertificate/MarriageCertificateListRelationFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type SpouseWhereInput = {
  children?: ChildListRelationFilter;
  id?: StringFilter;
  marriageCertificates?: MarriageCertificateListRelationFilter;
  person?: PersonWhereUniqueInput;
};
