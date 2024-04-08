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
import { RepairScheduleService } from "../repairSchedule.service";
import { RepairScheduleCreateInput } from "./RepairScheduleCreateInput";
import { RepairSchedule } from "./RepairSchedule";
import { RepairScheduleFindManyArgs } from "./RepairScheduleFindManyArgs";
import { RepairScheduleWhereUniqueInput } from "./RepairScheduleWhereUniqueInput";
import { RepairScheduleUpdateInput } from "./RepairScheduleUpdateInput";

export class RepairScheduleControllerBase {
  constructor(protected readonly service: RepairScheduleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RepairSchedule })
  async createRepairSchedule(
    @common.Body() data: RepairScheduleCreateInput
  ): Promise<RepairSchedule> {
    return await this.service.createRepairSchedule({
      data: {
        ...data,

        admin: data.admin
          ? {
              connect: data.admin,
            }
          : undefined,
      },
      select: {
        id: true,
        time: true,

        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        supervisors: true,
        repairs: true,
        report: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [RepairSchedule] })
  @ApiNestedQuery(RepairScheduleFindManyArgs)
  async repairSchedules(
    @common.Req() request: Request
  ): Promise<RepairSchedule[]> {
    const args = plainToClass(RepairScheduleFindManyArgs, request.query);
    return this.service.repairSchedules({
      ...args,
      select: {
        id: true,
        time: true,

        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        supervisors: true,
        repairs: true,
        report: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async repairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput
  ): Promise<RepairSchedule | null> {
    const result = await this.service.repairSchedule({
      where: params,
      select: {
        id: true,
        time: true,

        admin: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        updatedAt: true,
        deletedAt: true,
        supervisors: true,
        repairs: true,
        report: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateRepairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput,
    @common.Body() data: RepairScheduleUpdateInput
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.updateRepairSchedule({
        where: params,
        data: {
          ...data,

          admin: data.admin
            ? {
                connect: data.admin,
              }
            : undefined,
        },
        select: {
          id: true,
          time: true,

          admin: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          supervisors: true,
          repairs: true,
          report: true,
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
  @swagger.ApiOkResponse({ type: RepairSchedule })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteRepairSchedule(
    @common.Param() params: RepairScheduleWhereUniqueInput
  ): Promise<RepairSchedule | null> {
    try {
      return await this.service.deleteRepairSchedule({
        where: params,
        select: {
          id: true,
          time: true,

          admin: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          updatedAt: true,
          deletedAt: true,
          supervisors: true,
          repairs: true,
          report: true,
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
}
