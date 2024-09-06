import { PassportDetailWhereInput } from "./PassportDetailWhereInput";
import { PassportDetailOrderByInput } from "./PassportDetailOrderByInput";

export type PassportDetailFindManyArgs = {
  where?: PassportDetailWhereInput;
  orderBy?: Array<PassportDetailOrderByInput>;
  skip?: number;
  take?: number;
};
