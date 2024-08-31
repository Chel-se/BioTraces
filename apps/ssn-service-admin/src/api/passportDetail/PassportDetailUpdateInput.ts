import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { TravelDetailUpdateManyWithoutPassportDetailsInput } from "./TravelDetailUpdateManyWithoutPassportDetailsInput";

export type PassportDetailUpdateInput = {
  person?: PersonWhereUniqueInput | null;
  travelDetails?: TravelDetailUpdateManyWithoutPassportDetailsInput;
};
