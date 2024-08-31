import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChildServiceBase } from "./base/child.service.base";

@Injectable()
export class ChildService extends ChildServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
