import { MarriageCertificateWhereInput } from "./MarriageCertificateWhereInput";
import { MarriageCertificateOrderByInput } from "./MarriageCertificateOrderByInput";

export type MarriageCertificateFindManyArgs = {
  where?: MarriageCertificateWhereInput;
  orderBy?: Array<MarriageCertificateOrderByInput>;
  skip?: number;
  take?: number;
};
