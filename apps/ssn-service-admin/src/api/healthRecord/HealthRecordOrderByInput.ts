import { SortOrder } from "../../util/SortOrder";

export type HealthRecordOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  personId?: SortOrder;
  updatedAt?: SortOrder;
};
