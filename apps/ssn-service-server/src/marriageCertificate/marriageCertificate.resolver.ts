import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MarriageCertificateResolverBase } from "./base/marriageCertificate.resolver.base";
import { MarriageCertificate } from "./base/MarriageCertificate";
import { MarriageCertificateService } from "./marriageCertificate.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MarriageCertificate)
export class MarriageCertificateResolver extends MarriageCertificateResolverBase {
  constructor(
    protected readonly service: MarriageCertificateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
