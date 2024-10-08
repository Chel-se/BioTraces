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
import { FamilyMemberUpdateManyWithoutChildrenInput } from "./FamilyMemberUpdateManyWithoutChildrenInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";
import { SpouseWhereUniqueInput } from "../../spouse/base/SpouseWhereUniqueInput";

@InputType()
class ChildUpdateInput {
  @ApiProperty({
    required: false,
    type: () => FamilyMemberUpdateManyWithoutChildrenInput,
  })
  @ValidateNested()
  @Type(() => FamilyMemberUpdateManyWithoutChildrenInput)
  @IsOptional()
  @Field(() => FamilyMemberUpdateManyWithoutChildrenInput, {
    nullable: true,
  })
  familyMembers?: FamilyMemberUpdateManyWithoutChildrenInput;

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
  parentSpouse?: string | null;

  @ApiProperty({
    required: false,
    type: () => PersonWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PersonWhereUniqueInput)
  @IsOptional()
  @Field(() => PersonWhereUniqueInput, {
    nullable: true,
  })
  person?: PersonWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SpouseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SpouseWhereUniqueInput)
  @IsOptional()
  @Field(() => SpouseWhereUniqueInput, {
    nullable: true,
  })
  spouse?: SpouseWhereUniqueInput | null;
}

export { ChildUpdateInput as ChildUpdateInput };
