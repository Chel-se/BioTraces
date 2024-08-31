import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FamilyMemberServiceBase } from "./base/familyMember.service.base";

@Injectable()
export class FamilyMemberService extends FamilyMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
