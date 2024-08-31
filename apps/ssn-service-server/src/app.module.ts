import { Module } from "@nestjs/common";
import { PersonModule } from "./person/person.module";
import { HealthRecordModule } from "./healthRecord/healthRecord.module";
import { BirthDetailsModule } from "./birthDetails/birthDetails.module";
import { EducationRecordModule } from "./educationRecord/educationRecord.module";
import { ChildModule } from "./child/child.module";
import { BankDetailModule } from "./bankDetail/bankDetail.module";
import { SpouseModule } from "./spouse/spouse.module";
import { PassportDetailModule } from "./passportDetail/passportDetail.module";
import { TravelDetailModule } from "./travelDetail/travelDetail.module";
import { MarriageCertificateModule } from "./marriageCertificate/marriageCertificate.module";
import { OtpModule } from "./otp/otp.module";
import { FamilyMemberModule } from "./familyMember/familyMember.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { AddressModule } from "./address/address.module";
import { AuthenticationRecordModule } from "./authenticationRecord/authenticationRecord.module";
import { SsnModule } from "./ssn/ssn.module";
import { GuestModule } from "./guest/guest.module";
import { AdminModule } from "./admin/admin.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    PersonModule,
    HealthRecordModule,
    BirthDetailsModule,
    EducationRecordModule,
    ChildModule,
    BankDetailModule,
    SpouseModule,
    PassportDetailModule,
    TravelDetailModule,
    MarriageCertificateModule,
    OtpModule,
    FamilyMemberModule,
    RoleModule,
    UserModule,
    AddressModule,
    AuthenticationRecordModule,
    SsnModule,
    GuestModule,
    AdminModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
