import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarriageCertificateModuleBase } from "./base/marriageCertificate.module.base";
import { MarriageCertificateService } from "./marriageCertificate.service";
import { MarriageCertificateController } from "./marriageCertificate.controller";
import { MarriageCertificateResolver } from "./marriageCertificate.resolver";

@Module({
  imports: [MarriageCertificateModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarriageCertificateController],
  providers: [MarriageCertificateService, MarriageCertificateResolver],
  exports: [MarriageCertificateService],
})
export class MarriageCertificateModule {}
