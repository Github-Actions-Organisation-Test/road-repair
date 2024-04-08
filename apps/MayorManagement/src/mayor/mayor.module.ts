import { Module } from "@nestjs/common";
import { MayorModuleBase } from "./base/mayor.module.base";
import { MayorService } from "./mayor.service";
import { MayorController } from "./mayor.controller";
import { MayorResolver } from "./mayor.resolver";

@Module({
  imports: [MayorModuleBase],
  controllers: [MayorController],
  providers: [MayorService, MayorResolver],
  exports: [MayorService],
})
export class MayorModule {}
