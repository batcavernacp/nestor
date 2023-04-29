import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateClienteDto {
  @Field()
  codigo: number;

  @Field()
  nome: string;
}
