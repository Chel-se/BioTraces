import { PassportDetailWhereUniqueInput } from "../passportDetail/PassportDetailWhereUniqueInput";
import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type TravelDetailCreateInput = {
  passportDetail?: PassportDetailWhereUniqueInput | null;
  person?: PersonWhereUniqueInput | null;
};
