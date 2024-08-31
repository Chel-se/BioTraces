import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TravelDetailServiceBase } from "./base/travelDetail.service.base";

@Injectable()
export class TravelDetailService extends TravelDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
