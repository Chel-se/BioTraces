import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SsnServiceBase } from "./base/ssn.service.base";

@Injectable()
export class SsnService extends SsnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
