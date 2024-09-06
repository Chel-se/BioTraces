import { FamilyMemberCreateNestedManyWithoutChildrenInput } from "./FamilyMemberCreateNestedManyWithoutChildrenInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type ChildCreateInput = {
  familyMembers?: FamilyMemberCreateNestedManyWithoutChildrenInput;
  parentSpouse?: string | null;
  person?: PersonWhereUniqueInput | null;
  spouse?: SpouseWhereUniqueInput | null;
};
