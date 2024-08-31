import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AuthenticationRecordService } from "./authenticationRecord.service";
import { AuthenticationRecordControllerBase } from "./base/authenticationRecord.controller.base";

@swagger.ApiTags("authenticationRecords")
@common.Controller("authenticationRecords")
export class AuthenticationRecordController extends AuthenticationRecordControllerBase {
  constructor(
    protected readonly service: AuthenticationRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
