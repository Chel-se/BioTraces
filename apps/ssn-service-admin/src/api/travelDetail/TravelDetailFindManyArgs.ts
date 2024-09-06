import { TravelDetailWhereInput } from "./TravelDetailWhereInput";
import { TravelDetailOrderByInput } from "./TravelDetailOrderByInput";

export type TravelDetailFindManyArgs = {
  where?: TravelDetailWhereInput;
  orderBy?: Array<TravelDetailOrderByInput>;
  skip?: number;
  take?: number;
};
