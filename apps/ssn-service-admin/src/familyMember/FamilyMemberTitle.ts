import { FamilyMember as TFamilyMember } from "../api/familyMember/FamilyMember";

export const FAMILYMEMBER_TITLE_FIELD = "parentId";

export const FamilyMemberTitle = (record: TFamilyMember): string => {
  return record.parentId?.toString() || String(record.id);
};
