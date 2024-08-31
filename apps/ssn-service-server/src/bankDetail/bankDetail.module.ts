import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankDetailModuleBase } from "./base/bankDetail.module.base";
import { BankDetailService } from "./bankDetail.service";
import { BankDetailController } from "./bankDetail.controller";
import { BankDetailResolver } from "./bankDetail.resolver";

@Module({
  imports: [BankDetailModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankDetailController],
  providers: [BankDetailService, BankDetailResolver],
  exports: [BankDetailService],
})
export class BankDetailModule {}
