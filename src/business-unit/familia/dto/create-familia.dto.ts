import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFamiliaDto {
  @Field()
  codigo: number;

  @Field()
  nome: string;
}
