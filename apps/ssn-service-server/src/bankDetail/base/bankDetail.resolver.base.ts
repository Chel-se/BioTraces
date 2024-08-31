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
import { BankDetail } from "./BankDetail";
import { BankDetailCountArgs } from "./BankDetailCountArgs";
import { BankDetailFindManyArgs } from "./BankDetailFindManyArgs";
import { BankDetailFindUniqueArgs } from "./BankDetailFindUniqueArgs";
import { CreateBankDetailArgs } from "./CreateBankDetailArgs";
import { UpdateBankDetailArgs } from "./UpdateBankDetailArgs";
import { DeleteBankDetailArgs } from "./DeleteBankDetailArgs";
import { Person } from "../../person/base/Person";
import { BankDetailService } from "../bankDetail.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => BankDetail)
export class BankDetailResolverBase {
  constructor(
    protected readonly service: BankDetailService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "read",
    possession: "any",
  })
  async _bankDetailsMeta(
    @graphql.Args() args: BankDetailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [BankDetail])
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "read",
    possession: "any",
  })
  async bankDetails(
    @graphql.Args() args: BankDetailFindManyArgs
  ): Promise<BankDetail[]> {
    return this.service.bankDetails(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => BankDetail, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "read",
    possession: "own",
  })
  async bankDetail(
    @graphql.Args() args: BankDetailFindUniqueArgs
  ): Promise<BankDetail | null> {
    const result = await this.service.bankDetail(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => BankDetail)
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "create",
    possession: "any",
  })
  async createBankDetail(
    @graphql.Args() args: CreateBankDetailArgs
  ): Promise<BankDetail> {
    return await this.service.createBankDetail({
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
  @graphql.Mutation(() => BankDetail)
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "update",
    possession: "any",
  })
  async updateBankDetail(
    @graphql.Args() args: UpdateBankDetailArgs
  ): Promise<BankDetail | null> {
    try {
      return await this.service.updateBankDetail({
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

  @graphql.Mutation(() => BankDetail)
  @nestAccessControl.UseRoles({
    resource: "BankDetail",
    action: "delete",
    possession: "any",
  })
  async deleteBankDetail(
    @graphql.Args() args: DeleteBankDetailArgs
  ): Promise<BankDetail | null> {
    try {
      return await this.service.deleteBankDetail(args);
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
    @graphql.Parent() parent: BankDetail
  ): Promise<Person | null> {
    const result = await this.service.getPerson(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
