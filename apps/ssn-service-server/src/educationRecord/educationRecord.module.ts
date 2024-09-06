import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EducationRecordModuleBase } from "./base/educationRecord.module.base";
import { EducationRecordService } from "./educationRecord.service";
import { EducationRecordController } from "./educationRecord.controller";
import { EducationRecordResolver } from "./educationRecord.resolver";

@Module({
  imports: [EducationRecordModuleBase, forwardRef(() => AuthModule)],
  controllers: [EducationRecordController],
  providers: [EducationRecordService, EducationRecordResolver],
  exports: [EducationRecordService],
})
export class EducationRecordModule {}
