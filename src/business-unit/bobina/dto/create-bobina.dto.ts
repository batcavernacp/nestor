import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBobinaDto {
  @Field()
  largura: number;

  @Field()
  comprimento: number;

  @Field(() => ID)
  jumbo_id: string;
}
