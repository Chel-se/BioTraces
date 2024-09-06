import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  city?: StringNullableFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
  street?: StringNullableFilter;
  zipCode?: StringNullableFilter;
};
