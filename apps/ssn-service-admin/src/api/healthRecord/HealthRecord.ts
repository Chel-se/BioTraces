import { BirthDetails } from "../birthDetails/BirthDetails";
import { Person } from "../person/Person";

export type HealthRecord = {
  birthDetailsItems?: Array<BirthDetails>;
  createdAt: Date;
  id: string;
  person?: Person | null;
  updatedAt: Date;
};
