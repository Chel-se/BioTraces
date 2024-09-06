import { PersonWhereUniqueInput } from "../person/PersonWhereUniqueInput";

export type OtpUpdateInput = {
  code?: string | null;
  expiration?: Date | null;
  person?: PersonWhereUniqueInput | null;
};
