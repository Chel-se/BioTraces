import { BirthDetails as TBirthDetails } from "../api/birthDetails/BirthDetails";

export const BIRTHDETAILS_TITLE_FIELD = "id";

export const BirthDetailsTitle = (record: TBirthDetails): string => {
  return record.id?.toString() || String(record.id);
};
