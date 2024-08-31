import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PassportDetailServiceBase } from "./base/passportDetail.service.base";

@Injectable()
export class PassportDetailService extends PassportDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
