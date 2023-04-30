import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class EntradaDto {
  @Field(() => ID)
  jumbo_id: string;

  @Field()
  quantidade: number;
}
