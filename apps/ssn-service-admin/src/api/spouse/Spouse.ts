import { Child } from "../child/Child";
import { MarriageCertificate } from "../marriageCertificate/MarriageCertificate";
import { Person } from "../person/Person";

export type Spouse = {
  children?: Array<Child>;
  createdAt: Date;
  id: string;
  marriageCertificates?: Array<MarriageCertificate>;
  person?: Person | null;
  updatedAt: Date;
};
