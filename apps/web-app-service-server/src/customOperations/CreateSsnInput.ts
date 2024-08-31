import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class CreateSsnInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    number!: string;

    @Field(() => Date)
    @Type(() => Date)
    issuedDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    expirationDate!: Date;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    personId!: string;
}

export { CreateSsnInput as CreateSsnInput };