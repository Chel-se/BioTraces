import { StringFilter } from "../../util/StringFilter";
import { PassportDetailWhereUniqueInput } from "../passportDetail/PassportDetailWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type TravelDetailWhereInput = {
  id?: StringFilter;
  passportDetail?: PassportDetailWhereUniqueInput;
  person?: PersonWhereUniqueInput;
};
