import { BankDetailWhereInput } from "./BankDetailWhereInput";
import { BankDetailOrderByInput } from "./BankDetailOrderByInput";

export type BankDetailFindManyArgs = {
  where?: BankDetailWhereInput;
  orderBy?: Array<BankDetailOrderByInput>;
  skip?: number;
  take?: number;
};
