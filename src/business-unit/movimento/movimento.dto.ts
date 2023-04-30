import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class MovimentoDto {
  @Field(() => ID)
  bobina_id: string;

  @Field()
  quantidade: number;

  @Field(() => ID)
  pedido_id: string;
}
