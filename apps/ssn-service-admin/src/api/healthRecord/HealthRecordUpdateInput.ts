import { BirthDetailsUpdateManyWithoutHealthRecordsInput } from "./BirthDetailsUpdateManyWithoutHealthRecordsInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type HealthRecordUpdateInput = {
  birthDetailsItems?: BirthDetailsUpdateManyWithoutHealthRecordsInput;
  person?: PersonWhereUniqueInput | null;
};
