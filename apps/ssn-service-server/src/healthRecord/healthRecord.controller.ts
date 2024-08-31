import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { HealthRecordService } from "./healthRecord.service";
import { HealthRecordControllerBase } from "./base/healthRecord.controller.base";

@swagger.ApiTags("healthRecords")
@common.Controller("healthRecords")
export class HealthRecordController extends HealthRecordControllerBase {
  constructor(
    protected readonly service: HealthRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
