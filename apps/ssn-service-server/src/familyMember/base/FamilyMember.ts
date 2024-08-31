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
import { Child } from "../../child/base/Child";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsInt,
  Min,
  Max,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { Person } from "../../person/base/Person";

@ObjectType()
class FamilyMember {
  @ApiProperty({
    required: false,
    type: () => Child,
  })
  @ValidateNested()
  @Type(() => Child)
  @IsOptional()
  child?: Child | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  generationLevel!: number | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  parentId!: string | null;

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

export { FamilyMember as FamilyMember };
