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
import { IsDate, IsString, ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { Person } from "../../person/base/Person";
import { Spouse } from "../../spouse/base/Spouse";

@ObjectType()
class MarriageCertificate {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
    required: false,
    type: () => Spouse,
  })
  @ValidateNested()
  @Type(() => Spouse)
  @IsOptional()
  spouse?: Spouse | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { MarriageCertificate as MarriageCertificate };
