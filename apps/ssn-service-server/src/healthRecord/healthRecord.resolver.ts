import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { HealthRecordResolverBase } from "./base/healthRecord.resolver.base";
import { HealthRecord } from "./base/HealthRecord";
import { HealthRecordService } from "./healthRecord.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => HealthRecord)
export class HealthRecordResolver extends HealthRecordResolverBase {
  constructor(
    protected readonly service: HealthRecordService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
