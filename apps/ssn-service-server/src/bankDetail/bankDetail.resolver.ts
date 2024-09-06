import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BankDetailResolverBase } from "./base/bankDetail.resolver.base";
import { BankDetail } from "./base/BankDetail";
import { BankDetailService } from "./bankDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankDetail)
export class BankDetailResolver extends BankDetailResolverBase {
  constructor(
    protected readonly service: BankDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
