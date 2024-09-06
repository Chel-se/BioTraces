import { FamilyMemberUpdateManyWithoutChildrenInput } from "./FamilyMemberUpdateManyWithoutChildrenInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../spouse/SpouseWhereUniqueInput";

export type ChildUpdateInput = {
  familyMembers?: FamilyMemberUpdateManyWithoutChildrenInput;
  parentSpouse?: string | null;
  person?: PersonWhereUniqueInput | null;
  spouse?: SpouseWhereUniqueInput | null;
};
