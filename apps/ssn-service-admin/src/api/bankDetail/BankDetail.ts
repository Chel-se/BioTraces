import { Person } from "../person/Person";

export type BankDetail = {
  createdAt: Date;
  id: string;
  person?: Person | null;
  updatedAt: Date;
};
