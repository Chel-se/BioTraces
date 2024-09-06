import { PassportDetail as TPassportDetail } from "../api/passportDetail/PassportDetail";

export const PASSPORTDETAIL_TITLE_FIELD = "id";

export const PassportDetailTitle = (record: TPassportDetail): string => {
  return record.id?.toString() || String(record.id);
};
