import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type OtpWhereInput = {
  code?: StringNullableFilter;
  expiration?: DateTimeNullableFilter;
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
};
