import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TravelDetailModuleBase } from "./base/travelDetail.module.base";
import { TravelDetailService } from "./travelDetail.service";
import { TravelDetailController } from "./travelDetail.controller";
import { TravelDetailResolver } from "./travelDetail.resolver";

@Module({
  imports: [TravelDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [TravelDetailController],
  providers: [TravelDetailService, TravelDetailResolver],
  exports: [TravelDetailService],
})
export class TravelDetailModule {}
