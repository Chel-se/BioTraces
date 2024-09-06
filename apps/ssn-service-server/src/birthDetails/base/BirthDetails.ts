/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { EducationRecord } from "../../educationRecord/base/EducationRecord";
import { HealthRecord } from "../../healthRecord/base/HealthRecord";
import { Person } from "../../person/base/Person";

@ObjectType()
class BirthDetails {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [EducationRecord],
  })
  @ValidateNested()
  @Type(() => EducationRecord)
  @IsOptional()
  educationRecords?: Array<EducationRecord>;

  @ApiProperty({
    required: false,
    type: () => HealthRecord,
  })
  @ValidateNested()
  @Type(() => HealthRecord)
  @IsOptional()
  healthRecord?: HealthRecord | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Person,
  })
  @ValidateNested()
  @Type(() => Person)
  @IsOptional()
  person?: Person | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { BirthDetails as BirthDetails };
