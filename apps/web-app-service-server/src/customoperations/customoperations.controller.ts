import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomOperationsService } from "./customoperations.service";

@swagger.ApiTags("customOperations")
@common.Controller("customOperations")
export class CustomOperationsController {
  constructor(protected readonly service: CustomOperationsService) {}
}
