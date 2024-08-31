import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BirthDetailsService } from "./birthDetails.service";
import { BirthDetailsControllerBase } from "./base/birthDetails.controller.base";

@swagger.ApiTags("birthDetails")
@common.Controller("birthDetails")
export class BirthDetailsController extends BirthDetailsControllerBase {
  constructor(
    protected readonly service: BirthDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
