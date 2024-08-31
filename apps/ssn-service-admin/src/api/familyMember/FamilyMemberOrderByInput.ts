import { SortOrder } from "../../util/SortOrder";

export type FamilyMemberOrderByInput = {
  childId?: SortOrder;
  createdAt?: SortOrder;
  generationLevel?: SortOrder;
  id?: SortOrder;
  parentId?: SortOrder;
  personId?: SortOrder;
  updatedAt?: SortOrder;
};
