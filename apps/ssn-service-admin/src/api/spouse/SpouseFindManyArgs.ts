import { SpouseWhereInput } from "./SpouseWhereInput";
import { SpouseOrderByInput } from "./SpouseOrderByInput";

export type SpouseFindManyArgs = {
  where?: SpouseWhereInput;
  orderBy?: Array<SpouseOrderByInput>;
  skip?: number;
  take?: number;
};
