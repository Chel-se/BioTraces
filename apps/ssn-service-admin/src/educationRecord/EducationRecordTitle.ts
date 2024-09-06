import { EducationRecord as TEducationRecord } from "../api/educationRecord/EducationRecord";

export const EDUCATIONRECORD_TITLE_FIELD = "id";

export const EducationRecordTitle = (record: TEducationRecord): string => {
  return record.id?.toString() || String(record.id);
};
