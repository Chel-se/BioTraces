import { BirthDetails } from "../birthDetails/BirthDetails";
import { Person } from "../person/Person";

export type EducationRecord = {
  birthDetail?: BirthDetails | null;
  createdAt: Date;
  id: string;
  person?: Person | null;
  updatedAt: Date;
};
