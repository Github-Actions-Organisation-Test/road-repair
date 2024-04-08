import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UpdateService } from "./update.service";
import { UpdateControllerBase } from "./base/update.controller.base";

@swagger.ApiTags("updates")
@common.Controller("updates")
export class UpdateController extends UpdateControllerBase {
  constructor(protected readonly service: UpdateService) {
    super(service);
  }
}
