import { SortOrder } from "../../util/SortOrder";

export type OtpOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  expiration?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  updatedAt?: SortOrder;
};
