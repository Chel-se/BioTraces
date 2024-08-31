import { SsnWhereInput } from "./SsnWhereInput";
import { SsnOrderByInput } from "./SsnOrderByInput";

export type SsnFindManyArgs = {
  where?: SsnWhereInput;
  orderBy?: Array<SsnOrderByInput>;
  skip?: number;
  take?: number;
};
