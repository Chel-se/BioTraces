import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TravelDetailService } from "./travelDetail.service";
import { TravelDetailControllerBase } from "./base/travelDetail.controller.base";

@swagger.ApiTags("travelDetails")
@common.Controller("travelDetails")
export class TravelDetailController extends TravelDetailControllerBase {
  constructor(
    protected readonly service: TravelDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
