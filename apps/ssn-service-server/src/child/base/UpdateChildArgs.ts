/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ChildWhereUniqueInput } from "./ChildWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ChildUpdateInput } from "./ChildUpdateInput";

@ArgsType()
class UpdateChildArgs {
  @ApiProperty({
    required: true,
    type: () => ChildWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ChildWhereUniqueInput)
  @Field(() => ChildWhereUniqueInput, { nullable: false })
  where!: ChildWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ChildUpdateInput,
  })
  @ValidateNested()
  @Type(() => ChildUpdateInput)
  @Field(() => ChildUpdateInput, { nullable: false })
  data!: ChildUpdateInput;
}

export { UpdateChildArgs as UpdateChildArgs };
