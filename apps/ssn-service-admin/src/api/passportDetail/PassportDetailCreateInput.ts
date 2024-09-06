import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { TravelDetailCreateNestedManyWithoutPassportDetailsInput } from "./TravelDetailCreateNestedManyWithoutPassportDetailsInput";

export type PassportDetailCreateInput = {
  person?: PersonWhereUniqueInput | null;
  travelDetails?: TravelDetailCreateNestedManyWithoutPassportDetailsInput;
};
