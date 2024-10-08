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
import { ChildCreateNestedManyWithoutSpousesInput } from "./ChildCreateNestedManyWithoutSpousesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { MarriageCertificateCreateNestedManyWithoutSpousesInput } from "./MarriageCertificateCreateNestedManyWithoutSpousesInput";
import { PersonWhereUniqueInput } from "../../person/base/PersonWhereUniqueInput";

@InputType()
class SpouseCreateInput {
  @ApiProperty({
    required: false,
    type: () => ChildCreateNestedManyWithoutSpousesInput,
  })
  @ValidateNested()
  @Type(() => ChildCreateNestedManyWithoutSpousesInput)
  @IsOptional()
  @Field(() => ChildCreateNestedManyWithoutSpousesInput, {
    nullable: true,
  })
  children?: ChildCreateNestedManyWithoutSpousesInput;

  @ApiProperty({
    required: false,
    type: () => MarriageCertificateCreateNestedManyWithoutSpousesInput,
  })
  @ValidateNested()
  @Type(() => MarriageCertificateCreateNestedManyWithoutSpousesInput)
  @IsOptional()
  @Field(() => MarriageCertificateCreateNestedManyWithoutSpousesInput, {
    nullable: true,
  })
  marriageCertificates?: MarriageCertificateCreateNestedManyWithoutSpousesInput;

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
}

export { SpouseCreateInput as SpouseCreateInput };
