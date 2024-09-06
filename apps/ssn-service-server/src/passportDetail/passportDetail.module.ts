import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PassportDetailModuleBase } from "./base/passportDetail.module.base";
import { PassportDetailService } from "./passportDetail.service";
import { PassportDetailController } from "./passportDetail.controller";
import { PassportDetailResolver } from "./passportDetail.resolver";

@Module({
  imports: [PassportDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [PassportDetailController],
  providers: [PassportDetailService, PassportDetailResolver],
  exports: [PassportDetailService],
})
export class PassportDetailModule {}
