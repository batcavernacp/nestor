import { IJumbo } from '../../jumbo/jumbo.interface';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CreateBobinaDto {
  @Field()
  largura: number;

  @Field()
  comprimento: number;

  @Field(() => ID)
  jumbo: IJumbo;
}
