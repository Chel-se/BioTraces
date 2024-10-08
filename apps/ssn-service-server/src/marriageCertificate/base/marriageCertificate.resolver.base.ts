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
import { MarriageCertificate } from "./MarriageCertificate";
import { MarriageCertificateCountArgs } from "./MarriageCertificateCountArgs";
import { MarriageCertificateFindManyArgs } from "./MarriageCertificateFindManyArgs";
import { MarriageCertificateFindUniqueArgs } from "./MarriageCertificateFindUniqueArgs";
import { CreateMarriageCertificateArgs } from "./CreateMarriageCertificateArgs";
import { UpdateMarriageCertificateArgs } from "./UpdateMarriageCertificateArgs";
import { DeleteMarriageCertificateArgs } from "./DeleteMarriageCertificateArgs";
import { Person } from "../../person/base/Person";
import { Spouse } from "../../spouse/base/Spouse";
import { MarriageCertificateService } from "../marriageCertificate.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MarriageCertificate)
export class MarriageCertificateResolverBase {
  constructor(
    protected readonly service: MarriageCertificateService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "read",
    possession: "any",
  })
  async _marriageCertificatesMeta(
    @graphql.Args() args: MarriageCertificateCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [MarriageCertificate])
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "read",
    possession: "any",
  })
  async marriageCertificates(
    @graphql.Args() args: MarriageCertificateFindManyArgs
  ): Promise<MarriageCertificate[]> {
    return this.service.marriageCertificates(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => MarriageCertificate, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "read",
    possession: "own",
  })
  async marriageCertificate(
    @graphql.Args() args: MarriageCertificateFindUniqueArgs
  ): Promise<MarriageCertificate | null> {
    const result = await this.service.marriageCertificate(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MarriageCertificate)
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "create",
    possession: "any",
  })
  async createMarriageCertificate(
    @graphql.Args() args: CreateMarriageCertificateArgs
  ): Promise<MarriageCertificate> {
    return await this.service.createMarriageCertificate({
      ...args,
      data: {
        ...args.data,

        person: args.data.person
          ? {
              connect: args.data.person,
            }
          : undefined,

        spouse: args.data.spouse
          ? {
              connect: args.data.spouse,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => MarriageCertificate)
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "update",
    possession: "any",
  })
  async updateMarriageCertificate(
    @graphql.Args() args: UpdateMarriageCertificateArgs
  ): Promise<MarriageCertificate | null> {
    try {
      return await this.service.updateMarriageCertificate({
        ...args,
        data: {
          ...args.data,

          person: args.data.person
            ? {
                connect: args.data.person,
              }
            : undefined,

          spouse: args.data.spouse
            ? {
                connect: args.data.spouse,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => MarriageCertificate)
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "delete",
    possession: "any",
  })
  async deleteMarriageCertificate(
    @graphql.Args() args: DeleteMarriageCertificateArgs
  ): Promise<MarriageCertificate | null> {
    try {
      return await this.service.deleteMarriageCertificate(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Person, {
    nullable: true,
    name: "person",
  })
  @nestAccessControl.UseRoles({
    resource: "Person",
    action: "read",
    possession: "any",
  })
  async getPerson(
    @graphql.Parent() parent: MarriageCertificate
  ): Promise<Person | null> {
    const result = await this.service.getPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Spouse, {
    nullable: true,
    name: "spouse",
  })
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "read",
    possession: "any",
  })
  async getSpouse(
    @graphql.Parent() parent: MarriageCertificate
  ): Promise<Spouse | null> {
    const result = await this.service.getSpouse(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
