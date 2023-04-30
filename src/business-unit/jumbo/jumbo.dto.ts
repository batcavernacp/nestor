import { IFamilia } from '../familia/familia.interface';
import { IGrupo } from '../grupo/grupo.interface';
import { IFornecedor } from '../fornecedor/fornecedor.interface';
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
  familia: IFamilia;

  @Field(() => ID)
  grupo: IGrupo;

  @Field(() => ID)
  fornecedor: IFornecedor;
}
