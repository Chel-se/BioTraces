import * as graphql from "@nestjs/graphql";
import { CustomOperationsService } from "./customoperations.service";

export class CustomOperationsResolver {
  constructor(protected readonly service: CustomOperationsService) {}
}
