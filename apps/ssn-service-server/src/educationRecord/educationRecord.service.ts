import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EducationRecordServiceBase } from "./base/educationRecord.service.base";

@Injectable()
export class EducationRecordService extends EducationRecordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
