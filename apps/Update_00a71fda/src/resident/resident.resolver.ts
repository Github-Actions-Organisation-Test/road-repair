import * as graphql from "@nestjs/graphql";
import { ResidentResolverBase } from "./base/resident.resolver.base";
import { Resident } from "./base/Resident";
import { ResidentService } from "./resident.service";

@graphql.Resolver(() => Resident)
export class ResidentResolver extends ResidentResolverBase {
  constructor(protected readonly service: ResidentService) {
    super(service);
  }
}
