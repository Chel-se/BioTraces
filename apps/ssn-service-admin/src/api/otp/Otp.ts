import { Person } from "../person/Person";

export type Otp = {
  code: string | null;
  createdAt: Date;
  expiration: Date | null;
  id: string;
  person?: Person | null;
  updatedAt: Date;
};
