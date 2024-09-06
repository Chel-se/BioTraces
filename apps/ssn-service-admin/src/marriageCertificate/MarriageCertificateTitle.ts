import { MarriageCertificate as TMarriageCertificate } from "../api/marriageCertificate/MarriageCertificate";

export const MARRIAGECERTIFICATE_TITLE_FIELD = "id";

export const MarriageCertificateTitle = (
  record: TMarriageCertificate
): string => {
  return record.id?.toString() || String(record.id);
};
