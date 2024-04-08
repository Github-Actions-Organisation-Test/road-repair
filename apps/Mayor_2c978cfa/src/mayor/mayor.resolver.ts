import * as graphql from "@nestjs/graphql";
import { MayorResolverBase } from "./base/mayor.resolver.base";
import { Mayor } from "./base/Mayor";
import { MayorService } from "./mayor.service";

@graphql.Resolver(() => Mayor)
export class MayorResolver extends MayorResolverBase {
  constructor(protected readonly service: MayorService) {
    super(service);
  }
}
