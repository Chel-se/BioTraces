/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FamilyMemberWhereInput } from "./FamilyMemberWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FamilyMemberListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FamilyMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => FamilyMemberWhereInput)
  @IsOptional()
  @Field(() => FamilyMemberWhereInput, {
    nullable: true,
  })
  every?: FamilyMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => FamilyMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => FamilyMemberWhereInput)
  @IsOptional()
  @Field(() => FamilyMemberWhereInput, {
    nullable: true,
  })
  some?: FamilyMemberWhereInput;

  @ApiProperty({
    required: false,
    type: () => FamilyMemberWhereInput,
  })
  @ValidateNested()
  @Type(() => FamilyMemberWhereInput)
  @IsOptional()
  @Field(() => FamilyMemberWhereInput, {
    nullable: true,
  })
  none?: FamilyMemberWhereInput;
}
export { FamilyMemberListRelationFilter as FamilyMemberListRelationFilter };
