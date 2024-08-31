import { TravelDetail as TTravelDetail } from "../api/travelDetail/TravelDetail";

export const TRAVELDETAIL_TITLE_FIELD = "id";

export const TravelDetailTitle = (record: TTravelDetail): string => {
  return record.id?.toString() || String(record.id);
};
