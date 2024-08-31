import { Module } from "@nestjs/common";
import { CustomOperationsService } from "./customoperations.service";
import { CustomOperationsController } from "./customoperations.controller";
import { CustomOperationsResolver } from "./customoperations.resolver";

@Module({
  controllers: [CustomOperationsController],
  providers: [CustomOperationsService, CustomOperationsResolver],
  exports: [CustomOperationsService],
})
export class CustomOperationsModule {}
