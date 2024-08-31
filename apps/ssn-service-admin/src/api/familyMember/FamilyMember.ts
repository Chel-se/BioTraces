import { Child } from "../child/Child";
import { Person } from "../person/Person";

export type FamilyMember = {
  child?: Child | null;
  createdAt: Date;
  generationLevel: number | null;
  id: string;
  parentId: string | null;
  person?: Person | null;
  updatedAt: Date;
};
