import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankDetailService } from "./bankDetail.service";
import { BankDetailControllerBase } from "./base/bankDetail.controller.base";

@swagger.ApiTags("bankDetails")
@common.Controller("bankDetails")
export class BankDetailController extends BankDetailControllerBase {
  constructor(
    protected readonly service: BankDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
