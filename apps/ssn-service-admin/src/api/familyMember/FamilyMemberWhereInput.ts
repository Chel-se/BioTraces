import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type FamilyMemberWhereInput = {
  child?: ChildWhereUniqueInput;
  generationLevel?: IntNullableFilter;
  id?: StringFilter;
  parentId?: StringNullableFilter;
  person?: PersonWhereUniqueInput;
};
