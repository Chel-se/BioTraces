import { ChildWhereUniqueInput } from "../child/ChildWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type FamilyMemberCreateInput = {
  child?: ChildWhereUniqueInput | null;
  generationLevel?: number | null;
  parentId?: string | null;
  person?: PersonWhereUniqueInput | null;
};
