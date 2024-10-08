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
import { SpouseWhereInput } from "./SpouseWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SpouseOrderByInput } from "./SpouseOrderByInput";

@ArgsType()
class SpouseFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SpouseWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SpouseWhereInput, { nullable: true })
  @Type(() => SpouseWhereInput)
  where?: SpouseWhereInput;

  @ApiProperty({
    required: false,
    type: [SpouseOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SpouseOrderByInput], { nullable: true })
  @Type(() => SpouseOrderByInput)
  orderBy?: Array<SpouseOrderByInput>;

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

export { SpouseFindManyArgs as SpouseFindManyArgs };
