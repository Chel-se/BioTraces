import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TravelDetailResolverBase } from "./base/travelDetail.resolver.base";
import { TravelDetail } from "./base/TravelDetail";
import { TravelDetailService } from "./travelDetail.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TravelDetail)
export class TravelDetailResolver extends TravelDetailResolverBase {
  constructor(
    protected readonly service: TravelDetailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
