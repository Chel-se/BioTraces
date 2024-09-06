import { EducationRecordWhereInput } from "./EducationRecordWhereInput";
import { EducationRecordOrderByInput } from "./EducationRecordOrderByInput";

export type EducationRecordFindManyArgs = {
  where?: EducationRecordWhereInput;
  orderBy?: Array<EducationRecordOrderByInput>;
  skip?: number;
  take?: number;
};
