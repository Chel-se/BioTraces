import { AuthenticationRecordWhereInput } from "./AuthenticationRecordWhereInput";
import { AuthenticationRecordOrderByInput } from "./AuthenticationRecordOrderByInput";

export type AuthenticationRecordFindManyArgs = {
  where?: AuthenticationRecordWhereInput;
  orderBy?: Array<AuthenticationRecordOrderByInput>;
  skip?: number;
  take?: number;
};
