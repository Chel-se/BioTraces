import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SpouseModuleBase } from "./base/spouse.module.base";
import { SpouseService } from "./spouse.service";
import { SpouseController } from "./spouse.controller";
import { SpouseResolver } from "./spouse.resolver";

@Module({
  imports: [SpouseModuleBase, forwardRef(() => AuthModule)],
  controllers: [SpouseController],
  providers: [SpouseService, SpouseResolver],
  exports: [SpouseService],
})
export class SpouseModule {}
