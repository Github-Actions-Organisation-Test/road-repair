import * as graphql from "@nestjs/graphql";
import { UpdateResolverBase } from "./base/update.resolver.base";
import { Update } from "./base/Update";
import { UpdateService } from "./update.service";

@graphql.Resolver(() => Update)
export class UpdateResolver extends UpdateResolverBase {
  constructor(protected readonly service: UpdateService) {
    super(service);
  }
}
