import { FamilyMember } from "../familyMember/FamilyMember";
import { Person } from "../person/Person";
import { Spouse } from "../spouse/Spouse";

export type Child = {
  createdAt: Date;
  familyMembers?: Array<FamilyMember>;
  id: string;
  parentSpouse: string | null;
  person?: Person | null;
  spouse?: Spouse | null;
  updatedAt: Date;
};
