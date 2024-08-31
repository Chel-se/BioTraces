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
import { Spouse } from "./Spouse";
import { SpouseCountArgs } from "./SpouseCountArgs";
import { SpouseFindManyArgs } from "./SpouseFindManyArgs";
import { SpouseFindUniqueArgs } from "./SpouseFindUniqueArgs";
import { CreateSpouseArgs } from "./CreateSpouseArgs";
import { UpdateSpouseArgs } from "./UpdateSpouseArgs";
import { DeleteSpouseArgs } from "./DeleteSpouseArgs";
import { ChildFindManyArgs } from "../../child/base/ChildFindManyArgs";
import { Child } from "../../child/base/Child";
import { MarriageCertificateFindManyArgs } from "../../marriageCertificate/base/MarriageCertificateFindManyArgs";
import { MarriageCertificate } from "../../marriageCertificate/base/MarriageCertificate";
import { Person } from "../../person/base/Person";
import { SpouseService } from "../spouse.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Spouse)
export class SpouseResolverBase {
  constructor(
    protected readonly service: SpouseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "read",
    possession: "any",
  })
  async _spousesMeta(
    @graphql.Args() args: SpouseCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Spouse])
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "read",
    possession: "any",
  })
  async spouses(@graphql.Args() args: SpouseFindManyArgs): Promise<Spouse[]> {
    return this.service.spouses(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Spouse, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "read",
    possession: "own",
  })
  async spouse(
    @graphql.Args() args: SpouseFindUniqueArgs
  ): Promise<Spouse | null> {
    const result = await this.service.spouse(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Spouse)
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "create",
    possession: "any",
  })
  async createSpouse(@graphql.Args() args: CreateSpouseArgs): Promise<Spouse> {
    return await this.service.createSpouse({
      ...args,
      data: {
        ...args.data,

        person: args.data.person
          ? {
              connect: args.data.person,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Spouse)
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "update",
    possession: "any",
  })
  async updateSpouse(
    @graphql.Args() args: UpdateSpouseArgs
  ): Promise<Spouse | null> {
    try {
      return await this.service.updateSpouse({
        ...args,
        data: {
          ...args.data,

          person: args.data.person
            ? {
                connect: args.data.person,
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

  @graphql.Mutation(() => Spouse)
  @nestAccessControl.UseRoles({
    resource: "Spouse",
    action: "delete",
    possession: "any",
  })
  async deleteSpouse(
    @graphql.Args() args: DeleteSpouseArgs
  ): Promise<Spouse | null> {
    try {
      return await this.service.deleteSpouse(args);
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
  @graphql.ResolveField(() => [Child], { name: "children" })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  async findChildren(
    @graphql.Parent() parent: Spouse,
    @graphql.Args() args: ChildFindManyArgs
  ): Promise<Child[]> {
    const results = await this.service.findChildren(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [MarriageCertificate], {
    name: "marriageCertificates",
  })
  @nestAccessControl.UseRoles({
    resource: "MarriageCertificate",
    action: "read",
    possession: "any",
  })
  async findMarriageCertificates(
    @graphql.Parent() parent: Spouse,
    @graphql.Args() args: MarriageCertificateFindManyArgs
  ): Promise<MarriageCertificate[]> {
    const results = await this.service.findMarriageCertificates(
      parent.id,
      args
    );

    if (!results) {
      return [];
    }

    return results;
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
  async getPerson(@graphql.Parent() parent: Spouse): Promise<Person | null> {
    const result = await this.service.getPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
