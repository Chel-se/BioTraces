import { BirthDetailsWhereInput } from "./BirthDetailsWhereInput";
import { BirthDetailsOrderByInput } from "./BirthDetailsOrderByInput";

export type BirthDetailsFindManyArgs = {
  where?: BirthDetailsWhereInput;
  orderBy?: Array<BirthDetailsOrderByInput>;
  skip?: number;
  take?: number;
};
