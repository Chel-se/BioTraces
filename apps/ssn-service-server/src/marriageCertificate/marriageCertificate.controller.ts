import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarriageCertificateService } from "./marriageCertificate.service";
import { MarriageCertificateControllerBase } from "./base/marriageCertificate.controller.base";

@swagger.ApiTags("marriageCertificates")
@common.Controller("marriageCertificates")
export class MarriageCertificateController extends MarriageCertificateControllerBase {
  constructor(
    protected readonly service: MarriageCertificateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
