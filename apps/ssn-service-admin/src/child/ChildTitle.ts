import { Child as TChild } from "../api/child/Child";

export const CHILD_TITLE_FIELD = "parentSpouse";

export const ChildTitle = (record: TChild): string => {
  return record.parentSpouse?.toString() || String(record.id);
};
