import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class FornecedorDto {
  @Field()
  codigo: number;

  @Field()
  nome: string;
}
