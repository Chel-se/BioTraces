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
import { ChildWhereInput } from "./ChildWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChildListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChildWhereInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereInput)
  @IsOptional()
  @Field(() => ChildWhereInput, {
    nullable: true,
  })
  every?: ChildWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChildWhereInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereInput)
  @IsOptional()
  @Field(() => ChildWhereInput, {
    nullable: true,
  })
  some?: ChildWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChildWhereInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereInput)
  @IsOptional()
  @Field(() => ChildWhereInput, {
    nullable: true,
  })
  none?: ChildWhereInput;
}
export { ChildListRelationFilter as ChildListRelationFilter };
