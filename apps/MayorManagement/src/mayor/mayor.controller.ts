import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MayorService } from "./mayor.service";
import { MayorControllerBase } from "./base/mayor.controller.base";

@swagger.ApiTags("mayors")
@common.Controller("mayors")
export class MayorController extends MayorControllerBase {
  constructor(protected readonly service: MayorService) {
    super(service);
  }
}
