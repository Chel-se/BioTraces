import { SortOrder } from "../../util/SortOrder";

export type SsnOrderByInput = {
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  issuedDate?: SortOrder;
  numberField?: SortOrder;
  updatedAt?: SortOrder;
};
