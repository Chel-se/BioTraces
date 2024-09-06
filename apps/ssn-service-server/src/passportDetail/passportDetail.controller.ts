import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PassportDetailService } from "./passportDetail.service";
import { PassportDetailControllerBase } from "./base/passportDetail.controller.base";

@swagger.ApiTags("passportDetails")
@common.Controller("passportDetails")
export class PassportDetailController extends PassportDetailControllerBase {
  constructor(
    protected readonly service: PassportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
