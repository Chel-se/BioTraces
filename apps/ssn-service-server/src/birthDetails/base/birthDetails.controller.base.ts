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
import { BirthDetailsService } from "../birthDetails.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BirthDetailsCreateInput } from "./BirthDetailsCreateInput";
import { BirthDetails } from "./BirthDetails";
import { BirthDetailsFindManyArgs } from "./BirthDetailsFindManyArgs";
import { BirthDetailsWhereUniqueInput } from "./BirthDetailsWhereUniqueInput";
import { BirthDetailsUpdateInput } from "./BirthDetailsUpdateInput";
import { EducationRecordFindManyArgs } from "../../educationRecord/base/EducationRecordFindManyArgs";
import { EducationRecord } from "../../educationRecord/base/EducationRecord";
import { EducationRecordWhereUniqueInput } from "../../educationRecord/base/EducationRecordWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BirthDetailsControllerBase {
  constructor(
    protected readonly service: BirthDetailsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BirthDetails })
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBirthDetails(
    @common.Body() data: BirthDetailsCreateInput
  ): Promise<BirthDetails> {
    return await this.service.createBirthDetails({
      data: {
        ...data,

        healthRecord: data.healthRecord
          ? {
              connect: data.healthRecord,
            }
          : undefined,

        person: data.person
          ? {
              connect: data.person,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        healthRecord: {
          select: {
            id: true,
          },
        },

        id: true,

        person: {
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
  @swagger.ApiOkResponse({ type: [BirthDetails] })
  @ApiNestedQuery(BirthDetailsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async birthDetailsItems(
    @common.Req() request: Request
  ): Promise<BirthDetails[]> {
    const args = plainToClass(BirthDetailsFindManyArgs, request.query);
    return this.service.birthDetailsItems({
      ...args,
      select: {
        createdAt: true,

        healthRecord: {
          select: {
            id: true,
          },
        },

        id: true,

        person: {
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
  @swagger.ApiOkResponse({ type: BirthDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async birthDetails(
    @common.Param() params: BirthDetailsWhereUniqueInput
  ): Promise<BirthDetails | null> {
    const result = await this.service.birthDetails({
      where: params,
      select: {
        createdAt: true,

        healthRecord: {
          select: {
            id: true,
          },
        },

        id: true,

        person: {
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
  @swagger.ApiOkResponse({ type: BirthDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBirthDetails(
    @common.Param() params: BirthDetailsWhereUniqueInput,
    @common.Body() data: BirthDetailsUpdateInput
  ): Promise<BirthDetails | null> {
    try {
      return await this.service.updateBirthDetails({
        where: params,
        data: {
          ...data,

          healthRecord: data.healthRecord
            ? {
                connect: data.healthRecord,
              }
            : undefined,

          person: data.person
            ? {
                connect: data.person,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          healthRecord: {
            select: {
              id: true,
            },
          },

          id: true,

          person: {
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
  @swagger.ApiOkResponse({ type: BirthDetails })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBirthDetails(
    @common.Param() params: BirthDetailsWhereUniqueInput
  ): Promise<BirthDetails | null> {
    try {
      return await this.service.deleteBirthDetails({
        where: params,
        select: {
          createdAt: true,

          healthRecord: {
            select: {
              id: true,
            },
          },

          id: true,

          person: {
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
  @common.Get("/:id/educationRecords")
  @ApiNestedQuery(EducationRecordFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "EducationRecord",
    action: "read",
    possession: "any",
  })
  async findEducationRecords(
    @common.Req() request: Request,
    @common.Param() params: BirthDetailsWhereUniqueInput
  ): Promise<EducationRecord[]> {
    const query = plainToClass(EducationRecordFindManyArgs, request.query);
    const results = await this.service.findEducationRecords(params.id, {
      ...query,
      select: {
        birthDetail: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

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

  @common.Post("/:id/educationRecords")
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "update",
    possession: "any",
  })
  async connectEducationRecords(
    @common.Param() params: BirthDetailsWhereUniqueInput,
    @common.Body() body: EducationRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationRecords: {
        connect: body,
      },
    };
    await this.service.updateBirthDetails({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/educationRecords")
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "update",
    possession: "any",
  })
  async updateEducationRecords(
    @common.Param() params: BirthDetailsWhereUniqueInput,
    @common.Body() body: EducationRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationRecords: {
        set: body,
      },
    };
    await this.service.updateBirthDetails({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/educationRecords")
  @nestAccessControl.UseRoles({
    resource: "BirthDetails",
    action: "update",
    possession: "any",
  })
  async disconnectEducationRecords(
    @common.Param() params: BirthDetailsWhereUniqueInput,
    @common.Body() body: EducationRecordWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      educationRecords: {
        disconnect: body,
      },
    };
    await this.service.updateBirthDetails({
      where: params,
      data,
      select: { id: true },
    });
  }
}
