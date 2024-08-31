import { Person } from "../person/Person";
import { Spouse } from "../spouse/Spouse";

export type MarriageCertificate = {
  createdAt: Date;
  id: string;
  person?: Person | null;
  spouse?: Spouse | null;
  updatedAt: Date;
};
