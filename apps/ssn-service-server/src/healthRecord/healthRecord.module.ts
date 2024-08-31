import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HealthRecordModuleBase } from "./base/healthRecord.module.base";
import { HealthRecordService } from "./healthRecord.service";
import { HealthRecordController } from "./healthRecord.controller";
import { HealthRecordResolver } from "./healthRecord.resolver";

@Module({
  imports: [HealthRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [HealthRecordController],
  providers: [HealthRecordService, HealthRecordResolver],
  exports: [HealthRecordService],
})
export class HealthRecordModule {}
