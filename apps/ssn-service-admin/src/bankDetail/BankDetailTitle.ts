import { BankDetail as TBankDetail } from "../api/bankDetail/BankDetail";

export const BANKDETAIL_TITLE_FIELD = "id";

export const BankDetailTitle = (record: TBankDetail): string => {
  return record.id?.toString() || String(record.id);
};
