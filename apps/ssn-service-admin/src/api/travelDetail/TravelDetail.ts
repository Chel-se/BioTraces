import { PassportDetail } from "../passportDetail/PassportDetail";
import { Person } from "../person/Person";

export type TravelDetail = {
  createdAt: Date;
  id: string;
  passportDetail?: PassportDetail | null;
  person?: Person | null;
  updatedAt: Date;
};
