import { Person } from "../person/Person";
import { TravelDetail } from "../travelDetail/TravelDetail";

export type PassportDetail = {
  createdAt: Date;
  id: string;
  person?: Person | null;
  travelDetails?: Array<TravelDetail>;
  updatedAt: Date;
};
