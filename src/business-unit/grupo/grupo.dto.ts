import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GrupoDto {
  @Field()
  codigo: number;

  @Field()
  nome: string;
}
