/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ChildService } from "../child.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChildCreateInput } from "./ChildCreateInput";
import { Child } from "./Child";
import { ChildFindManyArgs } from "./ChildFindManyArgs";
import { ChildWhereUniqueInput } from "./ChildWhereUniqueInput";
import { ChildUpdateInput } from "./ChildUpdateInput";
import { FamilyMemberFindManyArgs } from "../../familyMember/base/FamilyMemberFindManyArgs";
import { FamilyMember } from "../../familyMember/base/FamilyMember";
import { FamilyMemberWhereUniqueInput } from "../../familyMember/base/FamilyMemberWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChildControllerBase {
  constructor(
    protected readonly service: ChildService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Child })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createChild(@common.Body() data: ChildCreateInput): Promise<Child> {
    return await this.service.createChild({
      data: {
        ...data,

        person: data.person
          ? {
              connect: data.person,
            }
          : undefined,

        spouse: data.spouse
          ? {
              connect: data.spouse,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        parentSpouse: true,

        person: {
          select: {
            id: true,
          },
        },

        spouse: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Child] })
  @ApiNestedQuery(ChildFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async children(@common.Req() request: Request): Promise<Child[]> {
    const args = plainToClass(ChildFindManyArgs, request.query);
    return this.service.children({
      ...args,
      select: {
        createdAt: true,
        id: true,
        parentSpouse: true,

        person: {
          select: {
            id: true,
          },
        },

        spouse: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Child })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async child(
    @common.Param() params: ChildWhereUniqueInput
  ): Promise<Child | null> {
    const result = await this.service.child({
      where: params,
      select: {
        createdAt: true,
        id: true,
        parentSpouse: true,

        person: {
          select: {
            id: true,
          },
        },

        spouse: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Child })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateChild(
    @common.Param() params: ChildWhereUniqueInput,
    @common.Body() data: ChildUpdateInput
  ): Promise<Child | null> {
    try {
      return await this.service.updateChild({
        where: params,
        data: {
          ...data,

          person: data.person
            ? {
                connect: data.person,
              }
            : undefined,

          spouse: data.spouse
            ? {
                connect: data.spouse,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          parentSpouse: true,

          person: {
            select: {
              id: true,
            },
          },

          spouse: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Child })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChild(
    @common.Param() params: ChildWhereUniqueInput
  ): Promise<Child | null> {
    try {
      return await this.service.deleteChild({
        where: params,
        select: {
          createdAt: true,
          id: true,
          parentSpouse: true,

          person: {
            select: {
              id: true,
            },
          },

          spouse: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/familyMembers")
  @ApiNestedQuery(FamilyMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FamilyMember",
    action: "read",
    possession: "any",
  })
  async findFamilyMembers(
    @common.Req() request: Request,
    @common.Param() params: ChildWhereUniqueInput
  ): Promise<FamilyMember[]> {
    const query = plainToClass(FamilyMemberFindManyArgs, request.query);
    const results = await this.service.findFamilyMembers(params.id, {
      ...query,
      select: {
        child: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        generationLevel: true,
        id: true,
        parentId: true,

        person: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/familyMembers")
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  async connectFamilyMembers(
    @common.Param() params: ChildWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        connect: body,
      },
    };
    await this.service.updateChild({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/familyMembers")
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  async updateFamilyMembers(
    @common.Param() params: ChildWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        set: body,
      },
    };
    await this.service.updateChild({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/familyMembers")
  @nestAccessControl.UseRoles({
    resource: "Child",
    action: "update",
    possession: "any",
  })
  async disconnectFamilyMembers(
    @common.Param() params: ChildWhereUniqueInput,
    @common.Body() body: FamilyMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      familyMembers: {
        disconnect: body,
      },
    };
    await this.service.updateChild({
      where: params,
      data,
      select: { id: true },
    });
  }
}
