import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FamilyMemberModuleBase } from "./base/familyMember.module.base";
import { FamilyMemberService } from "./familyMember.service";
import { FamilyMemberController } from "./familyMember.controller";
import { FamilyMemberResolver } from "./familyMember.resolver";

@Module({
  imports: [FamilyMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [FamilyMemberController],
  providers: [FamilyMemberService, FamilyMemberResolver],
  exports: [FamilyMemberService],
})
export class FamilyMemberModule {}
