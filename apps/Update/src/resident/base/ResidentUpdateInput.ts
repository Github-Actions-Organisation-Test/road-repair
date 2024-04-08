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
import { IsInt, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ComplaintUpdateManyWithoutResidentsInput } from "./ComplaintUpdateManyWithoutResidentsInput";
import { UpdateUpdateManyWithoutResidentsInput } from "./UpdateUpdateManyWithoutResidentsInput";

@InputType()
class ResidentUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  areaId?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  userId?: number;

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
    type: () => ComplaintUpdateManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => ComplaintUpdateManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => ComplaintUpdateManyWithoutResidentsInput, {
    nullable: true,
  })
  complaints?: ComplaintUpdateManyWithoutResidentsInput;

  @ApiProperty({
    required: false,
    type: () => UpdateUpdateManyWithoutResidentsInput,
  })
  @ValidateNested()
  @Type(() => UpdateUpdateManyWithoutResidentsInput)
  @IsOptional()
  @Field(() => UpdateUpdateManyWithoutResidentsInput, {
    nullable: true,
  })
  updates?: UpdateUpdateManyWithoutResidentsInput;
}

export { ResidentUpdateInput as ResidentUpdateInput };
