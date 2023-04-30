import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class JumboDto {
  @Field()
  codigo: string;

  @Field()
  nome: string;

  @Field()
  referencia: number;

  @Field()
  comprimento: number;

  @Field()
  largura: number;

  @Field(() => ID)
  familia_id: string;

  @Field(() => ID)
  grupo_id: string;

  @Field(() => ID)
  fornecedor_id: string;
}
