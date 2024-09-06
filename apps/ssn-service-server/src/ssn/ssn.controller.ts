import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SsnService } from "./ssn.service";
import { SsnControllerBase } from "./base/ssn.controller.base";

@swagger.ApiTags("ssns")
@common.Controller("ssns")
export class SsnController extends SsnControllerBase {
  constructor(
    protected readonly service: SsnService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
