import { Guest as TGuest } from "../api/guest/Guest";

export const GUEST_TITLE_FIELD = "id";

export const GuestTitle = (record: TGuest): string => {
  return record.id?.toString() || String(record.id);
};
