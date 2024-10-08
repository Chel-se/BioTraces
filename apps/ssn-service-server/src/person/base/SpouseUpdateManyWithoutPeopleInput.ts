/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { SpouseWhereUniqueInput } from "../../spouse/base/SpouseWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class SpouseUpdateManyWithoutPeopleInput {
  @Field(() => [SpouseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SpouseWhereUniqueInput],
  })
  connect?: Array<SpouseWhereUniqueInput>;

  @Field(() => [SpouseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SpouseWhereUniqueInput],
  })
  disconnect?: Array<SpouseWhereUniqueInput>;

  @Field(() => [SpouseWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [SpouseWhereUniqueInput],
  })
  set?: Array<SpouseWhereUniqueInput>;
}

export { SpouseUpdateManyWithoutPeopleInput as SpouseUpdateManyWithoutPeopleInput };
