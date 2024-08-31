import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AuthenticationRecordModuleBase } from "./base/authenticationRecord.module.base";
import { AuthenticationRecordService } from "./authenticationRecord.service";
import { AuthenticationRecordController } from "./authenticationRecord.controller";
import { AuthenticationRecordResolver } from "./authenticationRecord.resolver";

@Module({
  imports: [AuthenticationRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [AuthenticationRecordController],
  providers: [AuthenticationRecordService, AuthenticationRecordResolver],
  exports: [AuthenticationRecordService],
})
export class AuthenticationRecordModule {}
