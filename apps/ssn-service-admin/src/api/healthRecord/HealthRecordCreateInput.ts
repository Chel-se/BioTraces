import { BirthDetailsCreateNestedManyWithoutHealthRecordsInput } from "./BirthDetailsCreateNestedManyWithoutHealthRecordsInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type HealthRecordCreateInput = {
  birthDetailsItems?: BirthDetailsCreateNestedManyWithoutHealthRecordsInput;
  person?: PersonWhereUniqueInput | null;
};
