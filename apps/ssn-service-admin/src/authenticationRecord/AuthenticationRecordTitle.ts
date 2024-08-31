import { AuthenticationRecord as TAuthenticationRecord } from "../api/authenticationRecord/AuthenticationRecord";

export const AUTHENTICATIONRECORD_TITLE_FIELD = "status";

export const AuthenticationRecordTitle = (
  record: TAuthenticationRecord
): string => {
  return record.status?.toString() || String(record.id);
};
