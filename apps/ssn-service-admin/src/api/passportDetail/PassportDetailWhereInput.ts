import { StringFilter } from "../../util/StringFilter";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";
import { TravelDetailListRelationFilter } from "../travelDetail/TravelDetailListRelationFilter";

export type PassportDetailWhereInput = {
  id?: StringFilter;
  person?: PersonWhereUniqueInput;
  travelDetails?: TravelDetailListRelationFilter;
};
