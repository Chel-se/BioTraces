import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BirthDetailsModuleBase } from "./base/birthDetails.module.base";
import { BirthDetailsService } from "./birthDetails.service";
import { BirthDetailsController } from "./birthDetails.controller";
import { BirthDetailsResolver } from "./birthDetails.resolver";

@Module({
  imports: [BirthDetailsModuleBase, forwardRef(() => AuthModule)],
  controllers: [BirthDetailsController],
  providers: [BirthDetailsService, BirthDetailsResolver],
  exports: [BirthDetailsService],
})
export class BirthDetailsModule {}
