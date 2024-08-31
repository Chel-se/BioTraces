import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SsnModuleBase } from "./base/ssn.module.base";
import { SsnService } from "./ssn.service";
import { SsnController } from "./ssn.controller";
import { SsnResolver } from "./ssn.resolver";

@Module({
  imports: [SsnModuleBase, forwardRef(() => AuthModule)],
  controllers: [SsnController],
  providers: [SsnService, SsnResolver],
  exports: [SsnService],
})
export class SsnModule {}
