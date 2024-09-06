import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SpouseServiceBase } from "./base/spouse.service.base";

@Injectable()
export class SpouseService extends SpouseServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
