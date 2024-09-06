import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankDetailServiceBase } from "./base/bankDetail.service.base";

@Injectable()
export class BankDetailService extends BankDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
