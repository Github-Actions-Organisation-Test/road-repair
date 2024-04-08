import * as graphql from "@nestjs/graphql";
import { RepairScheduleResolverBase } from "./base/repairSchedule.resolver.base";
import { RepairSchedule } from "./base/RepairSchedule";
import { RepairScheduleService } from "./repairSchedule.service";

@graphql.Resolver(() => RepairSchedule)
export class RepairScheduleResolver extends RepairScheduleResolverBase {
  constructor(protected readonly service: RepairScheduleService) {
    super(service);
  }
}
