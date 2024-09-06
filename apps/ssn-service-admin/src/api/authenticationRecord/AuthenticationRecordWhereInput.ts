import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AuthenticationRecordWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
