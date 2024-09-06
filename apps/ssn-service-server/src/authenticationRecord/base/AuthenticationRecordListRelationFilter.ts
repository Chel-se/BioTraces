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
import { AuthenticationRecordWhereInput } from "./AuthenticationRecordWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AuthenticationRecordListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AuthenticationRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthenticationRecordWhereInput)
  @IsOptional()
  @Field(() => AuthenticationRecordWhereInput, {
    nullable: true,
  })
  every?: AuthenticationRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthenticationRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthenticationRecordWhereInput)
  @IsOptional()
  @Field(() => AuthenticationRecordWhereInput, {
    nullable: true,
  })
  some?: AuthenticationRecordWhereInput;

  @ApiProperty({
    required: false,
    type: () => AuthenticationRecordWhereInput,
  })
  @ValidateNested()
  @Type(() => AuthenticationRecordWhereInput)
  @IsOptional()
  @Field(() => AuthenticationRecordWhereInput, {
    nullable: true,
  })
  none?: AuthenticationRecordWhereInput;
}
export { AuthenticationRecordListRelationFilter as AuthenticationRecordListRelationFilter };
