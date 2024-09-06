import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type OtpCreateInput = {
  code?: string | null;
  expiration?: Date | null;
  person?: PersonWhereUniqueInput | null;
};
