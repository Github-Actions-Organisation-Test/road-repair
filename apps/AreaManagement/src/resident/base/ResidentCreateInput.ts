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
import { IsInt, IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintCreateNestedManyWithoutResidentsInput } from "./ComplaintCreateNestedManyWithoutResidentsInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { AreaWhereUniqueInput } from "../../area/base/AreaWhereUniqueInput";

@InputType()
class ResidentCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  userId!: number;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ComplaintCreateNestedManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintCreateNestedManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => ComplaintCreateNestedManyWithoutResidentsInput, {
    nullable: true,
  })
  complaints?: ComplaintCreateNestedManyWithoutResidentsInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  updates?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => AreaWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AreaWhereUniqueInput)
  @IsOptional()
  @Field(() => AreaWhereUniqueInput, {
    nullable: true,
  })
  area?: AreaWhereUniqueInput | null;
}

export { ResidentCreateInput as ResidentCreateInput };
