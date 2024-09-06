import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BirthDetailsServiceBase } from "./base/birthDetails.service.base";

@Injectable()
export class BirthDetailsService extends BirthDetailsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
