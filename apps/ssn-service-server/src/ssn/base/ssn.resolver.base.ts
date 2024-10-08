/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Ssn } from "./Ssn";
import { SsnCountArgs } from "./SsnCountArgs";
import { SsnFindManyArgs } from "./SsnFindManyArgs";
import { SsnFindUniqueArgs } from "./SsnFindUniqueArgs";
import { CreateSsnArgs } from "./CreateSsnArgs";
import { UpdateSsnArgs } from "./UpdateSsnArgs";
import { DeleteSsnArgs } from "./DeleteSsnArgs";
import { SsnService } from "../ssn.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Ssn)
export class SsnResolverBase {
  constructor(
    protected readonly service: SsnService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "read",
    possession: "any",
  })
  async _ssnsMeta(
    @graphql.Args() args: SsnCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Ssn])
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "read",
    possession: "any",
  })
  async ssns(@graphql.Args() args: SsnFindManyArgs): Promise<Ssn[]> {
    return this.service.ssns(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Ssn, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "read",
    possession: "own",
  })
  async ssn(@graphql.Args() args: SsnFindUniqueArgs): Promise<Ssn | null> {
    const result = await this.service.ssn(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ssn)
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "create",
    possession: "any",
  })
  async createSsn(@graphql.Args() args: CreateSsnArgs): Promise<Ssn> {
    return await this.service.createSsn({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Ssn)
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "update",
    possession: "any",
  })
  async updateSsn(@graphql.Args() args: UpdateSsnArgs): Promise<Ssn | null> {
    try {
      return await this.service.updateSsn({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ssn)
  @nestAccessControl.UseRoles({
    resource: "Ssn",
    action: "delete",
    possession: "any",
  })
  async deleteSsn(@graphql.Args() args: DeleteSsnArgs): Promise<Ssn | null> {
    try {
      return await this.service.deleteSsn(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
