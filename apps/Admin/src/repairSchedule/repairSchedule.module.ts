import { Module } from "@nestjs/common";
import { RepairScheduleModuleBase } from "./base/repairSchedule.module.base";
import { RepairScheduleService } from "./repairSchedule.service";
import { RepairScheduleController } from "./repairSchedule.controller";
import { RepairScheduleResolver } from "./repairSchedule.resolver";

@Module({
  imports: [RepairScheduleModuleBase],
  controllers: [RepairScheduleController],
  providers: [RepairScheduleService, RepairScheduleResolver],
  exports: [RepairScheduleService],
})
export class RepairScheduleModule {}
