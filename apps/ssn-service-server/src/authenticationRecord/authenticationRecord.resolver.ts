import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AuthenticationRecordResolverBase } from "./base/authenticationRecord.resolver.base";
import { AuthenticationRecord } from "./base/AuthenticationRecord";
import { AuthenticationRecordService } from "./authenticationRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AuthenticationRecord)
export class AuthenticationRecordResolver extends AuthenticationRecordResolverBase {
  constructor(
    protected readonly service: AuthenticationRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
