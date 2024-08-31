import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EducationRecordService } from "./educationRecord.service";
import { EducationRecordControllerBase } from "./base/educationRecord.controller.base";

@swagger.ApiTags("educationRecords")
@common.Controller("educationRecords")
export class EducationRecordController extends EducationRecordControllerBase {
  constructor(
    protected readonly service: EducationRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
