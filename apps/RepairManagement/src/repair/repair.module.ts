import { Module } from "@nestjs/common";
import { RepairModuleBase } from "./base/repair.module.base";
import { RepairService } from "./repair.service";
import { RepairController } from "./repair.controller";
import { RepairResolver } from "./repair.resolver";

@Module({
  imports: [RepairModuleBase],
  controllers: [RepairController],
  providers: [RepairService, RepairResolver],
  exports: [RepairService],
})
export class RepairModule {}
