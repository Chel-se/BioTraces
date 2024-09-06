import { EducationRecord } from "../educationRecord/EducationRecord";
import { HealthRecord } from "../healthRecord/HealthRecord";
import { Person } from "../person/Person";

export type BirthDetails = {
  createdAt: Date;
  educationRecords?: Array<EducationRecord>;
  healthRecord?: HealthRecord | null;
  id: string;
  person?: Person | null;
  updatedAt: Date;
};
