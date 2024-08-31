import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SpouseService } from "./spouse.service";
import { SpouseControllerBase } from "./base/spouse.controller.base";

@swagger.ApiTags("spouses")
@common.Controller("spouses")
export class SpouseController extends SpouseControllerBase {
  constructor(
    protected readonly service: SpouseService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
