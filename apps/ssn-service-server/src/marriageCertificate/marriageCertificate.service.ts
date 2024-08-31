import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarriageCertificateServiceBase } from "./base/marriageCertificate.service.base";

@Injectable()
export class MarriageCertificateService extends MarriageCertificateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
