import { SortOrder } from "../../util/SortOrder";

export type ChildOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  parentSpouse?: SortOrder;
  personId?: SortOrder;
  spouseId?: SortOrder;
  updatedAt?: SortOrder;
};
