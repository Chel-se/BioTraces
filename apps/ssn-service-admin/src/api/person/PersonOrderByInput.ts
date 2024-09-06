import { SortOrder } from "../../util/SortOrder";

export type PersonOrderByInput = {
  birthdate?: SortOrder;
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  faceScan?: SortOrder;
  familyTree?: SortOrder;
  fingerPrintScan?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  ssnNumber?: SortOrder;
  updatedAt?: SortOrder;
};
