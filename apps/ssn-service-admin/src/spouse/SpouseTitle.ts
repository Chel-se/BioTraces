import { Spouse as TSpouse } from "../api/spouse/Spouse";

export const SPOUSE_TITLE_FIELD = "id";

export const SpouseTitle = (record: TSpouse): string => {
  return record.id?.toString() || String(record.id);
};
