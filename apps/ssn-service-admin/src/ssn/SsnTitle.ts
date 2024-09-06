import { Ssn as TSsn } from "../api/ssn/Ssn";

export const SSN_TITLE_FIELD = "numberField";

export const SsnTitle = (record: TSsn): string => {
  return record.numberField?.toString() || String(record.id);
};
