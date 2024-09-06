import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PassportDetailResolverBase } from "./base/passportDetail.resolver.base";
import { PassportDetail } from "./base/PassportDetail";
import { PassportDetailService } from "./passportDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PassportDetail)
export class PassportDetailResolver extends PassportDetailResolverBase {
  constructor(
    protected readonly service: PassportDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
