/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BirthDetailsWhereUniqueInput } from "../../birthDetails/base/BirthDetailsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BirthDetailsUpdateManyWithoutPeopleInput {
  @Field(() => [BirthDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BirthDetailsWhereUniqueInput],
  })
  connect?: Array<BirthDetailsWhereUniqueInput>;

  @Field(() => [BirthDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BirthDetailsWhereUniqueInput],
  })
  disconnect?: Array<BirthDetailsWhereUniqueInput>;

  @Field(() => [BirthDetailsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BirthDetailsWhereUniqueInput],
  })
  set?: Array<BirthDetailsWhereUniqueInput>;
}

export { BirthDetailsUpdateManyWithoutPeopleInput as BirthDetailsUpdateManyWithoutPeopleInput };
