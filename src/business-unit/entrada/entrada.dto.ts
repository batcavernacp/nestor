import { IJumbo } from '../jumbo/jumbo.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class EntradaDto {
  @Field(() => ID)
  jumbo: IJumbo;

  @Field()
  quantidade: number;
}
