import * as graphql from "@nestjs/graphql";
import { RepairResolverBase } from "./base/repair.resolver.base";
import { Repair } from "./base/Repair";
import { RepairService } from "./repair.service";

@graphql.Resolver(() => Repair)
export class RepairResolver extends RepairResolverBase {
  constructor(protected readonly service: RepairService) {
    super(service);
  }
}
