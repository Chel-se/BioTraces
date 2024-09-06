import { FamilyMemberListRelationFilter } from "../familyMember/FamilyMemberListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type ChildWhereInput = {
  familyMembers?: FamilyMemberListRelationFilter;
  id?: StringFilter;
  parentSpouse?: StringNullableFilter;
  person?: PersonWhereUniqueInput;
  spouse?: SpouseWhereUniqueInput;
};
