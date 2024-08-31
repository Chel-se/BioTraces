import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthenticationRecordServiceBase } from "./base/authenticationRecord.service.base";

@Injectable()
export class AuthenticationRecordService extends AuthenticationRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
