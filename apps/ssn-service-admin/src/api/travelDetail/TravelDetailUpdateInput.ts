import { PassportDetailWhereUniqueInput } from "../passportDetail/PassportDetailWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type TravelDetailUpdateInput = {
  passportDetail?: PassportDetailWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
