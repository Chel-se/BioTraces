/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PassportDetailWhereUniqueInput } from "../../passportDetail/base/PassportDetailWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PassportDetailCreateNestedManyWithoutPeopleInput {
  @Field(() => [PassportDetailWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PassportDetailWhereUniqueInput],
  })
  connect?: Array<PassportDetailWhereUniqueInput>;
}

export { PassportDetailCreateNestedManyWithoutPeopleInput as PassportDetailCreateNestedManyWithoutPeopleInput };
