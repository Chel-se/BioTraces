/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HealthRecordWhereInput } from "./HealthRecordWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { HealthRecordOrderByInput } from "./HealthRecordOrderByInput";

@ArgsType()
class HealthRecordFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => HealthRecordWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => HealthRecordWhereInput, { nullable: true })
  @Type(() => HealthRecordWhereInput)
  where?: HealthRecordWhereInput;

  @ApiProperty({
    required: false,
    type: [HealthRecordOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [HealthRecordOrderByInput], { nullable: true })
  @Type(() => HealthRecordOrderByInput)
  orderBy?: Array<HealthRecordOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { HealthRecordFindManyArgs as HealthRecordFindManyArgs };
