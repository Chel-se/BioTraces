import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SsnWhereInput = {
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  issuedDate?: DateTimeNullableFilter;
  numberField?: StringNullableFilter;
};
