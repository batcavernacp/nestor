import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class VendedorDto {
  @Field()
  codigo: number;

  @Field()
  nome: string;
}
