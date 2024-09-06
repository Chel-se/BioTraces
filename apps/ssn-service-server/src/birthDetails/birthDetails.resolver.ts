import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { BirthDetailsResolverBase } from "./base/birthDetails.resolver.base";
import { BirthDetails } from "./base/BirthDetails";
import { BirthDetailsService } from "./birthDetails.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BirthDetails)
export class BirthDetailsResolver extends BirthDetailsResolverBase {
  constructor(
    protected readonly service: BirthDetailsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
