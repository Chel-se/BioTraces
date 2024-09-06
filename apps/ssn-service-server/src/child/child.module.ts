import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ChildModuleBase } from "./base/child.module.base";
import { ChildService } from "./child.service";
import { ChildController } from "./child.controller";
import { ChildResolver } from "./child.resolver";

@Module({
  imports: [ChildModuleBase, forwardRef(() => AuthModule)],
  controllers: [ChildController],
  providers: [ChildService, ChildResolver],
  exports: [ChildService],
})
export class ChildModule {}
